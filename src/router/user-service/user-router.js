import express from "express";
import userController from "../../controller/user-service/user-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";

export const userRouter = express.Router()

userRouter.post("/", userController.register)
userRouter.post("/login", userController.login)
userRouter.post("/refresh-token", userController.refreshToken)

userRouter.use(jwtAuthMiddleware)
userRouter.patch("/:id", userController.update)
userRouter.get("/:id", userController.getUser)
