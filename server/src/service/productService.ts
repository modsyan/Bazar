import { Product } from "../models/productModel";
import {
  GetAllProductsRequest,
  GetAllProductsResponse,
} from "../../../shared/types/api";

export class ProductService {
  constructor() {}
  /**
   * GetAllProducts
   */
  public async getAll(
    _body: GetAllProductsRequest
  ): Promise<GetAllProductsResponse> {
    try {
      const products = await Product.find();
      return {
        success: true,
        data: {
          length: products.length,
          product: products,
        },
      } as GetAllProductsResponse;
    } catch (e) {
      return { success: false, data: { length: 0, product: [] } };
    }
  }
  public getTopRatedProducts() {}
  public getProduct(_productId: string) {}
  public createProduct() {}
  public updateProduct(_productId: string) {}
  public deleteProduct(_productId: string) {}
}
