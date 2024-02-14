import apiAdapter from "../../service/api-adapter.js";

const env = process.env;
const axios = apiAdapter(env.MEDIA_SERVICE_URL);

const create = async (req, res, next) => {
    try {
        const media = await axios.post("/media", req.body);
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

const getAll = async (req, res, next) => {
    try {
        const media = await axios.get("/media");
        return res.json(media.data);
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const media = await axios.delete(`/media/${req.params.id}`);
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