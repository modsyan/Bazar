import { RequestHandler } from "express";
import { EnumType } from "typescript";

type WithError<T> = T & { error: string };

export type ExpressHandler<req, res> = RequestHandler<
  string,
  Partial<WithError<res>>,
  Partial<req>,
  any
>;

export type ExpressHandlersWithParams<params, req, res> = RequestHandler<
  Partial<params>,
  Partial<WithError<req>>,
  Partial<res>,
  any
>;


