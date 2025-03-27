<script setup lang="ts">
defineProps<{
  text: string
  phase: number
}>()
</script>

<template>
  <RouterLink
    :to="`/proposal/phase/${String(phase).padStart(2, '0')}`"
    class="uppercase pt-1.5 pb-2 px-4 rounded-lg bg-highlight border-2 border-transparent text-white dark:text-gray-800 hover:bg-highlight-hover"
  >
    <span class="text-sm sm:text-base align-middle">{{ text }}</span>
  </RouterLink>
</template>
