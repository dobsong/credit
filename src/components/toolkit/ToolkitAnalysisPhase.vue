<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Analysis, Reporting & Evaluation Phase" class="w-full"></ToolkitHeading>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="8" text="Legacy and Impact"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_analysis.svg"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
    alt="Analysis Phase Image"
  />
</template>

<style scoped></style>
