// import "@types/jest";
import request from "supertest";
import { createApp } from "../app";
import { CreateUserRequest } from "@bazar/shared/types/api";


describe("RegisterController", () => {
  it("POST /register --> create new normal account  ", () => {
    const user: CreateUserRequest = {
      firstName: "Muhammad",
      lastName: "Hamdy",
      username: "modsyan",
      password: "123123",
      email: "test@gmail.com",
      phoneNumber: "01027353163",
      birthDate: new Date(),
      role: ["admin"],
    };
    return request(createApp).post("/register").send(user).expect(200);
  });
});
