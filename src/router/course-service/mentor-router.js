import express from "express";
import mentorController from "../../controller/course-service/mentor-controller.js";

const mentorRouter = express.Router()

mentorRouter.post("/", mentorController.create)
mentorRouter.get("/", mentorController.getAll)
mentorRouter.get("/:id", mentorController.getById)
mentorRouter.patch("/:id", mentorController.update)
mentorRouter.delete("/:id", mentorController.remove)

export {
    mentorRouter
}