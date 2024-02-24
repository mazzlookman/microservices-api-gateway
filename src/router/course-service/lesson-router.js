import express from "express";
import lessonController from "../../controller/course-service/lesson-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {permissionMiddleware} from "../../middleware/permission-middleware.js";

export const lessonRouter = express.Router()

lessonRouter.use(jwtAuthMiddleware, permissionMiddleware("admin"))

lessonRouter.post("/", lessonController.create)
lessonRouter.get("/", lessonController.getAll)
lessonRouter.get("/:id", lessonController.getById)
lessonRouter.patch("/:id", lessonController.update)
lessonRouter.delete("/:id", lessonController.remove)