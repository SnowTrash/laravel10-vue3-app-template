import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    const $appSpinner = document.getElementById("app-loading");

    if ($appSpinner) {
        $appSpinner.style.display = "none";
    }
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    const { getUser } = authStore;
    const { userGetter } = storeToRefs(authStore);
    const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
    const redirectTo =
        to.name === "auth.login" ? { name: "inicio" } : undefined;

    if (!userGetter.value) {
        try {
            await getUser();

            if (!userGetter.value) {
                next(reqAuth ? { name: "auth.login" } : undefined);
            } else {
                next(redirectTo);
            }
        } catch (error) {
            next(reqAuth ? { name: "auth.login" } : undefined);
        }
    } else {
        next(redirectTo);
    }
});

export default router;
