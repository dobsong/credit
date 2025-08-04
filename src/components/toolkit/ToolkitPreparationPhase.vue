<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Skeleton from '@/volt/Skeleton.vue'
import Card from '../../volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Preparation Phase" class="w-full"></ToolkitHeading>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Assembling the team</h1>
          </template>
          <template #content>
            <img
              src="../../assets/character_preparation.svg"
              class="size-35 float-right"
              alt="Preparation Character"
            />
            <p>
              An important part of the preparation phase is to assemble your team and designate
              roles and responsibilities. This may include recruiting or collaborating with those
              who have the required specialisms or upskilling members of your current team.
              Depending on the context of your project, you may also need to consider both an
              academic team and a community team.
            </p>
            <p>
              Below are a range of different roles that your project might need. Click on each one
              to learn about suggested responsibilities. Then download and complete the Team Roles
              Table.
            </p>
          </template>
        </Card>
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Team Roles</h1>
          </template>
          <template #content>
            <p>
              <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span> TODO -
              interactive task about team roles
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
        <p class="container mx-auto w-full py-4 col-span-1 md:col-span-2">
          A Team Roles table can be downloaded
          <RouterLink to="/resources">the Resource section</RouterLink> to assist you in assembling
          your team and identifying any training needs.
        </p>
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Trainings and further resources</h1>
          </template>
          <template #content>
            <ul>
              <li>
                <ToolkitReference
                  citation="https://scistarter.org/training"
                  authors="SciStarter"
                  title="https://scistarter.org/training"
                  url="https://scistarter.org/training"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  citation="https://eu-citizen.science/"
                  authors="European Citizen Science Platform "
                  title="European Citizen Science Platform "
                  url="https://eu-citizen.science/"
                ></ToolkitReference>
              </li>
            </ul>
          </template>
        </Card>
      </div>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="5" text="Development"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_preparation.svg"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
    alt="Consideration Phase Image"
  />
</template>

<style scoped></style>
