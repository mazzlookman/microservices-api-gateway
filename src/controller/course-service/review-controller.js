import {newAxios} from "./axios-adapter.js";

const create = async (req, res, next) => {
    try {
        const review = await newAxios.post("/api/reviews",{
            user_id: req.user.data.id,
            ...req.body
        })
        return res.json(review.data)
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const review = await newAxios.patch(`/api/reviews/${req.params.id}`,{
            user_id: req.user.data.id,
            ...req.body
        })
        return res.json(review.data)
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const review = await newAxios.delete(`/api/reviews/${req.params.id}`,{
            data: {
                user_id: req.user.data.id,
            }
        })

        return res.json(review.data)
    } catch (e) {
        next(e)
    }
}

export default {
    create,
    update,
    remove
}