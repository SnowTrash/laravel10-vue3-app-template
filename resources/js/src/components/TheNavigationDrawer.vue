<script setup>
import { useTheNavigationDrawerStore } from "@/stores/the-navigation-drawer";
import { storeToRefs } from "pinia";

const theNavigationDrawer = useTheNavigationDrawerStore();
const { drawer } = storeToRefs(theNavigationDrawer);
</script>

<template>
    <v-navigation-drawer v-model="drawer" temporary location="left">
        <v-list open-strategy="multiple">
            <v-list-subheader>Menú Principal</v-list-subheader>

            <v-divider />

            <v-list-item link :to="{ name: 'inicio' }">
                <template #prepend>
                    <v-icon icon="mdi-home" />
                </template>

                <v-list-item-title> Inicio </v-list-item-title>
            </v-list-item>

            <v-list-item link :to="{ name: 'nosotros' }">
                <template #prepend>
                    <v-icon icon="mdi-account-group" />
                </template>

                <v-list-item-title> Nosotros </v-list-item-title>
            </v-list-item>

            <v-list-item link :to="{ name: 'admin.dashboard' }">
                <template #prepend>
                    <v-icon icon="mdi-view-dashboard" />
                </template>

                <v-list-item-title> Dashboard </v-list-item-title>
            </v-list-item>

            <v-list-group
                value="grupo-informacion"
                prepend-icon="mdi-information"
            >
                <template #activator="{ props }">
                    <v-list-item v-bind="props" title="Información" />
                </template>

                <v-list-item link :to="{ name: 'admin.informacion.autor' }">
                    <template #prepend>
                        <v-icon icon="mdi-account-tie" />
                    </template>

                    <v-list-item-title> Autor </v-list-item-title>
                </v-list-item>

                <v-list-item
                    link
                    :to="{ name: 'admin.informacion.tecnologias' }"
                >
                    <template #prepend>
                        <v-icon icon="mdi-file-code" />
                    </template>

                    <v-list-item-title> Tecnologías </v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>
