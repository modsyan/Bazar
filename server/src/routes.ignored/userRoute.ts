import { Router } from "express";
import { UserController }from "../controllers/userController";

const userController = new UserController();

Router().route("/").get(userController.getAllUsers);

// Router
//   .route('/:id')
//   .get()
//   .patch()
//   .delete()

module.exports = Router;
