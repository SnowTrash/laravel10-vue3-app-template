const routes = [
    {
        path: "/admin/dashboard",
        name: "admin.dashboard",
        component: () => import("./views/DashboardVista.vue"),
        meta: {
            layout: "admin-layout",
        },
    },
];

export default routes;
