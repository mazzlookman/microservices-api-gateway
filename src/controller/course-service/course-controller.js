import {newAxios} from "./axios-adapter.js";

const remove = async (req, res, next) => {
    try {
        const remove = await newAxios.delete(`/api/courses/${req.params.id}`)
        return res.json(remove.data)
    } catch (e) {
        next(e)
    }
}

const getAll = async (req, res, next) => {
    try {
        const courses = await newAxios.get(`/api/courses`, {
            params: {
                ...req.query,
                status: "published"
            }
        })

        // change first_page and last_page url
        const coursesData = courses.data
        const firstPage = coursesData.data.first_page_url.split("?").pop()
        const lastPage = coursesData.data.last_page_url.split("?").pop()

        const hostname = `${process.env.HOSTNAME_URL}/api/courses`
        coursesData.data.first_page_url = `${hostname}?${firstPage}`
        coursesData.data.last_page_url = `${hostname}?${lastPage}`

        // change prev_page and next_page url
        if (coursesData.data.prev_page_url) {
            const prevPage = coursesData.data.prev_page_url.split("?").pop()
            coursesData.data.prev_page_url = `${hostname}?${prevPage}`
        }

        if (coursesData.data.next_page_url) {
            const nextPage = coursesData.data.next_page_url.split("?").pop()
            coursesData.data.next_page_url = `${hostname}?${nextPage}`
        }

        //change the path_url
        coursesData.data.path = hostname


        return res.json(coursesData)
    } catch (e) {
        next(e)
    }
}

const getById = async (req, res, next) => {
    try {
        const course = await newAxios.get(`/api/courses/${req.params.id}`)
        return res.json(course.data)
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const course = await newAxios.patch(`/api/courses/${req.params.id}`, req.body)
        return res.json(course.data)
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const course = await newAxios.post("/api/courses", req.body)
        return res.json(course.data)
    } catch (e) {
        next(e)
    }
}

export default {
    create,
    update,
    getById,
    getAll,
    remove
}