import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

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

export default router;
