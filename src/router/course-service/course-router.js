import express from "express";
import courseController from "../../controller/course-service/course-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {mustAdminMiddleware} from "../../middleware/permission-middleware.js";

export const courseRouter = express.Router()

courseRouter.get("/", courseController.getAll)

courseRouter.use(jwtAuthMiddleware)
courseRouter.get("/:id", courseController.getById)

courseRouter.use(mustAdminMiddleware)
courseRouter.post("/", courseController.create)
courseRouter.patch("/:id", courseController.update)
courseRouter.delete("/:id", courseController.remove)
