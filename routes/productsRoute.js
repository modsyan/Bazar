const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/").get(productController.getAllProducts());
