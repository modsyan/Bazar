// import { Request, Response, NextFunction } from "express";

import {
  ExpressHandler,
  ExpressHandlersWithParams,
  WithError,
} from "../types/types";
import { Product as ProductDB } from "../models/productModel";
import { IProduct } from "@bazar/shared/types/types";
import { LOGGER } from "../utils/logger";
import { Types } from "mongoose";

import {
  BadRequestError,
  NotFoundError,
  UnprocessableEntity,
  UnprocessableEntity as _,
} from "../helpers/appError";

import {
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetAllProductsRequest,
  GetAllProductsResponse,
  GetProductByIdRequest,
  GetProductByIdResponse,
  GetProductByQueryRequest,
  GetProductByQueryResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../../../shared/types/api";

export class ProductController {
  constructor() {}

  public getById: ExpressHandlersWithParams<
    { productId: Types.ObjectId },
    GetProductByIdRequest,
    GetProductByIdResponse
  > = async (req, res, next) => {
    const productId = req.params.productId;
    // if (!productId) next(new BadRequestError("Missing ProductId at params"));
    const product: IProduct | null = await ProductDB.findById(productId);
    if (!product) throw new BadRequestError("product not Found");

    res.status(200).json({
      success: true,
      data: {
        product: product,
      },
    });
  };

  public getByQuery: ExpressHandler<
    GetProductByQueryRequest,
    GetProductByQueryResponse
  > = async (_req, _res, _next) => {};

  public create: ExpressHandler<CreateProductRequest, CreateProductResponse> =
    async (req, res, next) => {
      const {
        title,
        description,
        category,
        discount,
        images,
        oldPrice,
        price,
        quantity,
      } = req.body;

      if (
        !title ||
        !description ||
        !category ||
        !discount ||
        !images ||
        !oldPrice ||
        !price ||
        !quantity
      ) {
        //TODO
        // need better descriptive Error to the missing properties
        LOGGER.error(
          `title: ${title},\n` +
            `description: ${description},\n` +
            `category: ${category},\n` +
            `discount: ${discount},\n` +
            `images: ${images},\n` +
            `oldPrice: ${oldPrice},\n` +
            `price: ${price},\n` +
            `quantity: ${quantity},\n`
        );
        return next(new BadRequestError());
      }

      const product: IProduct = {
        title: title,
        description: description,
        images: images,
        price: price,
        oldPrice: oldPrice,
        quantity: quantity,
        category: category,
        discount: discount,
        sold: 0,
        rate: 0,
        feedback: [],
      };

      try {
        await ProductDB.create(product);
      } catch (error) {
        return next(
          new UnprocessableEntity("missing properties", error as Error)
        );
      }

      return res
        .status(200)
        .json({ success: true, message: "product created successfully" });
    };

  public update: ExpressHandler<UpdateProductRequest, UpdateProductResponse> =
    async (_req, _res, _next) => {};

  public deleteById: ExpressHandlersWithParams<
    { productId: Types.ObjectId },
    DeleteProductRequest,
    DeleteProductResponse
  > = async (req, res, next) => {
    const productId = req.params.productId;
    const product = await ProductDB.findByIdAndDelete(productId);
    if (!product)
      throw new NotFoundError(`Product with ${productId} not Found`);

    return res
      .status(200)
      .send({ success: true, message: `Product deleted successfully` });
  };

  public getAll: ExpressHandler<GetAllProductsRequest, GetAllProductsResponse> =
    async (_req, res, next) => {
      const product: IProduct[] = await ProductDB.find();
      return res.status(200).json({
        success: true,
        data: {
          length: product.length,
          product: product,
        },
      });
    };

  public createMany: ExpressHandler<
    CreateProductRequest[],
    WithError<CreateProductResponse>
  > = async (req, res, _next) => {
    const products = req.body;
    if (!products.length) throw new Error("adding products failed");
    products.forEach((prod) => {
      try {
        ProductDB.create(prod);
      } catch (e: any) {
        throw new Error("Product Creation Failed");
      }
    });
    return res.status(201).send({
      success: true,
      message: "Products Added",
    });
  };
}
