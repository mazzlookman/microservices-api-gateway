import express from "express";
import lessonController from "../../controller/course-service/lesson-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {mustAdminMiddleware} from "../../middleware/permission-middleware.js";

export const lessonRouter = express.Router()

lessonRouter.use(jwtAuthMiddleware)

lessonRouter.get("/", lessonController.getAll)
lessonRouter.get("/:id", lessonController.getById)

lessonRouter.use(mustAdminMiddleware)
lessonRouter.post("/", lessonController.create)
lessonRouter.patch("/:id", lessonController.update)
lessonRouter.delete("/:id", lessonController.remove)