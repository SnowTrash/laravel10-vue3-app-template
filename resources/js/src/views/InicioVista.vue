<script setup>
import { useContadorStore } from '@/stores/contador';

const contadorStore = useContadorStore();

const { incrementar } = contadorStore;
</script>

<template>
    <h2>Inicio</h2>

    <v-btn color="green" @click="incrementar">Incrementar</v-btn>
</template>