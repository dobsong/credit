<script setup lang="ts">
defineProps<{
  text: string
  textColorClass?: { type: string; default: 'text-col' }
}>()
</script>
<template>
  <div class="flex flex-col items-center">
    <h1
      class="uppercase text-xl md:text-4xl font-[MuseoSans] flex flex-col mb-3 md:mb-6 mt-2 text-center"
      :class="textColorClass"
    >
      {{ text }}
    </h1>
  </div>
</template>
