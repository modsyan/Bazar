// import { Request, Response, NextFunction } from "express";
import {
  AddProductsRequest,
  AddProductsResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetAllProductsRequest,
  GetAllProductsResponse,
  GetProductByIdRequset,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../shared/src/api";
import { ExpressHandler, WithError } from "../shared/types";
// import { IProduct } from "../shared/src/types";
// import { ProductService } from "../service/productService";

import { Product } from "../models/productModel";
import { IProduct } from "../shared/src/types";

// const productService = new ProductService();
export class ProductController {
  constructor() {}
  public getAll: ExpressHandler<GetAllProductsRequest, GetAllProductsResponse> =
    async (_req, res, _next) => {
      const product: IProduct[] = await Product.find();
      return res.status(200).json({
        success: true,
        data: {
          length: product.length,
          product: product,
        },
      });
    };

  public addMany: ExpressHandler<
    AddProductsRequest[],
    WithError<AddProductsResponse>
  > = async (req, res, _next) => {
    const products = req.body;
    if (!products.length) throw new Error("adding products failed");
    products.forEach((prod) => {
      try {
        Product.create(prod);
      } catch (e: any) {
        throw new Error("Product Creation Failed");
      }
    });
    return res.status(201).send({
      success: true,
      message: "Products Added",
    });
  };

  public deleteOne: ExpressHandler<
    DeleteProductRequest,
    DeleteProductResponse
  > = async (req, res, _next) => {
    const { id } = req.body;
    if (!id) throw new Error("Product id is missing");
    const product = await Product.findById(id);
    if (!product) throw new Error(`Product with that id: ${id}`);
    await Product.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ success: true, message: `Product deleted successfully` });
  };

  public update: ExpressHandler<UpdateProductRequest, UpdateProductResponse> =
    async (_req, _res, _next) => {};

  public addOne: ExpressHandler<AddProductsRequest, AddProductsResponse> =
    async (_req, _res, _next) => {};

  public getOne: ExpressHandler<GetProductByIdRequset, GetAllProductsResponse> =
    async (_req, _res, _next) => {};
}
