import express from "express";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {permissionMiddleware} from "../../middleware/permission-middleware.js";
import reviewController from "../../controller/course-service/review-controller.js";

export const reviewRouter = express.Router()

reviewRouter.use(jwtAuthMiddleware, permissionMiddleware("admin","student"))

reviewRouter.post("/", reviewController.create)
reviewRouter.patch("/:id", reviewController.update)
reviewRouter.delete("/:id", reviewController.remove)