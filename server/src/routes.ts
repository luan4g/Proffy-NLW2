import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import UsersController from "./controllers/UsersController";

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.post("/create-account", usersController.create);
routes.post("/signin", usersController.index);
routes.post("/forgot-password", usersController.update);
routes.put("/reset-password/:token", usersController.reset);

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
