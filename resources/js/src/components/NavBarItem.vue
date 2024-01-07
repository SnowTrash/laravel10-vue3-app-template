<script setup>
import { ref } from "vue";

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
const menu = ref(false);
</script>

<template>
    <v-btn
        v-if="
            !props.navRoute?.children || props.navRoute?.children?.length == 0
        "
        class="text-none ml-4"
        :to="props.navRoute.to"
    >
        <template #append>
            <v-icon :icon="props.navRoute.icon" />
        </template>

        {{ props.navRoute.text }}
    </v-btn>

    <v-menu v-else v-model="menu" open-on-hover>
        <template #activator="{ isActive, props: propsSlot }">
            <v-btn class="text-none ml-4" v-bind="propsSlot">
                {{ props.navRoute.text }}

                <template #append>
                    <v-icon
                        class="menu-icon"
                        :class="{ 'menu-icon--rotate': isActive }"
                    >
                        mdi-chevron-down
                    </v-icon>
                </template>
            </v-btn>
        </template>

        <v-list density="compact">
            <v-list-item
                v-for="(childRoute, index) in props.navRoute.children"
                :key="index"
                link
                :to="childRoute.to"
            >
                <template #append>
                    <v-icon :icon="childRoute.icon" />
                </template>

                <v-list-item-title>
                    {{ childRoute.text }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
