<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex relative py-8 md:py-16">
    <div class="w-full sm:w-3/5 flex flex-col relative">
      <ToolkitHeading text="Launch and Sustain: The Live Phase"></ToolkitHeading>
      <p>
        <ToolkitNextButton :phase="7" text="Analysis and Evaluation"></ToolkitNextButton>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
