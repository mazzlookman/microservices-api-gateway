import express from "express";
import lessonController from "../../controller/course-service/lesson-controller.js";

export const lessonRouter = express.Router()

lessonRouter.post("/", lessonController.create)
lessonRouter.get("/", lessonController.getAll)
lessonRouter.get("/:id", lessonController.getById)
lessonRouter.patch("/:id", lessonController.update)
lessonRouter.delete("/:id", lessonController.remove)