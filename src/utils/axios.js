import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://teknasyon.netlify.app/.netlify/functions",
    headers: {
        "Content-Type": "application/json;",
        'X-Access-Token': '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'
    }
});

export { axiosInstance };