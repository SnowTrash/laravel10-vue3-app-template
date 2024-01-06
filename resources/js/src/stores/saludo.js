import { defineStore } from "pinia";
import { ref } from "vue";

export const useSaludoStore = defineStore("saludo", () => {
    const saludo = ref("Hola Mundo desde Pinia!");

    return {
        saludo,
    };
});
