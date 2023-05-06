import { IUser } from "./types";

export interface GetAllUsersRequest {}
export interface GetAllUserResponse {
  success: boolean,
  data:{
    length: number;
    users: IUser[];
  }
}
