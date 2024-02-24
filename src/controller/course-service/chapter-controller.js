import {newAxios} from "./axios-adapter.js";

const create = async (req, res, next) => {
    try {
        const chapter = await newAxios.post("/chapters", req.body)
        return res.json(chapter.data)
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const chapter = await newAxios.patch(`/chapters/${req.params.id}`, req.body)
        return res.json(chapter.data)
    } catch (e) {
        next(e)
    }
}

const getById = async (req, res, next) => {
    try {
        const chapter = await newAxios.get(`/chapters/${req.params.id}`)
        return res.json(chapter.data)
    } catch (e) {
        next(e)
    }
}

const getAll = async (req, res, next) => {
    try {
        const chapters = await newAxios.get("/chapters", {
            params: {
                ...req.query
            }
        })

        return res.json(chapters.data)
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const chapter = await newAxios.delete(`/chapters/${req.params.id}`)
        return res.json(chapter.data)
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