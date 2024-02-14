
const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next();

        return;
    }

    if (err.code === "ECONNREFUSED"){
        return res.status(503).json({
            "code": 503,
            "status": "service unavailable",
            "message": "Ups. something is wrong",
        }).end();
    }

    const {status, data} = err.response;
    return res.status(status).json(data).end();
}

export {
    errorMiddleware
}