<script setup lang="ts">
const props = defineProps<{
  text: string
  subtitle?: string
}>()

const firstLetters: string[] = props.text.split(' ').map((str) => str[0])
const restOfWords: string[] = props.text.split(' ').map((str) => str.substring(1))
</script>

<template>
  <div class="flex flex-col items-center my-auto">
    <h1 class="sr-only">
      {{ text }}
    </h1>
    <h1
      class="font-[MuseoSans] font-extrabold text-center aria-hidden='true'"
      :class="subtitle ? '' : 'md:mb-6'"
    >
      <template v-for="(firstLetter, index) in firstLetters" :key="index">
        <span class="text-6xl md:text-7xl lg:text-9xl align-middle">{{
          (index > 0 ? ' ' : '') + firstLetter
        }}</span>
        <span class="text-3xl md:text-4xl lg:text-6xl align-middle" v-if="restOfWords[index]">
          {{ restOfWords[index] }}</span
        >
      </template>
    </h1>
    <h2
      v-if="subtitle"
      class="text-xl font-extrabold mb-4 md:mb-6 md:text-3xl lg:text-5xl align-middle text-cyan-900 dark:text-[var(--color-launch)]"
    >
      {{ subtitle.toUpperCase() }}
    </h2>
  </div>
</template>
