import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "../database/connection";
import jwt from "jsonwebtoken";
import mailer from "../modules/mailer";

const authConfig = require("../config/auth");

function generateToken(params = {}) {
  const token = jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });

  return token;
}

class UsersController {
  async create(req: Request, res: Response) {
    const { name, surname, email, password } = req.body;

    const user = {
      name,
      surname,
      email,
      password,
    };

    user.email = user.email.toLowerCase();

    const [userExist] = await db("users").where("email", user.email);

    if (userExist)
      return res.status(400).send({ error: "User already exist!" });

    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;

    const insertedUserId = await db("users").insert(user);

    const token = generateToken({ id: insertedUserId[0] });

    user.password = undefined;

    return res.send({ user, token });
  }

  async index(req: Request, res: Response) {
    const { email, password } = req.body;

    const lowerEmail = email.toLowerCase();

    const userExist = await db("users")
      .where("email", lowerEmail)
      .select("*")
      .first();
    if (!userExist) return res.status(400).send({ error: "User not found" });

    const user = await db("users")
      .where("email", lowerEmail)
      .select("*")
      .first();

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Password invalid" });

    const token = generateToken({ id: user.id });

    user.password = undefined;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    return res.send({ user, token });
  }

  async update(req: Request, res: Response) {
    const { email } = req.body;

    const lowerEmail = email.toLowerCase();

    const user = await db("users")
      .where("email", lowerEmail)
      .select("*")
      .first();
    if (!user) return res.status(400).send({ error: "User not found" });

    const token = crypto.randomBytes(20).toString("hex");

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await db("users").where("email", lowerEmail).select("*").update({
      passwordResetToken: token,
      passwordResetExpires: now,
    });

    const link = `http://localhost:3000/reset-password/${token}`;

    const mail = {
      from: "ak1r4gh0st@gmail.com",
      to: lowerEmail,
      subject: "Proffy: Reset Password",
      template: "auth/forgot-password",
      context: {
        link,
      },
    };

    mailer.sendMail(mail, (err) => {
      if (err) return res.status(400).send({ error: err });

      return res.send();
    });
  }

  async reset(req: Request, res: Response) {
    const { email, password } = req.body;
    const { token } = req.params;

    const lowerEmail = email.toLowerCase();

    const user = await db("users")
      .where("email", lowerEmail)
      .select("*")
      .first();
    if (!user) return res.status(400).send({ error: "User not found" });

    const now = new Date();

    if (now > user.passwordResetExpires)
      return res
        .status(400)
        .send({ error: "Token expires, generate a new one" });

    if (token !== user.passwordResetToken)
      return res.status(400).send({ error: "Token invalid" });

    const hash = await bcrypt.hash(password, 10);

    await db("users").where("email", lowerEmail).select("*").update({
      password: hash,
    });

    await db("users").where("email", lowerEmail).select("*").update({
      passwordResetToken: null,
      passwordResetExpires: null,
    });

    return res.status(200).send({ message: "Your password has reset" });
  }
}

export default UsersController;
