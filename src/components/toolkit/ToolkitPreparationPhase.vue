<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
import { Motion } from 'motion-v'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitPhaseNavigation from '../ui/ToolkitPhaseNavigation.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
import ToolkitSection from '../ui/ToolkitSection.vue'
import TeamRolesTask from './tasks/TeamRolesTask.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()

const phase = 2
</script>

<template>
  <div class="container mx-auto px-2 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitPhaseNavigation :phase="phase"></ToolkitPhaseNavigation>

      <ToolkitSection section-id="intro" css-class="" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:h-[80svh]">
          <div class="lg:mt-auto">
            <ToolkitHeading text="Preparation Phase" class="mx-auto"></ToolkitHeading>
          </div>
          <div class="my-auto lg:mb-auto lg:mt-0 lg:w-4/5 mx-auto">
            <Motion
              :initial="{ rotateZ: 12 }"
              :animate="{
                transition: { type: 'spring', stiffness: 100, damping: 8 },
                rotateZ: 0,
              }"
              :visible="true"
              :once="true"
            >
              <img
                src="../../assets/character_preparation.svg"
                class="max-h-[30svh] float-right"
                alt="Preparation Character"
              />
            </Motion>
            <h1 class="font-black text-xl"></h1>
            <p class="md:mb-4 text-base md:text-xl lg:mx-24">
              An important part of the preparation phase is to assemble your team and designate
              roles and responsibilities. This may include recruiting or collaborating with those
              who have the required specialisms or upskilling members of your current team.
              Depending on the context of your project, you may also need to consider both an
              academic team and a community team.
            </p>
            <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
              <Button @click="scrollToSection('team-roles')" class="text-sm md:text-base">
                Next: Team Roles
              </Button>
            </div>
          </div>
          <div class="col-span-1"></div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="team-roles" :slide-in-direction="-1">
        <div>
          <ToolkitHeading text="Team Roles" class="mx-auto"></ToolkitHeading>
        </div>
        <p class="md:mb-4 text-base md:text-xl lg:mx-24">
          Below are a range of different roles that your project might need. Click on each one to
          learn about suggested responsibilities. Then download and complete the Team Roles Table.
        </p>
        <TeamRolesTask></TeamRolesTask>
        <p class="md:mb-4 text-base md:text-xl lg:mx-24">
          A Team Roles table can be downloaded
          <RouterLink to="/resources">the Resource section</RouterLink> to assist you in assembling
          your team and identifying any training needs.
        </p>
      </ToolkitSection>

      <ToolkitSection section-id="intro" css-class="" :slide-in-direction="1">
        <div class="grid grid-cols-1">
          <h1 class="font-black text-xl">Trainings & further resources</h1>
          <ul class="md:mb-4 text-base md:text-xl">
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
          <div class="text-center mt-8 text-4xl">
            <Button @click="scrollToSection('header')" class="z-50">
              <span class="pi pi-arrow-up" titl="Return to Top"></span>
            </Button>
          </div>
        </div>
      </ToolkitSection>

      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :currentPhase="phase" text="Development"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_preparation.svg"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
    alt="Preparation Phase Image"
  />
</template>

<style scoped></style>
