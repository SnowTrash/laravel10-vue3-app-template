<script setup>
import TheNavBar from "../components/TheNavBar.vue";
</script>

<template>
    <v-app>
        <TheNavBar />

        <v-layout>
            <v-main>
                <v-container fluid>
                    <slot />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>
