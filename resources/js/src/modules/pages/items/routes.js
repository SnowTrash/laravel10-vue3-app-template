const routes = [
    {
        path: "/item-a",
        name: "item-a",
        component: () => import("./views/ItemAVista.vue"),
        meta: {
            layout: "page-layout",
        },
    },
    {
        path: "/item-b",
        name: "item-b",
        component: () => import("./views/ItemBVista.vue"),
        meta: {
            layout: "page-layout",
        },
    },
];

export default routes;
