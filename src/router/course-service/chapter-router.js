import express from "express";
import chapterController from "../../controller/course-service/chapter-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {permissionMiddleware} from "../../middleware/permission-middleware.js";
import {myCourseRouter} from "./my-course-router.js";

export const chapterRouter = express.Router()

chapterRouter.use(jwtAuthMiddleware, permissionMiddleware("admin"))

chapterRouter.post("/", chapterController.create)
chapterRouter.get("/", chapterController.getAll)
chapterRouter.get("/:id", chapterController.getById)
chapterRouter.patch("/:id", chapterController.update)
chapterRouter.delete("/:id", chapterController.remove)
