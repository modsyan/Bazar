// import { Request, Response, NextFunction } from "express";
import {
  GetAllProductsRequest,
  GetAllProductsResponse,
} from "../shared/src/api";
import { ExpressHandler } from "../shared/types";
import { IProduct } from "../shared/src/types";

const Product = require("../models/productModel");

export class ProductController {
  constructor() {}
  public getAllProducts: ExpressHandler<
    GetAllProductsRequest,
    GetAllProductsResponse
  > = async (_req, res, _next) => {
    const product: IProduct[] = await Product.find();
    return res.status(200).json({
      success: true,
      data: {
        length: product.length,
        product: product,
      },
    });
  };
}
