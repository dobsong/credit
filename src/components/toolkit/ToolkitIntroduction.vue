<script setup lang="ts">
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
</script>

<template>
  <div class="container mx-auto px-6 flex relative py-8 md:py-16">
    <div class="w-full flex flex-col">
      <h1 class="uppercase text-3xl md:text-6xl font-[MuseoSans] flex flex-col mb-4">
        Introduction
      </h1>
      <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-8"> </span>
      <p>
        <ToolkitNextButton :phase="2" text="Initial Evaluation"> </ToolkitNextButton>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
