<script setup>
import { useContadorStore } from "@/stores/contador";
import { storeToRefs } from "pinia";

const contadorStore = useContadorStore();

const { incrementar } = contadorStore;
const { contadorGetter } = storeToRefs(contadorStore);
</script>

<template>
    <v-row>
        <v-col cols="12">
            <h2>Inicio</h2>

            <v-btn color="green" @click="incrementar">
                Incrementar ({{ contadorGetter }})
            </v-btn>

            <p>
                <router-link :to="{ name: 'admin.dashboard' }">
                    Ir al dashboard
                </router-link>
            </p>
        </v-col>
    </v-row>
</template>
