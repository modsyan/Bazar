import { UnauthorizedError } from "../helpers/appError";
import { ExpressHandler, JwtObject } from "../types/types";
import { verifyJwt } from "../utils/auth";
import {
  /* JwtPayload, */
  TokenExpiredError,
  VerifyErrors,
} from "jsonwebtoken";
import { User } from "../models/userModel";
import { IUser } from "@bazar/shared/types/types";

export const jwtParserMiddleware: ExpressHandler<any, any> = async (
  req,
  res,
  next
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    throw new UnauthorizedError(
      "you are not authenticated, please login first"
    );
  let payload: JwtObject;
  try {
    payload = verifyJwt(token);
  } catch (error) {
    const verifyErr = error as VerifyErrors;
    if (verifyErr instanceof TokenExpiredError) {
      throw new UnauthorizedError("Token is Expired");
    }
    throw new UnauthorizedError("Bad Token");
  }
  const user: IUser | null = await User.findById(payload.userId);
  if (!user) {
    throw new UnauthorizedError("User Not Found");
  }

  res.locals.userId = user._id;
  return next();
};

export const enforceJwtMiddleWare: ExpressHandler<any, any> = async (
  _req,
  res,
  next
) => {
  if(!res.locals.userId) {
    throw new UnauthorizedError();
  }
  next();
};
