import apiAdapter from "../../service/api-adapter.js"
const axios = apiAdapter(process.env.USER_SERVICE_URL)
import jwt from 'jsonwebtoken';
const {JsonWebTokenError} = jwt;

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
        const user = login.data.data

        const token = jwt.sign(
            {data: user},
            process.env.JWT_SECRET_KEY,
            {expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRED}
        )

        const refreshToken = jwt.sign(
            {data: user},
            process.env.JWT_SECRET_KEY_REFRESH
        )

        await axios.post("/refresh-token", {
            token: refreshToken,
            user_id: user.id
        })

        return res.json({
            code: 200,
            status: "OK",
            data: {
                access_token: token,
                refresh_token: refreshToken
            }
        })

    } catch (e) {
        next(e)
    }
}

function ErrorUserService(err, message) {
    throw new err(message)
}

const refreshToken = async (req, res, next) => {
    try {
        const r_token = req.body.refresh_token
        const email = req.body.email

        if (!r_token || !email) {
            ErrorUserService(JsonWebTokenError, "Ups! Invalid token")
        }
            // throw new JsonWebTokenError("")

        await axios.get("/refresh-token",{params: {token: r_token}})

        jwt.verify(r_token, process.env.JWT_SECRET_KEY_REFRESH, (err, decoded) => {
            if (email !== decoded.data.email) {
                ErrorUserService(JsonWebTokenError, "Email is not valid")
            }

            const newToken = jwt.sign(
                {data: decoded.data},
                process.env.JWT_SECRET_KEY,
                {expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRED}
            )

            return res.json({
                code: 200,
                status: "OK",
                data: {
                    access_token: newToken,
                }
            })
        })

    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.user.data.id
        const update = await axios.patch(`/users/${id}`, req.body)

        return res.json(update.data)

    } catch (e) {
        next(e)
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.user.data.id
        const user = await axios.get(`/users/${id}`)

        return res.json(user.data)

    } catch (e) {
        next(e)
    }
}

export default {
    register,
    login,
    refreshToken,
    update,
    getUser
}