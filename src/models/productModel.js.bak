const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    require: [true, "product name is required"],
    trim: true, 
  },
  price: {
    type: Number,
    require: [true, "product price is required"]
  },
  photo: {
    type: String,
    require: [true, "product photo is required"]
  },
});

const Product = mongoose.model('PRODUCT', productSchema);
module.exports = Product;