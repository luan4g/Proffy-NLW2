import { Request, Response } from "express";

import db from "../database/connection";
import convertyHourToMinute from "../utils/convertHoursToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertyHourToMinute(time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("user_classes", "classes.user_id", "=", "user_classes.id")
      .select(["classes.*", "user_classes.*"]);

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    const { whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    const user = {
      whatsapp,
      bio,
    };

    try {
      const insertedUsersIds = await trx("user_classes").insert(user);

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertyHourToMinute(scheduleItem.from),
          to: convertyHourToMinute(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch (error) {
      await trx.rollback();

      return res.status(400).json({
        message: "Unexpected error while creating new class",
      });
    }
  }
}
