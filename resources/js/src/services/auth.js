import service from "./service";
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

async function login(credentials) {
    await service.get("/sanctum/csrf-cookie");

    return await service.post("/login", credentials);
}

const user = async () => {
    return await service.get("/user");
};

const logout = async () => {
    return await service.post("/logout");
};

export default { login, user, logout };
