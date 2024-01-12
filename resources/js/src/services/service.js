import axios from "axios";
import {
    accept,
    baseURL,
    contentType,
    timeout,
    xRequestedWith,
} from "@/utils/constants";

const service = axios.create({
    baseURL,
    timeout,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "X-Requested-With": xRequestedWith,
        Accept: accept,
        "Content-Type": contentType,
    },
});

export default service;
