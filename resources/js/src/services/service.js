import axios from "axios";
import {
    accept,
    baseURL,
    contentType,
    timeout,
    xRequestedWith,
} from "@/utils/constants";

import { interceptorsResponseErrorHandler } from "../utils/service";

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

service.interceptors.response.use(
    (response) => response,
    interceptorsResponseErrorHandler,
);

export default service;
