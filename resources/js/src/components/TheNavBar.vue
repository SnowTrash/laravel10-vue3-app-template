<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { width } = useDisplay();
const menu = ref(false);
const estaAutenticado = ref(true);

const autenticar = () => {
    estaAutenticado.value = true;
};

const cerrarSesion = () => {
    estaAutenticado.value = false;
};
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
            <!-- v-if="!menuItem.children" -->
            <v-btn class="text-none ml-4" :to="{ name: 'inicio' }">
                <template #append>
                    <v-icon icon="mdi-home" />
                </template>

                Inicio
            </v-btn>

            <v-btn class="text-none ml-4" :to="{ name: 'nosotros' }">
                <template #append>
                    <v-icon icon="mdi-account-group" />
                </template>

                Nosotros
            </v-btn>

            <v-menu v-model="menu" open-on-hover>
                <template #activator="{ isActive, props }">
                    <v-btn class="text-none ml-4" v-bind="props">
                        Items

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
                        v-for="(item, index) in [
                            {
                                text: 'Item 1',
                                icon: 'mdi-alpha-a-circle',
                            },
                            {
                                text: 'Item 2',
                                icon: 'mdi-alpha-b-circle',
                            },
                        ]"
                        :key="index"
                        link
                    >
                        <template #append>
                            <v-icon :icon="item.icon" />
                        </template>

                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-divider class="mx-2" vertical />

            <v-btn
                v-if="estaAutenticado"
                class="text-none ml-4"
                :to="{ name: 'admin.dashboard' }"
            >
                <template #append>
                    <v-icon icon="mdi-view-dashboard" />
                </template>

                Dashboard
            </v-btn>

            <v-btn
                v-if="!estaAutenticado"
                class="text-none ml-4"
                @click="autenticar"
            >
                <template #append>
                    <v-icon icon="mdi-login" />
                </template>

                Iniciar Sesión
            </v-btn>

            <v-btn v-else class="text-none ml-4" @click="cerrarSesion">
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
