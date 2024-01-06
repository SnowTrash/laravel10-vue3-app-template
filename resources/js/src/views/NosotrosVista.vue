<script setup>
import { useContadorStore } from '@/stores/contador';

const contadorStore = useContadorStore();

const { decrementar } = contadorStore;
</script>

<template>
    <h2>Nosotros</h2>

    <v-btn color="red" @click="decrementar">Decrementar</v-btn>
</template>