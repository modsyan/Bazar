import {
  DeleteUserRequest,
  DeleteUserResponse,
  GetAllUserResponse,
  GetAllUsersRequest,
  GetUserResponse,
  GetUsersRequest,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../../../shared/types/api";
import { ExpressHandler, ExpressHandlersWithParams } from "../types/types";
// import UserDB from "../models/userModel";
// import crypto from "crypto";
// import { IUser } from "@bazar/shared/types/types";
// import { BadRequestError } from "../helpers/appError";

export class UserController {
  constructor() {}

  public get: ExpressHandlersWithParams<
    { userId: string },
    GetUsersRequest,
    GetUserResponse
  > = async (req, res, next) => {
    // const userId = req.params.userId;
    // const user: IUser | null = UserDB.findById(userId);
    // if(!user) throw new BadRequestError(`user with ${userId} not found`);
    // return res.status(200).send({success: true, data: {user: user}});
  };

  public update: ExpressHandler<UpdateUserRequest, UpdateUserResponse> = async (
    req,
    res,
    next
  ) => {};

  public delete: ExpressHandler<DeleteUserRequest, DeleteUserResponse> = async (
    req,
    res,
    next
  ) => {};

  public getCurrent: ExpressHandler<GetUsersRequest, GetUserResponse> = async (
    req,
    res,
    next
  ) => {};

  public updateCurrent: ExpressHandler<UpdateUserRequest, UpdateUserResponse> =
    async (req, res, next) => {};

  public deleteCurrent: ExpressHandler<DeleteUserRequest, DeleteUserResponse> =
    async (req, res, next) => {};

  public getAll: ExpressHandler<GetAllUsersRequest, GetAllUserResponse> =
    async (_req, res, _next) => {
      // const users: IUser[] = await userModel.find();
      // res.send({
      //   success: true,
      //   data: {
      //     length: users.length,
      //     users: users,
      //   },
      // });
    };

  public UpdateAll: ExpressHandler<UpdateUserRequest, UpdateUserResponse> =
    async (_req, res, _next) => {};
}
