import { defineStore } from "pinia";
import { computed, ref } from "vue";
import authService from "@/services/auth";

export const useAuthStore = defineStore("auth", () => {
    const user = ref(null);

    const login = async (credentials) => {
        return await authService.login(credentials).then(async () => {
            return await getUser();
        });
    };

    const logout = async () => {
        return await authService.logout().then(() => {
            setUser(null);
        });
    };

    const getUser = async () => {
        try {
            const response = await authService.user();

            setUser(response.data);

            return response;
        } catch (error) {
            console.log(error);

            return error;
        }
    };

    const setUser = (newUser) => {
        if (newUser) {
            localStorage.setItem("user", JSON.stringify(newUser));
        } else {
            localStorage.removeItem("user");
        }

        user.value = newUser;
    };

    const userGetter = computed(() => user.value);

    return {
        login,
        logout,
        getUser,
        setUser,
        userGetter,
    };
});
