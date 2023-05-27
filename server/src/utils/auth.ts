import jwt from "jsonwebtoken";
import {getJwtSecret} from './env';
import { JwtObject } from "../types/types";

export function signJwt(obj: { userId: string }): string {
  return jwt.sign(obj, getJwtSecret(), {
    expiresIn: "10d",
  });
}

export function verifyJwt(token: string): JwtObject{
  return jwt.verify(token, getJwtSecret()) as JwtObject;
}
