import {newAxios} from "./axios-adapter.js";

const create = async (req, res, next) => {
    try {
        const lesson = await newAxios.post("/api/lessons", req.body)
        return res.json(lesson.data)
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const lesson = await newAxios.patch(`/api/lessons/${req.params.id}`, req.body)
        return res.json(lesson.data)
    } catch (e) {
        next(e)
    }
}

const getById = async (req, res, next) => {
    try {
        const lesson = await newAxios.get(`/api/lessons/${req.params.id}`)
        return res.json(lesson.data)
    } catch (e) {
        next(e)
    }
}

const getAll = async (req, res, next) => {
    try {
        const lessons = await newAxios.get(`/api/lessons`, {
            params: {
                ...req.query
            }
        })
        return res.json(lessons.data)
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const lesson = await newAxios.delete(`/api/lessons/${req.params.id}`)
        return res.json(lesson.data)
    } catch (e) {
        next(e)
    }
}

export default {
    create,
    update,
    getById,
    getAll,
    remove
}