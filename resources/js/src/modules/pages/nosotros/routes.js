const routes = [
    {
        path: "/nosotros",
        name: "nosotros",
        component: () => import("./views/NosotrosVista.vue"),
        meta: {
            layout: "page-layout",
        },
    },
];

export default routes;
