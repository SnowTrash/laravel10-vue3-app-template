const navigationRoutes = [
    {
        to: { name: "inicio" },
        text: "Inicio",
        icon: "mdi-home",
    },
    {
        to: { name: "nosotros" },
        text: "Nosotros",
        icon: "mdi-account-group",
    },
    {
        to: { name: "items" },
        text: "Items",
        icon: "mdi-format-list-bulleted",
        children: [
            {
                to: { name: "item-a" },
                icon: "mdi-alpha-a-circle",
                text: "Item A",
            },
            {
                to: { name: "item-b" },
                icon: "mdi-alpha-b-circle",
                text: "Item B",
            },
        ],
    },
    {
        to: { name: "scenes" },
        text: "Teathre",
        icon: "mdi-alpha-b-circle",
    },
];

export default navigationRoutes;
