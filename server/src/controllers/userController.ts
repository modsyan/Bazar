import { IUser } from "@bazar/shared/types/types";
import {
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetAllUserResponse,
  GetAllUsersRequest,
  GetUserResponse,
  GetUsersRequest,
  UpdateUserRequest,
  UpdateUserResponse,
} from "../../../shared/types/api";
import { BadRequestError } from "../helpers/appError";
import { ExpressHandler, ExpressHandlersWithParams } from "../types/types";
import { User } from "../models/userModel";
import crypto from "crypto";
import { getPasswordSalt } from "../utils/env";
// import { IUser } from "@bazar/shared/types/types";
// import { BadRequestError } from "../helpers/appError";

export class UserController {
  constructor() {}

  public get: ExpressHandlersWithParams<
    { userId: string },
    GetUsersRequest,
    GetUserResponse
  > = async (_req, _res, _next) => {
    // const userId = req.params.userId;
    // const user: IUser | null = UserDB.findById(userId);
    // if(!user) throw new BadRequestError(`user with ${userId} not found`);
    // return res.status(200).send({success: true, data: {user: user}});
  };

  public login: ExpressHandler<{}, {}> = async (_req, _res, _next) => {};

  public register: ExpressHandler<CreateUserRequest, CreateUserResponse> =
    async (req, res, _next) => {
      const {
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        password,
        birthDate,
        role,
      } = req.body;

      if (
        !firstName ||
        !lastName ||
        !username ||
        !email ||
        !phoneNumber ||
        !password ||
        !birthDate ||
        !role
      ) {
        //todo
        // needed to create Better Error Function to Send Missing Properties
        const objectToSend =
          `firstName: ${firstName}` +
          `lastName: ${lastName}` +
          `username: ${username}` +
          `email: ${email}` +
          `phoneNumber: ${phoneNumber}` +
          `password: ${password}` +
          `birthDate: ${birthDate}` +
          `role: ${role}`;
        //

        throw new BadRequestError(
          `missing one of the properties\n may be the following are missing: ${objectToSend}`
        );
      }
      // check if the phone number or the username in duplicated
      // await User.findOne({ username: username }).exec();

      const user: IUser = {
        id: "",
        firstName: firstName,
        lastName: lastName,
        userName: username,
        password: this._hashPassword(password),
        email: email,
        phoneNumber: phoneNumber,
        birthDate: birthDate,
        address: [],
        role: "Buyer",
        Orders: [],
        wishList: [],
        isBanned: false,
      };
      const createdUser = await User.create(user);
      res.status(200).send({success: true, message: `user is created ${createdUser}`})
    };

  public update: ExpressHandler<UpdateUserRequest, UpdateUserResponse> = async (
    _req,
    _res,
    _next
  ) => {};

  public delete: ExpressHandler<DeleteUserRequest, DeleteUserResponse> = async (
    _req,
    _res,
    _next
  ) => {};

  public getCurrent: ExpressHandler<GetUsersRequest, GetUserResponse> = async (
    _req,
    _res,
    _next
  ) => {};

  public updateCurrent: ExpressHandler<UpdateUserRequest, UpdateUserResponse> =
    async (_req, _res, _next) => {};

  public deleteCurrent: ExpressHandler<DeleteUserRequest, DeleteUserResponse> =
    async (_req, _res, _next) => {};

  public getAll: ExpressHandler<GetAllUsersRequest, GetAllUserResponse> =
    async (_req, _res, _next) => {
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
    async (_req, _res, _next) => {};

  private _hashPassword(password: string): string {
    const salt: string = getPasswordSalt();
    const hashingAlgorithm = "sha512";
    const keyLength = 64;
    const iterations = 64;

    return crypto
      .pbkdf2Sync(password, salt, iterations, keyLength, hashingAlgorithm)
      .toString("hex");
  }
}
