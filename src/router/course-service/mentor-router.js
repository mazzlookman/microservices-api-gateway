import express from "express";
import mentorController from "../../controller/course-service/mentor-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";
import {mustAdminMiddleware} from "../../middleware/permission-middleware.js";

const mentorRouter = express.Router()

mentorRouter.use(jwtAuthMiddleware, mustAdminMiddleware)

mentorRouter.post("/", mentorController.create)
mentorRouter.get("/", mentorController.getAll)
mentorRouter.get("/:id", mentorController.getById)
mentorRouter.patch("/:id", mentorController.update)
mentorRouter.delete("/:id", mentorController.remove)

export {
    mentorRouter
}