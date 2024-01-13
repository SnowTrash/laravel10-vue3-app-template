import { defineStore } from "pinia";
import { computed, ref } from "vue";
import authService from "@/services/auth";

export const useAuthStore = defineStore("auth", () => {
    const user = ref(null);

    const login = async (credentials) => {
        try {
            await authService.login(credentials);

            return await getUser();
        } catch (error) {
            console.log(error);

            throw error;
        }
    };

    const logout = async () => {
        try {
            const response = await authService.logout();

            setUser(null);

            return response;
        } catch (error) {
            console.log(error);

            throw error;
        }
    };

    const getUser = async () => {
        try {
            const response = await authService.user();

            setUser(response.data);

            return response;
        } catch (error) {
            console.log(error);

            setUser(null);

            throw error;
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
