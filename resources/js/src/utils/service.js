import {
    errorNetworkCode,
    pageExpiredCode,
    unauthorizedCode,
    unprocessableEntityCode,
} from "@/utils/constants";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";
import ErrorsList from "@/components/ErrorsList.vue";

export const interceptorsResponseErrorHandler = async (error) => {
    const authStore = useAuthStore();
    const { setUser } = authStore;
    const toast = useToast();

    if (error.code === errorNetworkCode) {
        toast.error(error.message);
    } else if (
        error.response &&
        [unauthorizedCode, pageExpiredCode].includes(error.response.status)
    ) {
        if (error.config.url !== "/user") {
            console.log(error.response.data.message);

            toast.error(error.response.data.message);
        }

        setUser(null);
    } else if (
        error.response &&
        error.response.status === unprocessableEntityCode
    ) {
        const { data } = error.response;

        if (data.errors && Object.keys(data.errors).length > 0) {
            const errors = Object.values(data.errors).flat();

            toast.error({
                component: ErrorsList,
                props: {
                    errors,
                },
            });
        } else {
            toast.error(data.message);
        }
    } else {
        console.log(error);

        toast.error("Ocurrió un error inesperado.");
    }

    return Promise.reject(error);
};
