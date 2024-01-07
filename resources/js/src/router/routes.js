import rutasDashboard from "@/modules/admin/dashboard/routes.js";
import rutasInformacion from "@/modules/admin/informacion/routes.js";

const routes = [
    {
        path: "/",
        name: "inicio",
        component: () => import("@/views/InicioVista.vue"),
        meta: {
            layout: "page-layout",
        },
    },
    {
        path: "/nosotros",
        name: "nosotros",
        component: () => import("@/views/NosotrosVista.vue"),
        meta: {
            layout: "page-layout",
        },
    },
    ...rutasDashboard,
    ...rutasInformacion,
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/NoEncontradoVista.vue"),
        meta: {
            layout: "blank-layout",
        },
    },
];

export default routes;
