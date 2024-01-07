<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const layout = computed(() => {
    return route.meta.layout == "admin-layout" ? AdminLayout : BlankLayout;
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
