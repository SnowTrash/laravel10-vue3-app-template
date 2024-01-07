<script setup>
const props = defineProps({
    navRoute: {
        type: Object,
        required: true,
        validator: (value) => {
            return (
                "to" in value &&
                "text" in value &&
                "icon" in value &&
                "name" in value.to
            );
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
        :to="props.navRoute.to"
    >
        <template #prepend>
            <v-icon :icon="props.navRoute.icon" />
        </template>

        <v-list-item-title>{{ props.navRoute.text }}</v-list-item-title>
    </v-list-item>

    <v-list-group
        v-else
        :value="`grupo-${props.navRoute.to.name}`"
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
            v-for="(childRoute, index) in props.navRoute.children"
            :key="index"
            link
            :to="childRoute.to"
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
