<script setup>
import { ref } from "vue";

const mostrado = ref(false);

const toggle = () => {
    mostrado.value = !mostrado.value;
};
</script>

<template>
    <v-app>
        <v-layout>
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
                            <v-list-item-title>
                                Perfil de usuario
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Cambiar tema</v-list-item-title>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Cerrar sesión</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>

            <v-navigation-drawer v-model="mostrado" temporary location="left">
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

                        <v-list-item
                            link
                            :to="{ name: 'admin.informacion.autor' }"
                        >
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

            <v-main>
                <v-container fluid>
                    <router-view v-slot="{ Component, route }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" :key="route.path" />
                        </transition>
                    </router-view>
                </v-container>
            </v-main>
        </v-layout>
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
