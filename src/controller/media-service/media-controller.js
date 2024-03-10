import apiAdapter from "../../service/api-adapter.js";

const env = process.env;
const axios = apiAdapter(env.MEDIA_SERVICE_URL);

const create = async (req, res, next) => {
    try {
        const media = await axios.post("/api/media", req.body);
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

const getAll = async (req, res, next) => {
    try {
        const media = await axios.get("/api/media");
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const media = await axios.delete(`/api/media/${req.params.id}`);
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