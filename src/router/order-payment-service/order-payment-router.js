import express from "express";
import orderPaymentController from "../../controller/order-payment-service/order-payment-controller.js";
import {jwtAuthMiddleware} from "../../middleware/jwt-auth-middleware.js";

export const orderPaymentRouter = express.Router();

orderPaymentRouter.post("/midtrans-webhook", orderPaymentController.midtransWebhook)

orderPaymentRouter.use(jwtAuthMiddleware)
orderPaymentRouter.get("/orders", orderPaymentController.getByUserId)