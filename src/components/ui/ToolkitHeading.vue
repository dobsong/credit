<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<template>
  <h1 class="uppercase text-3xl md:text-6xl font-[MuseoSans] flex flex-col mb-4">
    {{ text }}
  </h1>
  <span class="w-1/4 h-2 bg-gray-800 dark:bg-white mb-8"> </span>
</template>
