<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import PageLayout from "./layouts/PageLayout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const layout = computed(() => {
    switch (route.meta.layout) {
        case "admin-layout":
            return AdminLayout;
        case "page-layout":
            return PageLayout;
        case "blank-layout":
            return BlankLayout;
        default:
            return BlankLayout;
    }
});
</script>

<template>
    <v-app>
        <component :is="layout">
            <router-view v-slot="{ Component, route: slotRoute }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="slotRoute.path" />
                </transition>
            </router-view>
        </component>
    </v-app>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
