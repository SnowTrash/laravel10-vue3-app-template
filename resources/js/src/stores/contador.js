import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useContadorStore = defineStore("contador", () => {
    const contador = ref(0);

    const incrementar = () => {
        contador.value++;
    };

    const decrementar = () => {
        contador.value--;
    };

    const contadorGetter = computed(() => contador.value);

    return {
        contador,
        incrementar,
        decrementar,
        contadorGetter,
    };
});
