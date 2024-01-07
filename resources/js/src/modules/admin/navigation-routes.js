const navigationRoutes = [
    {
        name: "admin.dashboard",
        text: "Dashboard",
        icon: "mdi-view-dashboard",
    },
    {
        name: "admin.informacion",
        text: "Información",
        icon: "mdi-information",
        children: [
            {
                name: "admin.informacion.autor",
                text: "Autor",
                icon: "mdi-account-tie",
            },
            {
                name: "admin.informacion.tecnologias",
                text: "Technologías",
                icon: "mdi-file-code",
            },
        ],
    },
];

export default navigationRoutes;
