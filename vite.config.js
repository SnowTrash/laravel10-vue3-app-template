import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/src/main.js"],
            refresh: true,
        }),
        vue({
            template: {
                base: null,
                includeAbsolute: false,
                transformAssetUrls,
            },
        }),
        Vuetify(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js/src",
        },
    },
});
