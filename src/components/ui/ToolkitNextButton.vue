<script setup lang="ts">
defineProps<{
  text: string
  phase: number
}>()
</script>

<template>
  <RouterLink
    :to="`/proposal/phase/${String(phase).padStart(2, '0')}`"
    class="uppercase py-2 px-4 rounded-lg bg-highlight border-2 border-transparent text-white dark:text-gray-800 hover:bg-highlight-hover my-auto"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 sm:size-7 relative inline-block pr-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>

    <span class="text-sm sm:text-base align-middle">{{ text }}</span>
  </RouterLink>
</template>
