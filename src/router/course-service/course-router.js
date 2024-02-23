import express from "express";
import courseController from "../../controller/course-service/course-controller.js";

export const courseRouter = express.Router()

courseRouter.post("/", courseController.create)
courseRouter.get("/", courseController.getAll)
courseRouter.get("/:id", courseController.getById)
courseRouter.patch("/:id", courseController.update)
courseRouter.delete("/:id", courseController.remove)
