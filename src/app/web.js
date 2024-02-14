import "dotenv/config.js"
import express from "express";
import logger from "morgan";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {mediaRouter} from "../router/media-service/media-router.js";
import {userRouter} from "../router/user-service/user-router.js";

export const web = express();

web.use(logger("combined"));
web.use(express.json());

// media-service router
web.use(mediaRouter);

// user-service router
web.use(userRouter);

web.use(errorMiddleware);