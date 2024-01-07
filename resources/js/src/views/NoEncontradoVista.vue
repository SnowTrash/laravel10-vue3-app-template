<script setup></script>

<template>
    <v-row>
        <v-col cols="12">
            <h2>No encontrado</h2>

            <p>
                La página que buscas no existe.
                <router-link :to="{ name: 'inicio' }">
                    Volver al inicio
                </router-link>
            </p>
        </v-col>
    </v-row>
</template>
