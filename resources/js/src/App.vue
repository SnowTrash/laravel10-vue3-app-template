<script setup>
import { ref } from 'vue'

const saludo = ref('Hola Mundo!')

</script>

<template>
  <h1>Laravel 10 + Vue 3 + Vue Router 4 + Vuex 4 + Vuetify 3</h1>

  <p>{{ saludo }}</p>

  <p>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/nosotros">Nosotros</router-link>
  </p>

  <router-view></router-view>
</template>