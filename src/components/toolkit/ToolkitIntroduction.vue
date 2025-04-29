<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="w-full flex flex-col">
    <ToolkitHeading text="Introduction"></ToolkitHeading>
    <p>
      <ToolkitNextButton :phase="2" text="Initial Evaluation"> </ToolkitNextButton>
    </p>
  </div>
</template>

<style scoped></style>
