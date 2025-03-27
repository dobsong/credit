<script setup lang="ts">
import CrestHeading from '../ui/CrestHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
</script>

<template>
  <div class="container mx-auto px-6 flex relative py-8 md:py-16">
    <div class="w-full sm:w-3/5 flex flex-col relative">
      <CrestHeading text="Consideration Phase"></CrestHeading>
      <p>
        <ToolkitNextButton :phase="4" text="Preparation"></ToolkitNextButton>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
