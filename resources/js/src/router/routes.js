import rutasInicio from "@/modules/pages/inicio/routes.js";
import rutasNosotros from "@/modules/pages/nosotros/routes.js";
import rutasItems from "@/modules/pages/items/routes.js";
import rutasDashboard from "@/modules/admin/dashboard/routes.js";
import rutasInformacion from "@/modules/admin/informacion/routes.js";
import rutasAuth from "@/modules/pages/auth/routes.js";
import rutasScenes from "@/modules/pages/scenes/routes.js";

const routes = [
    ...rutasInicio,
    ...rutasNosotros,
    ...rutasItems,
    ...rutasDashboard,
    ...rutasInformacion,
    ...rutasAuth,
    ...rutasScenes,
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
