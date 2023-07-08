// import { Request, Response } from "express";
// import { IUser } from "@bazar/shared/types/types";
// import { CreateUserRequest, CreateUserResponse } from "@bazar/shared/types/api";
// import ApiError, { BadRequestError } from "../helpers/appError";
// import { UserController } from "./userController";
// import { User } from "../models/userModel";
// import "node:test";

// describe("UserController", () => {
//   let userController: UserController;

//   beforeEach(() => {
//     userController = new UserController();
//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   it("should throw BadRequestError if any required property is missing", async () => {
//     const req: Partial<Request> = {
//       body: {
//         // Missing some required properties
//       },
//     };
//     const res: Partial<Response> = {};

//     try {
//       await userController.register(req as Request, res as Response, jest.fn());
//     } catch (error) {
//       expect(error).toBeInstanceOf(BadRequestError);
//       expect(error.message).toContain("missing one of the properties");
//       expect(res.status).not.toHaveBeenCalled();
//       expect(res.send).not.toHaveBeenCalled();
//     }
//   });

//   it("should throw BadRequestError if email is already used", async () => {
//     const req: Partial<Request> = {
//       body: {
//         // Request body with all required properties
//         // ...
//       },
//     };
//     const res: Partial<Response> = {};

//     // Mock User.findOne to return a user with the same email
//     jest.spyOn(User, "findOne").mockResolvedValue({ email: req.body.email });

//     try {
//       await userController.register(req as Request, res as Response, jest.fn());
//     } catch (error) {
//       expect(error).toBeInstanceOf(BadRequestError);
//       expect(error.message).toBe("Email is already used, try another one");
//       expect(res.status).not.toHaveBeenCalled();
//       expect(res.send).not.toHaveBeenCalled();
//     }
//   });

//   it("should throw BadRequestError if username is already used", async () => {
//     const req: Partial<Request> = {
//       body: {
//         // Request body with all required properties
//         // ...
//       },
//     };
//     const res: Partial<Response> = {};

//     // Mock User.findOne to return a user with the same username
//     jest
//       .spyOn(User, "findOne")
//       .mockResolvedValue({ userName: req.body.username });

//     try {
//       await userController.register(req as Request, res as Response, jest.fn());
//     } catch (error) {
//       expect(error).toBeInstanceOf(BadRequestError);
//       expect(error.message).toBe("Username is already used, try another one");
//       expect(res.status).not.toHaveBeenCalled();
//       expect(res.send).not.toHaveBeenCalled();
//     }
//   });

//   it("should create a new user and return success response", async () => {
//     const req: Partial<Request> = {
//       body: {
//         // Request body with all required properties
//         // ...
//       },
//     };
//     const res: Partial<Response> = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     // Mock User.findOne to return null for both email and username
//     jest.spyOn(User, "findOne").mockResolvedValue(null);

//     // Mock User.create to return a mock user
//     const createdUser: IUser = { ...req.body, id: "mockId" };
//     jest.spyOn(User, "create").mockResolvedValue(createdUser);

//     await userController.register(req as Request, res as Response, jest.fn());

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith({
//       success: true,
//       data: {
//         message: "successful user created",
//         user: createdUser,
//       },
//     });
//   });

//   it("should handle and throw ApiError if an error occurs during user creation", async () => {
//     const req: Partial<Request> = {
//       body: {
//         // Request body with all required properties
//         // ...
//       },
//     };
//     const res: Partial<Response> = {};

//     // Mock User.findOne to return null for both email and username
//     jest.spyOn(User, "findOne").mockResolvedValue(null);

//     // Mock User.create to throw an error
//     const errorMessage = "Unhandled error occurred";
//     jest.spyOn(User, "create").mockRejectedValue(new Error(errorMessage));

//     try {
//       await userController.register(req as Request, res as Response, jest.fn());
//     } catch (error) {
//       expect(error).toBeInstanceOf(ApiError);
//       expect(error.statusCode).toBe(500);
//       expect(error.message).toBe(errorMessage);
//       expect(res.status).not.toHaveBeenCalled();
//       expect(res.send).not.toHaveBeenCalled();
//     }
//   });
// });
