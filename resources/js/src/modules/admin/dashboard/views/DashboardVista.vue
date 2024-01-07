<script setup></script>

<template>
    <v-row>
        <v-col cols="12">
            <h1>Dashboard</h1>

            <p>
                <router-link :to="{ name: 'inicio' }">Inicio</router-link> |
                <router-link :to="{ name: 'nosotros' }">Nosotros</router-link>
            </p>
        </v-col>
    </v-row>
</template>
