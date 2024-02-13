import apiAdapter from "../service/api-adapter.js";

const env = process.env;
const api = apiAdapter(env.URL_MEDIA_SERVICE);

const create = async (req, res, next) => {
    try {
        const media = await api.post("/media", req.body);
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

const getAll = async (req, res, next) => {
    try {
        const media = await api.get("/media");
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const media = await api.delete(`/media/${req.params.id}`);
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

export default {
    create,
    getAll,
    remove
}