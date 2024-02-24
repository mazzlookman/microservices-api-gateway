import {newAxios} from "./axios-adapter.js";

const create = async (req, res, next) => {
    try {
        const imgCourse = await newAxios.post("/api/image-courses", req.body)
        return res.json(imgCourse.data)
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const imgCourse = await newAxios.delete(`/api/image-courses/${req.params.id}`)
        return res.json(imgCourse.data)
    } catch (e) {
        next(e)
    }
}

export default {
    create,
    remove
}