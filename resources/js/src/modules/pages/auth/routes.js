const routes = [
    {
        path: "/auth/login",
        name: "auth.login",
        component: () => import("./views/LoginView.vue"),
        meta: {
            layout: "blank-layout",
        },
    },
];

export default routes;
