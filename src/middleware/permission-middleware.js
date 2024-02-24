export const permissionMiddleware = (...roles) => {
    return (req, res, next) => {
        const role = req.user.data.role
        if (!roles.includes(role)) {
            return res.json({
                code: 403,
                status: "Forbidden",
                errors: {
                    message: "You're not have permission"
                }
            })
        }

        return next()
    }
}