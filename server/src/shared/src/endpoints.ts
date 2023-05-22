export type EndPointConfig = {
  url: string;
  method: "get" | "post" | "patch" | "delete";
  auth?: boolean | undefined;
  sensitive?: boolean;
};

export enum EndPoints {
  healthz = "healthz",

  // signin = "signin",
  // signup = "signup",

  // getUser = "getUser",
  // getCurrentUser = "getCurrentUser",
  // updateCurrentUser = "updateCurrentUser",
  getAllUser = "getAllUsers",

  getProduct = "getProduct",
  getAllProducts = "getAllProducts",
  createProduct = "createProduct",
  updateProduct = "updateProduct",
  deleteProduct = "deleteProduct",

  // topRatedProducts = "topRatedProducts",
  // topSellers = "topSellers",
  // listProducts = "listProducts",
  // getWishList = "getWishList",
  // orders = "orders",
}

export const ENDPOINT_CONFIGS: { [key in EndPoints]: EndPointConfig } = {
  [EndPoints.healthz]: { method: "get", url: "/api/v1/healthz" },

  // [EEndPoints.signin]: {
  //   method: "post",
  //   url: "/api/v1/signin",
  //   sensitive: true,
  // },
  // [EEndPoints.signup]: {
  //   method: "post",
  //   url: "/api/v1/signup",
  //   sensitive: true,
  // },

  // [EndPoints.getUser]: {
  //   url: "/api/v1/users/:id",
  //   method: "get",
  // },

  [EndPoints.getAllUser]: {
    url: "/api/v1/users/",
    method: "get",
  },

  // [EEndPoints.getCurrentUser]: {
  //   url: "/api/v1/users/",
  //   method: "get",
  //   auth: true,
  //   sensitive: undefined,
  // },

  // [EEndPoints.updateCurrentUser]: {
  //   url: "/api/v1/users",
  //   method: "patch",
  //   auth: true,
  // },

  [EndPoints.getProduct]: {
    url: "/api/v1/products",
    method: "get",
  },

  [EndPoints.getAllProducts]: {
    url: "/api/v1/products",
    method: "get",
  },

  [EndPoints.createProduct]: {
    url: "/api/v1/products",
    method: "post",
    auth: true,
  },

  [EndPoints.updateProduct]: {
    url: "/api/v1/products",
    method: "patch",
    auth: true,
  },

  [EndPoints.deleteProduct]: {
    url: "/api/v1/products",
    method: "delete",
    auth: true,
  },

  // [EEndPoints.topRatedProducts]: {
  //   url: "/api/v1/topRatedProducts",
  //   method: "get",
  // },

  // [EEndPoints.topSellers]: {
  //   url: "/api/v1/topSellers",
  //   method: "get",
  // },

  // [EEndPoints.listProducts]: {
  //   url: "/api/v1/listProducts",
  //   method: "get",
  // },

  // [EEndPoints.getWishList]: {
  //   url: "/api/v1/wishlist",
  //   method: "get",
  //   auth: true,
  // },

  // [EEndPoints.orders]: {
  //   url: "/api/v1/orders",
  //   method: "get",
  //   auth: true,
  // },
};
