<script setup>
import { ref, toRefs } from "vue";
import { navRouteProp } from "@/utils/props";

const props = defineProps({
    navRoute: navRouteProp,
});
const { navRoute } = toRefs(props);
const menu = ref(false);
</script>

<template>
    <v-btn
        v-if="!navRoute?.children || navRoute?.children?.length == 0"
        class="text-none ml-4"
        :to="navRoute.to"
    >
        <template #append>
            <v-icon :icon="navRoute.icon" />
        </template>

        {{ navRoute.text }}
    </v-btn>

    <v-menu v-else v-model="menu" open-on-hover>
        <template #activator="{ isActive, props: propsSlot }">
            <v-btn class="text-none ml-4" v-bind="propsSlot">
                {{ navRoute.text }}

                <template #append>
                    <v-icon
                        class="menu-icon"
                        :class="{ 'menu-icon--rotate': isActive }"
                    >
                        mdi-chevron-down
                    </v-icon>
                </template>
            </v-btn>
        </template>

        <v-list density="compact">
            <v-list-item
                v-for="(childRoute, index) in navRoute.children"
                :key="index"
                link
                :to="childRoute.to"
            >
                <template #append>
                    <v-icon :icon="childRoute.icon" />
                </template>

                <v-list-item-title>
                    {{ childRoute.text }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
