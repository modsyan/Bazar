import { IProduct, IUser } from "./types";

export interface GetAllUsersRequest {}

export interface GetAllUserResponse {
  success: boolean,
  data:{
    length: number;
    users: IUser[];
  }
}

export interface GetAllProductsRequest{}
export interface GetAllProductsResponse{
  success: boolean;
  data: {
    length: number;
    product: IProduct[];
  }
}