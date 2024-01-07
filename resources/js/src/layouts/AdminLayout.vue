<script setup>
import TheAppBar from "@/components/TheAppBar.vue";
import TheNavigationDrawer from "@/components/TheNavigationDrawer.vue";
</script>

<template>
    <v-app>
        <v-layout>
            <TheAppBar />

            <TheNavigationDrawer />

            <v-main>
                <v-container fluid>
                    <slot />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>
