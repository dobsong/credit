<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const firstLetters: string[] = props.text.split(' ').map((str) => str[0])
const restOfWords: string[] = props.text.split(' ').map((str) => str.substring(1))
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="sr-only">
      {{ text }}
    </h1>
    <h1 class="font-[MuseoSans] font-extrabold md:mb-6 text-center aria-hidden='true'">
      <template v-for="(firstLetter, index) in firstLetters" :key="index">
        <span class="text-6xl md:text-7xl lg:text-9xl align-middle">{{
          (index > 0 ? ' ' : '') + firstLetter
        }}</span>
        <span class="text-3xl md:text-4xl lg:text-6xl align-middle" v-if="restOfWords[index]">
          {{ restOfWords[index] }}</span
        >
      </template>
    </h1>
  </div>
</template>
