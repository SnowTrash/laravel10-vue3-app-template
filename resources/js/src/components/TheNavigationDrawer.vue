<script setup>
import { useTheNavigationDrawerStore } from "@/stores/the-navigation-drawer";
import { storeToRefs } from "pinia";
import navigationRoutes from "../modules/admin/navigation-routes";
import NavigationDrawerItem from "./NavigationDrawerItem.vue";

const theNavigationDrawer = useTheNavigationDrawerStore();
const { drawer } = storeToRefs(theNavigationDrawer);
</script>

<template>
    <v-navigation-drawer v-model="drawer" location="left">
        <v-list open-strategy="multiple">
            <v-list-subheader>Menú Principal</v-list-subheader>

            <v-divider />

            <NavigationDrawerItem
                v-for="navRoute in navigationRoutes"
                :key="navRoute.to.name"
                :nav-route="navRoute"
            />
        </v-list>
    </v-navigation-drawer>
</template>
