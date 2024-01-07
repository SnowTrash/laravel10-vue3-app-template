<script setup>
const props = defineProps({
    navRoute: {
        type: Object,
        required: true,
        validator: (value) => {
            return "name" in value && "text" in value && "icon" in value;
        },
    },
});
</script>

<template>
    <v-list-item
        v-if="
            !props.navRoute?.children || props.navRoute?.children?.length == 0
        "
        link
        :to="{ name: props.navRoute.name }"
    >
        <template #prepend>
            <v-icon :icon="props.navRoute.icon" />
        </template>

        <v-list-item-title>{{ props.navRoute.text }}</v-list-item-title>
    </v-list-item>

    <v-list-group
        v-else
        :value="`grupo-${props.navRoute.name}`"
        :prepend-icon="props.navRoute.icon"
    >
        <template #activator="{ props: propsSlot }">
            <v-list-item v-bind="propsSlot">
                <v-list-item-title>
                    {{ props.navRoute.text }}
                </v-list-item-title>
            </v-list-item>
        </template>

        <v-list-item
            v-for="childRoute in props.navRoute.children"
            :key="childRoute.name"
            link
            :to="{ name: childRoute.name }"
        >
            <template #prepend>
                <v-icon :icon="childRoute.icon" />
            </template>

            <v-list-item-title>
                {{ childRoute.text }}
            </v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>
