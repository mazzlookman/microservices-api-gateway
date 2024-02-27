import express from "express";
import chapterController from "../../controller/course-service/chapter-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {mustAdminMiddleware} from "../../middleware/permission-middleware.js";

export const chapterRouter = express.Router()

chapterRouter.get("/", chapterController.getAll)

chapterRouter.use(jwtAuthMiddleware)
chapterRouter.get("/:id", chapterController.getById)

chapterRouter.use(mustAdminMiddleware)
chapterRouter.post("/", chapterController.create)
chapterRouter.patch("/:id", chapterController.update)
chapterRouter.delete("/:id", chapterController.remove)
