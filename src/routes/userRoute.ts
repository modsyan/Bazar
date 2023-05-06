import { Router } from "express";
import {  }from "../controllers/userController";

Router().route("/").get(new UserController().getAllUsers);

// Router
//   .route('/:id')
//   .get()
//   .patch()
//   .delete()

module.exports = Router;
