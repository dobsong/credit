<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
import { Motion } from 'motion-v'
import CaseStudyLink from '../ui/CaseStudyLink.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitPhaseNavigation from '../ui/ToolkitPhaseNavigation.vue'
import ToolkitSection from '../ui/ToolkitSection.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
const phase = 4
</script>

<template>
  <div class="container mx-auto px-2 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitPhaseNavigation :phase="phase"></ToolkitPhaseNavigation>
      <ToolkitSection section-id="intro" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:min-h-[65svh] lg:mb-[11svh] pb-1 md:pb-8">
          <div class="lg:mt-auto">
            <ToolkitHeading
              text="Launch & Sustain"
              subtitle="The Live Phase"
              class="mx-auto"
            ></ToolkitHeading>
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
                src="../../assets/character_launch.svg"
                class="max-h-[30svh] float-right pr-8"
                alt="Consideration Character"
              />
            </Motion>
            <p class="md:mb-4 text-base md:text-xl lg:mx-24">
              You may have pre-engaged with your community through co-development or the project, or
              have pre-planned and are ready to engage with your community at the launch stage. A
              community engagement strategy will assist you to attract participants and maintain
              engagement during and after the project.
            </p>
            <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
              <Button @click="scrollToSection('considerations')" class="text-sm md:text-base">
                Next: Strategy
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="considerations" :slide-in-direction="-1">
        <div
          class="grid grid-cols-2 gap-0 lg:gap-8 text-lg md:text-xl lg:w-4/5 mx-auto lg:min-h-[50svh]"
        >
          <ToolkitHeading text="Strategy" class="col-span-2 md:col-span-1 my-auto"></ToolkitHeading>
          <div class="col-span-2 md:col-span-1 my-auto pb-8">
            <h3 class="md:mb-4 text-base md:text-xl lg:mx-24 font-bold">
              Prompts for developing your strategy
            </h3>
            <ul class="list-disc text-base md:text-xl pl-6 lg:ml-24">
              <li>Does your team need media training?</li>
              <li>What methods will you use for active promotion?</li>
              <li>How will you respond to external requests?</li>
              <li>How will participants be trained?</li>
              <li>What methods will you use for community engagement and re-engagement?</li>
            </ul>
          </div>
          <div class="col-span-2 text-center mt-1 mb-2">
            <Button @click="scrollToSection('case-studies')" class="text-sm md:text-base">
              Next: Case Studies
            </Button>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="case-studies" :slide-in-direction="1">
        <div class="flex lg:min-h-[50svh]">
          <div class="lg:w-4/5 mx-auto">
            <ToolkitHeading text="Case Studies" class="w-full"></ToolkitHeading>

            <p class="md:mb-4 text-base md:text-xl lg:mx-24 my-auto w-full">
              Consider the challenges of going live, and developing an engagement strategy in light
              of the case studies - such as The Big Windermere Survey.
            </p>
            <div class="md:px-4 my-auto md:w-1/2 lg:w-1/3 mx-auto">
              <CaseStudyLink :case-study-index="4"></CaseStudyLink>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <div class="w-full text-center my-4 text-4xl">
        <Button @click="scrollToSection('header')" class="z-50">
          <span class="pi pi-arrow-up" titl="Return to Top"></span>
        </Button>
      </div>

      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :currentPhase="phase" text="Analysis and Evaluation"></ToolkitNextButton>
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
