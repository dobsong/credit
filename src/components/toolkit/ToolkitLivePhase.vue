<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '@/volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Launch and Sustain: The Live Phase" class="w-full"></ToolkitHeading>
      <Card class="mb-4">
        <template #content>
          <p>
            You may have pre-engaged with your community through co-development or the project, or
            have pre-planned and are ready to engage with your community at the launch stage. A
            community engagement strategy will assist you to attract participants and maintain
            engagement during and after the project.
          </p>
          <p>Prompts for developing your strategy</p>
          <ul class="list-disc ml-12">
            <li>Does your team need media training?</li>
            <li>What methods will you use for active promotion?</li>
            <li>How will you respond to external requests?</li>
            <li>How will participants be trained?</li>
            <li>What methods will you use for community engagement andre-engagement?</li>
          </ul>
        </template>
      </Card>
      <Card class="w-full">
        <template #title>
          <h1 class="font-black text-xl">Case Study</h1>
        </template>
        <template #content>
          <p>
            <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - Case Study
            to go here
          </p>
          <div class="w-full xl:w-6/12 p-4">
            <Skeleton class="mb-2"></Skeleton>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="4rem"></Skeleton>
          </div>
        </template>
      </Card>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="7" text="Analysis and Evaluation"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_launch.svg"
    class="w-full h-32 object-cover object-center sm:h-auto sm:object-contain"
    alt="Consideration Phase Image"
  />
</template>

<style scoped></style>
