import axios from "axios";

const env = process.env;

export default (baseURL) => {
    return axios.create({
        baseURL: baseURL,
        timeout: env.AXIOS_TIMEOUT
    });
}