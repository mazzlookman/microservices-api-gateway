import express from "express";
import imageCourseController from "../../controller/course-service/image-course-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {mustAdminMiddleware} from "../../middleware/permission-middleware.js";

export const imageCourseRouter = express.Router()

imageCourseRouter.use(jwtAuthMiddleware, mustAdminMiddleware)

imageCourseRouter.post("/", imageCourseController.create)
imageCourseRouter.delete("/:id", imageCourseController.remove)