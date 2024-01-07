<script setup>
import { toRefs } from "vue";
import { navRouteProp } from "@/utils/props";

const props = defineProps({
    navRoute: navRouteProp,
});
const { navRoute } = toRefs(props);
</script>

<template>
    <v-list-item
        v-if="!navRoute?.children || navRoute?.children?.length == 0"
        link
        :to="navRoute.to"
    >
        <template #prepend>
            <v-icon :icon="navRoute.icon" />
        </template>

        <v-list-item-title>{{ navRoute.text }}</v-list-item-title>
    </v-list-item>

    <v-list-group
        v-else
        :value="`grupo-${navRoute.to.name}`"
        :prepend-icon="navRoute.icon"
    >
        <template #activator="{ props: propsSlot }">
            <v-list-item v-bind="propsSlot">
                <v-list-item-title>
                    {{ navRoute.text }}
                </v-list-item-title>
            </v-list-item>
        </template>

        <v-list-item
            v-for="(childRoute, index) in navRoute.children"
            :key="index"
            link
            :to="childRoute.to"
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
