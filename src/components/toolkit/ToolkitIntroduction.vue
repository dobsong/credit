<script setup lang="ts">
import CrestHeading from '../ui/CrestHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
</script>

<template>
  <div class="container mx-auto px-6 flex relative py-8 md:py-16">
    <div class="w-full flex flex-col">
      <CrestHeading text="Introduction"></CrestHeading>
      <p>
        <ToolkitNextButton :phase="2" text="Initial Evaluation"> </ToolkitNextButton>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
