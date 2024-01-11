import { defineStore, storeToRefs } from "pinia";
import { useAuthStore } from "./auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

export const useLogoutStore = defineStore("logout", () => {
    const authStore = useAuthStore();
    const router = useRouter();
    const { logout } = authStore;
    const { userGetter } = storeToRefs(authStore);
    const loading = ref(false);

    const authLogout = async () => {
        loading.value = true;

        try {
            await logout();

            router.push({ name: "inicio" });
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };

    return {
        authLogout,
        userGetter,
        loading,
    };
});
