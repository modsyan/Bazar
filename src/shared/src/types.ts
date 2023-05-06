export interface JwtObject {
  userId: string;
}

export enum EUserRole {
  Admin = "admin",
  Operation = "operation",
  buyer = "buyer",
  seller = "seller",
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  birthDate: Date;
  address: [string];
  role: EUserRole;
  Orders: [];
  wishList: [];
  isBanned: boolean;
}
export interface IProduct {
  title: string;
  description: string;
  imgs: string[];
  price: number;
  inStock: number;
  sold: number;
  category: string;
  quantity: number;
  brand: IUser;
  rate: number;
  discount: {
    status: boolean;
    value: number;
  };
  feedback: Review[];
}

export type Review = {
  name: string;
  rating: number;
  comment: string;
  user: IUser;
};
