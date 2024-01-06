const routes = [
    {
        path: "/",
        name: "Inicio",
        component: () => import("@/views/InicioVista.vue"),
    },
    {
        path: "/nosotros",
        name: "nosotros",
        component: () => import("@/views/NosotrosVista.vue"),
    },
];

export default routes;
