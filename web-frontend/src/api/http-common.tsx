import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_BACKEND_API,
    headers: {
        "content-Type": "application/json",
    }
})




