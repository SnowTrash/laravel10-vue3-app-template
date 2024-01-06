<script setup>
import { useContadorStore } from '@/stores/contador';

const contadorStore = useContadorStore();

const { decrementar } = contadorStore;
</script>

<template>
    <h2>Nosotros</h2>

    <button @click="decrementar">Decrementar</button>
</template>