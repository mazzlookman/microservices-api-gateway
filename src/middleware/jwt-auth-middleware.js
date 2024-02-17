import jwt from "jsonwebtoken";

export const jwtAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        req.user = jwt.verify(token, process.env.JWT_SECRET_KEY)

        next()

    } catch (e) {
        next(e)
    }
}