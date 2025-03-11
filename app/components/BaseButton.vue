<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
    label?: String,
    to?: RouteLocationRaw,
}>()

</script>

<template>
    <NuxtLink :to="to"
        class="bg-orange-strong text-white border-2 border-transparent font-bold py-1 px-4 rounded-3xl transition duration-300 hover:bg-transparent hover:border-orange-strong hover:cursor-pointer">
        <span v-if="props.label">{{ props.label }}</span>
        <slot v-else />
    </NuxtLink>
</template>
