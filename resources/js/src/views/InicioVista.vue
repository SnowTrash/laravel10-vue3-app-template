<script setup>
import { useContadorStore } from '@/stores/contador';

const contadorStore = useContadorStore();

const { incrementar } = contadorStore;
</script>

<template>
    <h2>Inicio</h2>

    <button @click="incrementar">Incrementar</button>
</template>