import express from "express";
import mediaController from "../controller/media-controller.js";

const mediaRouter = new express.Router();

mediaRouter.post("/media", mediaController.create);
mediaRouter.get("/media", mediaController.getAll);
mediaRouter.delete("/media/:id", mediaController.remove);

export {
    mediaRouter,
}