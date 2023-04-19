const Product = require("../models/productModel")

exports.getAllProducts = (req, res, next) => {
  const product = Product.find();
  res.status(200).json({
    success: true,
    data: {
      length: product.length,
      product: product,
    }
  });
}