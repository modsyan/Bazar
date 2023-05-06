
export type EndPointConfig = {
  url: string;
  method: "get" | "post" | "patch" | "delete";
  auth?: boolean;
  sensitive?: boolean;
};

export enum EEndPoints {
  healthz = "healthz",

  signin = "signin",
  signup = "signup",

  getUser = "getUser",
  getCurrentUser = "getCurrentUser",
  updateCurrentUser = "updateCurrentUser",

  getProduct = "getProduct",
  createProduct = "createProduct",
  updateProduct = "updateProduct",
  deleteProduct = "deleteProduct",

  topRatedProducts = "topRatedProducts",
  topSellers = "topSellers",
  listProducts = "listProducts",
  getWishList = "getWishList",
  orders = "orders",
}

export const ENDPOINT_CONFIGS: { [key in EEndPoints]: EndPointConfig } = {
  [EEndPoints.healthz]: { method: "get", url: "/api/v1/healthz" },

  [EEndPoints.signin]: {
    method: "post",
    url: "/api/v1/signin",
    sensitive: true,
  },
  [EEndPoints.signup]: {
    method: "post",
    url: "/api/v1/signup",
    sensitive: true,
  },

  [EEndPoints.getUser]: {
    url: "/api/v1/users/:id",
    method: "get",
  },

  [EEndPoints.getCurrentUser]: {
    url: "/api/v1/users/",
    method: "get",
    auth: true,
    sensitive: undefined,
  },

  [EEndPoints.updateCurrentUser]: {
    url: "/api/v1/users",
    method: "patch",
    auth: true,

  },

  [EEndPoints.getProduct]: {
    url: "/api/v1/products",
    method: "get",
  },

  [EEndPoints.createProduct]: {
    url: "/api/v1/products",
    method: "post",
    auth: true,
  },

  [EEndPoints.updateProduct]: {
    url: "/api/v1/products",
    method: "patch",
    auth: true,
  },

  [EEndPoints.deleteProduct]: {
    url: "/api/v1/products",
    method: "delete",
    auth: true,
  },

  [EEndPoints.topRatedProducts]: {
    url: "/api/v1/topRatedProducts",
    method: "get",
  },

  [EEndPoints.topSellers]: {
    url: "/api/v1/topSellers",
    method: "get",
  },

  [EEndPoints.listProducts]: {
    url: "/api/v1/listProducts",
    method: "get",
  },

  [EEndPoints.getWishList]: {
    url: "/api/v1/wishlist",
    method: "get",
    auth: true,
  },

  [EEndPoints.orders]: {
    url: "/api/v1/orders",
    method: "get",
    auth: true,
  },
};
