import apiAdapter from "../../service/api-adapter.js"
import {response} from "express";

const axios = apiAdapter(process.env.USER_SERVICE_URL)

const register = async (req, res, next) => {
    try {
        const register = await axios.post("/users", req.body);
        return res.json(register.data)
    } catch (e) {
        next(e)
    }
}

const login = async (req, res, next) => {
    try {
        const login = await axios.post("/users/login", req.body)
        return res.json(login.data)
    } catch (e) {
        next(e)
    }
}

export default {
    register,
    login
}