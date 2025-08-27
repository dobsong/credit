<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '@/volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
import ToolkitOverallPlan from './ToolkitOverallPlan.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full grid">
      <ToolkitHeading text="Development Phase" class="w-full"></ToolkitHeading>
      <p class="w-full">
        This phase defines the space to develop the different plans required to deliver the project
      </p>
      <ul class="list-disc ml-12 mb-4">
        <li>Overall Plan (template)</li>
        <li>Ethics Plan (introduced previously in toolkit)</li>
        <li>Data Management Plan (introduced later in toolkit)</li>
      </ul>

      <Card class="mb-4">
        <template #content><ToolkitOverallPlan></ToolkitOverallPlan></template>
      </Card>
      <Card>
        <template #title><h1 class="font-black text-xl">Further Guidance</h1></template>
        <template #content>
          <ToolkitReference
            title="Funding Applications UKRI core question guidance: Core section questions and how they will
          be assessed -UKRI"
            short-description="Funding Applications UKRI core question guidance: Core section questions and how they will
          be assessed -UKRI"
            citation=""
            url="https://www.ukri.org/apply-for-funding/develop-your-application/responsive-mode-opportunities-funding-service-core-application-section-questions-and-assessment/core-section-questions-and-how-they-will-be-assessed/#contents-list"
          ></ToolkitReference>
        </template>
      </Card>
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
