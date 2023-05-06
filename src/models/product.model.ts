import { Model, Schema, Types, model } from "mongoose";
type Review = {
  name: string;
  rating: number;
  comment: string;
  user: Types.ObjectId;
};

export interface IProduct {
  title: string;
  description: string;
  imgs: string[];
  price: number;
  inStock: number;
  sold: number;
  category: string;
  quantity: number;
  brand: Schema.Types.ObjectId;
  rate: number;
  feedback: Review[];
}
interface IProductMethods {}
type ProductModel = Model<IProduct, {}, IProductMethods>;
const reviewSchema = new Schema<Review>(
  {
    name: { type: String, required: true, unique: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    category: { type: "String", required: true },
    quantity: { type: Number, default: 0 },
    brand: { type: Schema.Types.ObjectId, ref: "Brand" },
    rate: {
      type: Number,
      default: 0,
      min: [1, "min value of rate is 1"],
      max: [5, "max value of rate is 5"],
    },
    feedback: [reviewSchema],
  },
  { timestamps: true }
);

export const Product = model<IProduct, ProductModel>("Product", productSchema);
