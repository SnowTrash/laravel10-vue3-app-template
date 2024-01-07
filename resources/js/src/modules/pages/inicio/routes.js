const routes = [
    {
        path: "/",
        name: "inicio",
        component: () => import("./views/InicioVista.vue"),
        meta: {
            layout: "page-layout",
        },
    },
];

export default routes;
