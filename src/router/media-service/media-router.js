import express from "express";
import mediaController from "../../controller/media-service/media-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";

const mediaRouter = express.Router();

mediaRouter.use(jwtAuthMiddleware)
mediaRouter.post("/", mediaController.create);
mediaRouter.get("/", mediaController.getAll);
mediaRouter.delete("/:id", mediaController.remove);

export {
    mediaRouter,
}