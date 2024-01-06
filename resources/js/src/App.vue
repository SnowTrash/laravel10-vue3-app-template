<script setup>
import { useSaludoStore } from '@/stores/saludo'
import { useContadorStore } from '@/stores/contador';
import { storeToRefs } from 'pinia'

const saludoStore = useSaludoStore();
const contadorStore = useContadorStore();

const { saludo } = storeToRefs(saludoStore);
const { contadorGetter } = storeToRefs(contadorStore);

</script>

<template>
  <h1>Laravel 10 + Vue 3 + Vue Router 4 + Pinia 2 + Vuetify 3</h1>

  <p>{{ saludo }}</p>

  <p>Contador: {{ contadorGetter }}</p>

  <p>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/nosotros">Nosotros</router-link>
  </p>

  <router-view></router-view>
</template>