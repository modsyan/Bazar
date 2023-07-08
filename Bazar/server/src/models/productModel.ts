// import mongoose, { Model, Schema, model } from "mongoose";
import { Model, Schema, model } from "mongoose";
import { IProduct } from "@bazar/shared/types/types";

interface IProductMethods {}
type ProductModel = Model<IProduct, {}, IProductMethods>;

const productSchema = new Schema<IProduct>(
  {
    // userId: { type: Schema.Types.ObjectId, ref: "USER" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    // inStock: { type: Number, required: false },
    sold: { type: Number, default: 0 },
    category: { type: "String", required: false },
    quantity: { type: Number, default: 0 },
    // brand: { type: Schema.Types.ObjectId, ref: "Brand" },
    rate: {
      type: Number,
      default: 0,
      min: [0, "min value of rate is 0"],
      max: [5, "max value of rate is 5"],
    },
    discount: {
      status: {
        type: Boolean,
        default: false,
      },
      value: {
        type: Number,
        default: 0,
      },
    },
    images: [String],
    feedback: [{type: Schema.Types.ObjectId, ref: "REVIEW", required: false}],
  },
  { timestamps: true }
);

export const Product = model<IProduct, ProductModel>("Product", productSchema);
