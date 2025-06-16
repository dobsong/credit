<script setup lang="ts">
defineProps<{
  text: string
  textColorClass?: { type: string; default: 'text-col' }
}>()
</script>
<template>
  <div class="flex flex-col">
    <h1
      class="uppercase text-2xl md:text-4xl font-[MuseoSans] flex flex-col mb-4"
      :class="textColorClass"
    >
      {{ text }}
    </h1>
    <span class="w-1/4 h-1 md:h-2 bg-gray-800 dark:bg-white mb-4 md:mb-8"> </span>
  </div>
</template>
