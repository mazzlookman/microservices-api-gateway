import {newAxios} from "./axios-adapter.js";

const create = async (req, res, next) => {
    try {
        const myCourse = await newAxios.post("/api/my-courses", {
            course_id: req.body.course_id,
            user_id: req.user.data.id
        })
        return res.json(myCourse.data)
    } catch (e) {
        next(e)
    }
}

const getByUserId = async (req, res, next) => {
    try {
        const myCourses = await newAxios.get("/api/my-courses", {
            params: {
                user_id: req.user.data.id
            }
        })
        return res.json(myCourses.data)
    } catch (e) {
        next(e)
    }
}

export default {
    create,
    getByUserId
}