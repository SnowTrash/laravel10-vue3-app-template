const navigationRoutes = [
    {
        to: { name: "admin.dashboard" },
        text: "Dashboard",
        icon: "mdi-view-dashboard",
    },
    {
        to: { name: "admin.informacion" },
        text: "Información",
        icon: "mdi-information",
        children: [
            {
                to: { name: "admin.informacion.autor" },
                text: "Autor",
                icon: "mdi-account-tie",
            },
            {
                to: { name: "admin.informacion.tecnologias" },
                text: "Technologías",
                icon: "mdi-file-code",
            },
        ],
    },
];

export default navigationRoutes;
