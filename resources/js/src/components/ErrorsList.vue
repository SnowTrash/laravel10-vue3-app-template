<script setup>
import { toRefs } from "vue";

const props = defineProps({
    errors: {
        type: Array,
        required: true,
    },
});

const { errors } = toRefs(props);
</script>

<template>
    <div>
        <span class="d-inline-block font-weight-bold">
            Please correct the following errors:
        </span>

        <ul class="list-unstyled">
            <li v-for="error in errors" :key="error">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.list-unstyled {
    list-style: none;
}
</style>
