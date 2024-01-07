<script setup>
import { useContadorStore } from "@/stores/contador";
import { storeToRefs } from "pinia";

const contadorStore = useContadorStore();

const { decrementar } = contadorStore;
const { contadorGetter } = storeToRefs(contadorStore);
</script>

<template>
    <v-row>
        <v-col cols="12">
            <h2>Nosotros</h2>

            <v-btn color="red" @click="decrementar">
                Decrementar ({{ contadorGetter }})
            </v-btn>
        </v-col>
    </v-row>
</template>
