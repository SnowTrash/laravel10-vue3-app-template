const routes = [
    {
        path: "/admin/informacion/autor",
        name: "admin.informacion.autor",
        component: () => import("./views/AutorVista.vue"),
        meta: {
            layout: "admin-layout",
            requiresAuth: true,
        },
    },
    {
        path: "/admin/informacion/tecnologias",
        name: "admin.informacion.tecnologias",
        component: () => import("./views/TecnologiasVista.vue"),
        meta: {
            layout: "admin-layout",
            requiresAuth: true,
        },
    },
];

export default routes;
