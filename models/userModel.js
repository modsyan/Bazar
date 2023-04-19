const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "Missing Name of the User"],
    trim: true,
  },
  LastName: {
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
  password: {},
  cart: [{ type: mongoose.Types.ObjectId, ref: "PRODUCT" }],
  favorites: [{ type: mongoose.Types.ObjectId, ref: "PRODUCT" }],
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
