<script setup>
import { useDisplay } from "vuetify";
import navigationRoutes from "../modules/pages/navigation-routes";
import NavBarItem from "./NavBarItem.vue";
import { useLogoutStore } from "@/stores/logout";
import { storeToRefs } from "pinia";

const { width } = useDisplay();
const logoutStore = useLogoutStore();

const { authLogout } = logoutStore;
const { userGetter, loading } = storeToRefs(logoutStore);
</script>

<template>
    <v-toolbar flat color="secondary">
        <template #prepend>
            <router-link
                class="d-flex align-center text-decoration-none text-grey-darken-4"
                :to="{ name: 'inicio' }"
            >
                <v-img
                    class="mr-4"
                    src="@/assets/laravel.png"
                    alt="Vuetify Logo"
                    width="40"
                    height="40"
                />
            </router-link>

            <v-toolbar-title>Laravel 10 Vue 3 App</v-toolbar-title>
        </template>

        <v-spacer />

        <template v-if="width > 960">
            <NavBarItem
                v-for="navRoute in navigationRoutes"
                :key="navRoute.to.name"
                :nav-route="navRoute"
            />

            <v-divider class="mx-2" vertical />

            <v-btn
                v-if="userGetter"
                class="text-none ml-4"
                :to="{ name: 'admin.dashboard' }"
            >
                <template #append>
                    <v-icon icon="mdi-view-dashboard" />
                </template>

                Dashboard
            </v-btn>

            <v-btn
                v-if="!userGetter"
                class="text-none ml-4"
                :to="{ name: 'auth.login' }"
            >
                <template #append>
                    <v-icon icon="mdi-login" />
                </template>

                Iniciar Sesión
            </v-btn>

            <v-btn
                v-else
                class="text-none ml-4"
                :loading="loading"
                @click="authLogout"
            >
                <template #append>
                    <v-icon icon="mdi-logout" />
                </template>

                Cerrar Sesión
            </v-btn>
        </template>

        <v-btn v-else icon="mdi-menu" />
    </v-toolbar>
</template>

<style scoped>
.menu-icon {
    transition: transform 0.3s;
}
.menu-icon--rotate {
    transform: rotate(180deg);
}
</style>
