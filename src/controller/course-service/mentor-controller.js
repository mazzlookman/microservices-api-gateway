import apiAdapter from "../../service/api-adapter.js";

const axios = apiAdapter(process.env.COURSE_SERVICE_URL)

const getAll = async (req, res, next) => {
    try {
        const mentors = await axios.get("/api/mentors")
        return res.json(mentors.data)
    } catch (e) {
        next(e)
    }
}

const getById = async (req, res, next) => {
    try{
        const mentor = await axios.get(`/api/mentors/${req.params.id}`)
        return res.json(mentor.data)
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try{
        const remove = await axios.delete(`/api/mentors/${req.params.id}`)
        return res.json(remove.data)
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const update = await axios.patch(`/api/mentors/${req.params.id}`, req.body)
        return res.json(update.data)
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const create = await axios.post("/api/mentors", req.body)
        return res.json(create.data)
    } catch (e) {
        next(e)
    }
}

export default {
    create,
    update,
    remove,
    getById,
    getAll
}