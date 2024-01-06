<script setup>
import { ref } from 'vue'

const saludo = ref('Hola Mundo!')

</script>

<template>
  <p>{{ saludo }}</p>
</template>