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

import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import {
    errorNetworkCode,
    pageExpiredCode,
    unauthorizedCode,
} from "@/utils/constants";
import { useToast } from "vue-toastification";

service.interceptors.response.use(
    (response) => response,
    async (error) => {
        const authStore = useAuthStore();
        const { setUser } = authStore;
        const { userGetter } = storeToRefs(authStore);
        const toast = useToast();

        if (error.code === errorNetworkCode) {
            toast.error(error.message);
        }

        if (
            error.response &&
            [unauthorizedCode, pageExpiredCode].includes(error.response.status)
        ) {
            toast.error(error.response.data.message);

            if (userGetter.value) {
                setUser(null);
            }
        }

        return Promise.reject(error);
    },
);

export default service;
