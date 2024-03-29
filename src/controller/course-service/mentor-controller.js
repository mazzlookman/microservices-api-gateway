import {newAxios} from "./axios-adapter.js";

const getAll = async (req, res, next) => {
    try {
        const mentors = await newAxios.get("/api/mentors")
        return res.json(mentors.data)
    } catch (e) {
        next(e)
    }
}

const getById = async (req, res, next) => {
    try{
        const mentor = await newAxios.get(`/api/mentors/${req.params.id}`)
        return res.json(mentor.data)
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try{
        const remove = await newAxios.delete(`/api/mentors/${req.params.id}`)
        return res.json(remove.data)
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const mentor = await newAxios.patch(`/api/mentors/${req.params.id}`, req.body)
        return res.json(mentor.data)
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const mentor = await newAxios.post("/api/mentors", req.body)
        return res.json(mentor.data)
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