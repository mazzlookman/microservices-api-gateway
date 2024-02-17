import express from "express";
import userController from "../../controller/user-service/user-controller.js";

export const userRouter = express.Router()

userRouter.post("/users", userController.register)
userRouter.post("/users/login", userController.login)
userRouter.post("/refresh-token", userController.refreshToken)