import express, { RequestHandler } from "express";
// import morgan from 'morgan';
import cors from "cors";
import { EndPoints, ENDPOINT_CONFIGS } from "./shared/src/endpoints";
import { UserController } from "./controllers/userController";
import { ProductController } from "./controllers/productController";
import {
  enforceJwtMiddleWare,
  jwtParserMiddleware,
} from "./middlewares/authMiddleware";
import asyncHandler from "express-async-handler";
import { LOGGER } from "./utils/logger";

export async function createApp(logRequest = true) {
  // if(process.env.NODE_ENV === "development") {
  //   app.use(morgan('dev'));
  // }
  // app.use(express.static(`${__dirname}/public`));

  const app = express();
  app.use(express.json());
  app.use(cors());

  if (logRequest) {
    // app.use();
  }

  // Controllers Objects
  const userController = new UserController();
  const productController = new ProductController();

  // map endpoint to controllers
  const CONTROLLERS: { [key in EndPoints]: RequestHandler<any, any> } = {
    [EndPoints.healthz]: (_, res) => res.send({ status: "ok" }),
    [EndPoints.getAllProducts]: productController.getAllProducts,
    [EndPoints.getAllUser]: userController.getAllUsers,
    // [EEndPoints.signin]: undefined,
    // [EEndPoints.signup]: undefined,
    // [EEndPoints.getUser]: undefined,
    // [EEndPoints.getCurrentUser]: undefined,
    // [EEndPoints.updateCurrentUser]: undefined,
    // [EEndPoints.getProduct]: undefined,
    // [EEndPoints.createProduct]: undefined,
    // [EEndPoints.updateProduct]: undefined,
    // [EEndPoints.deleteProduct]: undefined,
    // [EEndPoints.topRatedProducts]: undefined,
    // [EEndPoints.topSellers]: undefined,
    // [EEndPoints.listProducts]: undefined,
    // [EEndPoints.getWishList]: undefined,
    // [EEndPoints.orders]: undefined
  };

  Object.keys(EndPoints).forEach((endpointKey) => {
    const endpoint = EndPoints[endpointKey as keyof typeof EndPoints]
    const endPointConfig = ENDPOINT_CONFIGS[endpoint];
    const controller = CONTROLLERS[endpoint];
    LOGGER.info(controller);
    const requiresAuth = endPointConfig.auth ?? false;

    if (requiresAuth) {
      app[endPointConfig.method](
        endPointConfig.url,
        jwtParserMiddleware,
        enforceJwtMiddleWare,
        asyncHandler(controller)
      );
    } else {
      app[endPointConfig.method](
        endPointConfig.url,
        // jwtParserMiddleware,
        asyncHandler(controller)
      );
    }
  });
  return app;
}
