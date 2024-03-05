import jwt from 'jsonwebtoken'
import axios from "axios"
const {JsonWebTokenError} = jwt
const {AxiosError} = axios

const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next()

        return
    }

    if (err.code === "ECONNREFUSED"){
        return res.status(503).json({
            code: 503,
            status: "Service Unavailable",
            errors: {
                message: "Ups. something is wrong",
            }
        }).end()
    }

    if (err instanceof JsonWebTokenError) {
        return res.status(401).json({
            code: 401,
            status: "Unauthorized",
            errors: {
                message: err.message,
            }
        }).end()
    }

    else if (err instanceof AxiosError) {
        const {status, data} = err.response;
        return res.status(status)
            .json(data)
            .end()
    }

    else {
        return res.status(500).json({
            code: 500,
            status: "Internal Server Error",
            errors: {
                message: err.message,
            }
        }).end()
    }

}

export {
    errorMiddleware
}