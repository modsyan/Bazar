import { Types } from "mongoose";
import { IProduct, IUser } from "./types";

export interface GetAllUsersRequest {}

export interface GetAllUserResponse {
  success: boolean;
  data: {
    length: number;
    users: IUser[];
  };
}

export interface GetUsersRequest {}

export interface GetUserResponse {
  success: boolean;
  data: {
    user: IUser;
  };
}

export interface LoginUserRequest {
  usernameOrEmail: string;
  password: string;
}

export interface LoginUserResponse {
  jwt: string;
}



export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  role: string;
}
export interface CreateUserResponse {
  success: boolean,
  data: {

  message: string,
  user: IUser
  }
}

export interface UpdateUserRequest {}
export interface UpdateUserResponse {}

export interface DeleteUserRequest {}
export interface DeleteUserResponse {
  success: boolean;
  message: string;
  deletedUser: IUser;
}

export interface GetAllProductsRequest {}
export interface GetAllProductsResponse {
  success: boolean;
  data: {
    length: number;
    product: IProduct[];
  };
}

export interface GetProductByIdRequest {
  productId: Types.ObjectId;
}
export interface GetProductByIdResponse {
  success: boolean;
  data: {
    product: IProduct;
  };
}
export interface GetProductByQueryRequest {

}
export interface GetProductByQueryResponse {

}
export interface CreateProductRequest {
  title: string;
  description: string;
  images: string[];
  price: number;
  oldPrice: number;
  discount: number;
  category: string;
  quantity: number;
}

export interface CreateProductResponse {
  success: boolean;
  message: string;
}

export interface DeleteProductRequest {
}

export interface DeleteProductResponse {
  success: boolean;
  message: string;
}

export interface UpdateProductRequest {
  id: string;
  product: Partial<IProduct>;
}
export interface UpdateProductResponse {
  success: boolean;
  message: string;
}


