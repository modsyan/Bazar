import express from "express";
import { GetAllUserResponse, GetAllUsersRequest } from "../shared/src/api";
import { ExpressHandler, ExpressHandlersWithParams } from "../shared/types";
import userModel from "../models/userModel";
import crypto from "crypto";
import { IUser } from "../shared/src/types";

export class UserController {
  constructor() {}

  public getAllUsers: ExpressHandler<GetAllUsersRequest, GetAllUserResponse> =
    async (req, res, next) => {
      const users: IUser[] = await userModel.find();

      res.send({
        success: true,
        data: {
          length: users.length,
          users: users,
        },
      });
    };
}
