<script setup>
import { useSaludoStore } from "@/stores/saludo";
import { useContadorStore } from "@/stores/contador";
import { storeToRefs } from "pinia";

const saludoStore = useSaludoStore();
const contadorStore = useContadorStore();

const { saludo } = storeToRefs(saludoStore);
const { contadorGetter } = storeToRefs(contadorStore);
</script>

<template>
    <v-app>
        <v-main>
            <v-container>
                <v-responsive class="align-center text-center fill-height">
                    <h1>
                        Laravel 10 + Vue 3 + Vue Router 4 + Pinia 2 + Vuetify 3
                    </h1>

                    <p>{{ saludo }}</p>

                    <p>Contador: {{ contadorGetter }}</p>

                    <p>
                        <router-link to="/">Inicio </router-link> |
                        <router-link to="/nosotros">Nosotros</router-link>
                    </p>

                    <router-view />
                </v-responsive>
            </v-container>
        </v-main>
    </v-app>
</template>
