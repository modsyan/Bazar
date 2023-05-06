import mongoose, { Document } from "mongoose";
import validator from "validator";
import { IUser } from "../shared/src/types";




const userSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    require: [true, "Missing Name of the User"],
    trim: true,
  },

  lastName: {
    type: String,
    require: [true, "Missing Name of the User"],
    trim: true,
  },

  userName: {
    type: String,
    require: [true, "Missing Name of the User"],
    trim: true,
    unique: true,
  },

  email: {
    type: String,
    require: [true, "Missing Email of the User"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Wrong Password Format"],
  },

  birthDate: {
    type: Date,
    // TODO
    // min: Date.now(), // grater than 10 years
    // max: Date.now(), // less than 100 years
  },

  password: {
    type: String,
    required: [true, "Missing Password"],
  },

  Orders: [{ type: mongoose.Types.ObjectId, ref: "PRODUCT" }],

  wishList: [{ type: mongoose.Types.ObjectId, ref: "PRODUCT" }],

  role: {
    type: String,
    enum: ['admin', 'buyer', 'seller', 'operation'],
  }
},
{timestamps: true,}
);

export default mongoose.model<IUser>("USER", userSchema);

