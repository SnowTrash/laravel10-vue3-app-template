<script setup>
import { useTheNavigationDrawerStore } from "@/stores/the-navigation-drawer";
import { storeToRefs } from "pinia";
import navigationRoutes from "../modules/admin/navigation-routes";

const theNavigationDrawer = useTheNavigationDrawerStore();
const { drawer } = storeToRefs(theNavigationDrawer);
</script>

<template>
    <v-navigation-drawer v-model="drawer" location="left">
        <v-list open-strategy="multiple">
            <v-list-subheader>Menú Principal</v-list-subheader>

            <v-divider />

            <template v-for="navRoute in navigationRoutes" :key="navRoute.name">
                <v-list-item
                    v-if="
                        !navRoute?.children || navRoute?.children?.length == 0
                    "
                    link
                    :to="{ name: navRoute.name }"
                >
                    <template #prepend>
                        <v-icon :icon="navRoute.icon" />
                    </template>

                    <v-list-item-title>{{ navRoute.text }}</v-list-item-title>
                </v-list-item>

                <v-list-group
                    v-else
                    :value="`grupo-${navRoute.name}`"
                    :prepend-icon="navRoute.icon"
                >
                    <template #activator="{ props }">
                        <v-list-item v-bind="props">
                            <v-list-item-title>
                                {{ navRoute.text }}
                            </v-list-item-title>
                        </v-list-item>
                    </template>

                    <v-list-item
                        v-for="childRoute in navRoute.children"
                        :key="childRoute.name"
                        link
                        :to="{ name: childRoute.name }"
                    >
                        <template #prepend>
                            <v-icon :icon="childRoute.icon" />
                        </template>

                        <v-list-item-title>
                            {{ childRoute.text }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
