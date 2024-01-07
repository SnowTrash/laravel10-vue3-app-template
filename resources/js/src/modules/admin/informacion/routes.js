const routes = [
    {
        path: "/admin/informacion/autor",
        name: "admin.informacion.autor",
        component: () => import("./views/AutorVista.vue"),
    },
    {
        path: "/admin/informacion/tecnologias",
        name: "admin.informacion.tecnologias",
        component: () => import("./views/TecnologiasVista.vue"),
    },
];

export default routes;
