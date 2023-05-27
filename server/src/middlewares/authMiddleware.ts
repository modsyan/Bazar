import { UnauthorizedError } from "../helpers/appError";
import { ExpressHandler, JwtObject } from "../types/types";
import { verifyJwt } from "../utils/auth";
import {
  /* JwtPayload, */
  TokenExpiredError,
  VerifyErrors,
} from "jsonwebtoken";
import { User } from "../models/userModel";

export const jwtParserMiddleware: ExpressHandler<any, any> = async (
  req,
  _res,
  _next
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
  const user = await User.findById(payload.userId);
  if (user) {
  }
};

export const enforceJwtMiddleWare: ExpressHandler<any, any> = async () =>
  // req,
  // res,
  // next
  {};
