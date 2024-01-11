<script setup>
import { useTheNavigationDrawerStore } from "@/stores/the-navigation-drawer";
import { useLogoutStore } from "@/stores/logout";
import { storeToRefs } from "pinia";

const theNavigationDrawer = useTheNavigationDrawerStore();
const logoutStore = useLogoutStore();

const { toggle } = theNavigationDrawer;
const { authLogout } = logoutStore;
const { userGetter } = storeToRefs(logoutStore);
</script>

<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon @click="toggle" />

        <v-app-bar-title>Laravel 10 Vue 3 App</v-app-bar-title>

        <v-spacer />

        <v-menu location="bottom">
            <template #activator="{ props }">
                <v-btn v-bind="props" icon>
                    <v-avatar size="45" color="primary">
                        <v-icon icon="mdi-account-circle" />
                    </v-avatar>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-list-item-title>
                        luisfernandosalgadomiguez@gmail
                    </v-list-item-title>
                </v-list-item>

                <v-divider />

                <v-list-item link>
                    <v-list-item-title> Perfil de usuario </v-list-item-title>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-title>Cambiar tema</v-list-item-title>
                </v-list-item>

                <v-list-item v-if="userGetter" link @click="authLogout">
                    <v-list-item-title>Cerrar sesión</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
