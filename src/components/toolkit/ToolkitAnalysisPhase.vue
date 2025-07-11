<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '../../volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Analysis, Reporting & Evaluation Phase" class="w-full"></ToolkitHeading>
      <p>
        Participants may play a role in collecting or analysing data for the project. Their views
        are also important for evaluating the project.
      </p>
      <Card>
        <template #title><h1 class="font-black text-xl">Analysis</h1></template>
        <template #content>
          <p>Considerations for data analysis includes:</p>
          <ul class="list-disc pl-6">
            <li>Data Quality and Processing</li>
            <li>Data Visualisation</li>
            <li>Data Interpretation</li>
            <li>Quantitative and Qualitative data Community involvement</li>
          </ul>
        </template>
      </Card>
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
