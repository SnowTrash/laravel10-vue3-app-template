import rutasDashboard from "@/modules/admin/dashboard/routes.js";
import rutasInformacion from "@/modules/admin/informacion/routes.js";

const routes = [
    {
        path: "/",
        name: "inicio",
        component: () => import("@/views/InicioVista.vue"),
    },
    {
        path: "/nosotros",
        name: "nosotros",
        component: () => import("@/views/NosotrosVista.vue"),
    },
    ...rutasDashboard,
    ...rutasInformacion,
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/NoEncontradoVista.vue"),
    },
];

export default routes;
