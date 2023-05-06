import { IUser } from "./types";

export interface GetAllUsersRequest {}
export interface GetAllUserResponse {
  success: boolean,
  data:{
    users: [IUser];
    length: number;
  }
}
