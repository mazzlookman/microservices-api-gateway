import apiAdapter from "../../service/api-adapter.js";

export const newAxios = apiAdapter(process.env.COURSE_SERVICE_URL)