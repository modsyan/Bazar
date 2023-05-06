import express from "express";
import { GetAllUserResponse, GetAllUsersRequest } from "../shared/src/api";
import { ExpressHandler, ExpressHandlersWithParams } from "../shared/types";
import userModel from "../models/userModel";
import crypto from "crypto";

export class UserController {
  constructor() {}

  public getAllUsers: ExpressHandlersWithParams< {success: boolean}, GetAllUsersRequest, GetAllUserResponse> =
    async (req, res, next) => {
      const users = userModel.find();

      return res.send({
        success: true,
        data: {
          length: (await users).length,
          users: users,
        },
      });
    };
}
