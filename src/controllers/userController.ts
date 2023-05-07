import { GetAllUserResponse, GetAllUsersRequest } from "../shared/src/api";
import { ExpressHandler } from "../shared/types";
import userModel from "../models/userModel";
// import crypto from "crypto";
import { IUser } from "../shared/src/types";

export class UserController {
  constructor() {}

  public getAllUsers: ExpressHandler<GetAllUsersRequest, GetAllUserResponse> =
    async (_, res, __) => {
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
