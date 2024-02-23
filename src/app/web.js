import "dotenv/config.js"
import express from "express";
import logger from "morgan";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {mediaRouter} from "../router/media-service/media-router.js";
import {userRouter} from "../router/user-service/user-router.js";
import {jwtAuthMiddleware} from "../middleware/jwt-auth-middleware.js";
import {mentorRouter} from "../router/course-service/mentor-router.js";
import {courseRouter} from "../router/course-service/course-router.js";

export const web = express();

web.use(logger("dev"));
web.use(express.json());

// media-service router
web.use("/media", mediaRouter);

// user-service router
web.use("/users", userRouter);

// course-service
// mentor router
web.use("/api/mentors", mentorRouter)

// course router
web.use("/api/courses", courseRouter)

web.use(errorMiddleware);