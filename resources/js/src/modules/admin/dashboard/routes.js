const routes = [
    {
        path: "/admin/dashboard",
        name: "admin.dashboard",
        component: () => import("./views/DashboardVista.vue"),
    },
];

export default routes;
