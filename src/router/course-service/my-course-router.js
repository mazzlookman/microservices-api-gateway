import express from "express";
import myCourseController from "../../controller/course-service/my-course-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";

export const myCourseRouter = express.Router()

myCourseRouter.use(jwtAuthMiddleware)

myCourseRouter.post("/", myCourseController.create)
myCourseRouter.get("/", myCourseController.getByUserId)