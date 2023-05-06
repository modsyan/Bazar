
export interface JwtObject {
  userId: string;
}

export enum EUserRole {
  Admin =  "admin",
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