const routes = [
    {
        path: "/scenes",
        name: "scenes",
        component: () => import("./views/SceneTest.vue"),
        meta: {
            layout: "page-layout",
        },
    },
];

export default routes;
