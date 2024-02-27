import apiAdapter from "../../service/api-adapter.js";

const newAxios = apiAdapter(process.env.ORDER_PAYMENT_SERVICE_URL)

const getByUserId = async (req, res, next) => {
    try {
        const orders = await newAxios.get("/api/orders", {
            data: {
                user_id: req.user.data.id
            }
        })

        return res.json(orders.data);

    } catch (e) {
        next(e)
    }
}

const midtransWebhook = async (req, res, next) => {
    try {
        const webhook = await newAxios.post("/api/midtrans-webhook", req.body)
        return res.json(webhook.data);

    } catch (e) {
        next(e)
    }
}

export default {
    midtransWebhook,
    getByUserId
}