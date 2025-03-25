<script setup lang="ts">
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
</script>

<template>
  <div class="container mx-auto px-6 flex relative py-8 md:py-16">
    <div class="w-full flex flex-col">
      <h1 class="uppercase text-3xl md:text-6xl font-[MuseoSans] flex flex-col mb-4">
        About Your Project
      </h1>
      <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-8"> </span>
      <p>
        Please select from the choices below. These choices will affect the content you see as you
        progress through the toolkit. Select &quot;unknown&quot; if you are unsure or want to see
        all content.
      </p>
      <div>
        <ToolkitNextButton :phase="3" text="Get Started"></ToolkitNextButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
