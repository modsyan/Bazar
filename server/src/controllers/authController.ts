import { ExpressHandler } from "../types/types";

export class AuthController {
  constructor() {}
  public login: ExpressHandler<{}, {}> = async (req, res, next) => {};
  public register: ExpressHandler<{}, {}> = async (req, res, next) => {};
}
