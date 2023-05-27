// import { NextFunction } from "express";

// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// Register Service
// exports.Register = async (req, res, next) => {
//   const { fName, lName, email, password } = req.body;
//   // is the user exist?
//   const user = await User.findOne({ email });
//   if (user) {
//     return res.status(400).send({
//       success: false,
//       message: "This user is already exist!",
//     });
//   }
//   const newUser = await User.create({ fName, lName, email, password });

//   // Generate Token
//   const token = generateToken(newUser._id);

//   // Send Response
//   res.status(201).json({
//     success: true,
//     message: "User created successfully",
//     token,
//     user: {
//       id: newUser._id,
//       fName: newUser.fName,
//       lName: newUser.lName,
//       email: newUser.email,
//     },
//   });
// };

// // Login Service
// export const Login = async (req: Request, res:Response, next: NextFunction) => {
//   const { email, password } = req.body;

//   // Check if user exists
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid email or password",
//     });
//   }

//   // Check password
//   const isMatch = await user.matchPassword(password);
//   if (!isMatch) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid email or password",
//     });
//   }

//   // Generate Token
//   const token = generateToken(user._id);

//   // Send Responsvk e
//   res.status(200).json({
//     success: true,
//     message: "User logged in successfully",
//     token,
//     user: {
//       id: user._id,
//       fName: user.fName,
//       lName: user.lName,
//       email: user.email,
//     },
//   });
// };

// // Tokenization
// const generateToken = (payload: string) => {
//   const token = jwt.sign({ _id: payload }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
//   return token;
// };
