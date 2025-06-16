<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex relative py-8 md:py-16">
    <div class="w-full sm:w-3/5 flex flex-col relative">
      <ToolkitHeading text="Evaluation"></ToolkitHeading>
    </div>
  </div>
</template>

<style scoped></style>
