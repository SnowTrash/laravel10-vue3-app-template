import axios from "axios";
import {
    accept,
    baseURL,
    contentType,
    timeout,
    xRequestedWith,
    errorNetworkCode,
    pageExpiredCode,
    unauthorizedCode,
} from "@/utils/constants";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";

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
    async (error) => {
        const authStore = useAuthStore();
        const { setUser } = authStore;
        const toast = useToast();

        if (error.code === errorNetworkCode) {
            toast.error(error.message);
        }

        if (
            error.response &&
            [unauthorizedCode, pageExpiredCode].includes(error.response.status)
        ) {
            if (error.config.url !== "/user") {
                toast.error(error.response.data.message);
            }

            setUser(null);
        }

        return Promise.reject(error);
    },
);

export default service;
