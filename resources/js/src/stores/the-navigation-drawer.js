import { defineStore } from "pinia";
import { ref } from "vue";

export const useTheNavigationDrawerStore = defineStore(
    "the-navigation-drawer",
    () => {
        const drawer = ref(false);

        const toggle = () => {
            drawer.value = !drawer.value;
        };

        return {
            drawer,
            toggle,
        };
    },
);
