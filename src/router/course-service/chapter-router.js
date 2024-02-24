import express from "express";
import chapterController from "../../controller/course-service/chapter-controller.js";

export const chapterRouter = express.Router()

chapterRouter.post("/", chapterController.create)
chapterRouter.get("/", chapterController.getAll)
chapterRouter.get("/:id", chapterController.getById)
chapterRouter.patch("/:id", chapterController.update)
chapterRouter.delete("/:id", chapterController.remove)
