// // import "@types/jest";
// import request from "supertest";
// import "@types/jest";
// import { CreateUserRequest, CreateUserResponse } from "@bazar/shared/types/api";
// import { createApp } from "../app";
// import { afterEach, beforeEach, describe, it } from "node:test";
// import { UserController } from "./userController";
// import { Request, Response } from "express";
// import { dbConnection } from "../config/database";

// // let server: Promise<Express>;

// beforeAll(() => {
//   // server = await createApp();
// });

// describe("RegisterController", () => {
//   let userController: UserController;

//   beforeEach(() => {
//     userController = new UserController();
//     dbConnection();
//   });
//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it("POST /register --> create new normal account  ", async () => {
//     const user: CreateUserRequest = {
//       firstName: "Muhammad",
//       lastName: "Hamdy",
//       username: "testtest",
//       password: "123123123",
//       email: "testtest@gmail.com",
//       phoneNumber: "01027353163",
//       birthDate: new Date("9-12-2002"),
//       role: "buyer",
//     };

//     const req: Partial<Request> = {
//       body: {
//         ...user,
//       },
//     };

//     const res: Partial<CreateUserResponse> = {
//       // status: jest.fn().mockReturnThis(),
//       // data: {
//       // }
//     };

//     return await request(createApp)
//       .post("/register")
//       .send(user)
//       .expect(200)
//       .end((err, _res) => {
//         if (err) return err;
//         // done();
//       });
//     // .then((response) => {});
//   });
// });
