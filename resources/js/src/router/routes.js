import rutasInicio from "@/modules/pages/inicio/routes.js";
import rutasNosotros from "@/modules/pages/nosotros/routes.js";
import rutasDashboard from "@/modules/admin/dashboard/routes.js";
import rutasInformacion from "@/modules/admin/informacion/routes.js";

const routes = [
    ...rutasInicio,
    ...rutasNosotros,
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
