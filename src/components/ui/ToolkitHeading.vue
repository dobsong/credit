<script setup lang="ts">
defineProps<{
  text: string
  subtitle?: string
}>()
</script>

<template>
  <div class="flex flex-col items-center my-auto">
    <h1
      class="font-[MuseoSans] font-extrabold text-center aria-hidden='true' text-xl md:text-3xl lg:text-5xl"
      :class="subtitle ? '' : 'md:mb-6'"
    >
      {{ text }}
    </h1>
    <h2
      v-if="subtitle"
      class="text-xl font-extrabold mb-4 md:mb-6 md:text-2xl lg:text-4xl align-middle text-cyan-900 dark:text-[var(--color-launch)]"
    >
      {{ subtitle.toUpperCase() }}
    </h2>
  </div>
</template>
