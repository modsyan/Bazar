import { IReview } from "@bazar/shared/types/types";
import { Model, Schema, model } from "mongoose";


interface IReviewMethods {}
type ReviewModel = Model<IReview, {}, IReviewMethods>;

const reviewSchema = new Schema<IReview>(
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

export const Review = model<IReview, ReviewModel>("", reviewSchema);