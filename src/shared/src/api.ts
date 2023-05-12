import { IProduct, IUser } from "./types";

export interface GetAllUsersRequest {}

export interface GetAllUserResponse {
  success: boolean;
  data: {
    length: number;
    users: IUser[];
  };
}

export interface GetAllProductsRequest {}
export interface GetAllProductsResponse {
  success: boolean;
  data: {
    length: number;
    product: IProduct[];
  };
}

export interface GetProductByIdRequset {}
export interface GetProductByIdResponse {
  success: boolean;
  data: {
    product: IProduct;
  };
}

export interface AddProductsRequest {
  name: string;
  price: number;
  oldPrice: number;
  discription: string;
  images: string[];
}

export interface AddProductsResponse {
  success: boolean;
  message: string;
}

export interface DeleteProductRequest {
  id: string;
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

export interface AddProductRequest {
  name: string;
  price: number;
  oldPrice: number;
  discription: string;
  images: string[];
}

export interface AddProductResponse {
  success: boolean;
  message: string;
}
