<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitOverallPlan from './ToolkitOverallPlan.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Development Phase" class="w-full"></ToolkitHeading>
      <ToolkitOverallPlan></ToolkitOverallPlan>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="6" text="Launch and Sustain"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_development.svg"
    class="w-full h-32 object-cover object-left sm:h-auto sm:object-contain"
    alt="Consideration Phase Image"
  />
</template>

<style scoped></style>
