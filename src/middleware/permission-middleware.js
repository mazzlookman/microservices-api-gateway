export const mustAdminMiddleware = (req, res, next) => {
        try {
            const role = req.user.data.role
            if (role !== "admin") {
                return res.json({
                    code: 405,
                    status: "Method Not Allowed",
                    errors: {
                        message: "You're not have permission"
                    }
                })
            }
            return next()

        } catch (e) {
            next(e)
        }
}