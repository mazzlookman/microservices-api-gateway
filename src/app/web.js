import "dotenv/config.js"
import express from "express";
import logger from "morgan";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {mediaRouter} from "../router/media-service/media-router.js";
import {userRouter} from "../router/user-service/user-router.js";
import {mentorRouter} from "../router/course-service/mentor-router.js";
import {courseRouter} from "../router/course-service/course-router.js";
import {chapterRouter} from "../router/course-service/chapter-router.js";
import {lessonRouter} from "../router/course-service/lesson-router.js";
import {imageCourseRouter} from "../router/course-service/image-course-router.js";
import {myCourseRouter} from "../router/course-service/my-course-router.js";
import {reviewRouter} from "../router/course-service/review-router.js";
import {orderPaymentRouter} from "../router/order-payment-service/order-payment-router.js";

export const web = express();

web.use(logger(process.env.LOG_FORMAT));
web.use(express.json());

// media-service router
web.use("/api/media", mediaRouter);

// user-service router
web.use("/api/users", userRouter);

// course-service
// mentor router
web.use("/api/mentors", mentorRouter)

// course router
web.use("/api/courses", courseRouter)

// chapter router
web.use("/api/chapters", chapterRouter)

// lesson router
web.use("/api/lessons", lessonRouter)

// image-course router
web.use("/api/image-courses", imageCourseRouter)

// my-course router
web.use("/api/my-courses", myCourseRouter)

// review router
web.use("/api/reviews", reviewRouter)

// order-payment router
// webhook for midtrans
web.use("/api", orderPaymentRouter)

web.use(errorMiddleware);