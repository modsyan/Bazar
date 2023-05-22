const router = require("express").Router();
import { ProductController } from "../controllers/productController";

const productController = new ProductController();

router.get("/").get(productController.getAllProducts);
