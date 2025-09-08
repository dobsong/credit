<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitSection from '../ui/ToolkitSection.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-2 flex">
    <div class="w-full">
      <ToolkitSection section-id="intro" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:min-h-[65svh] lg:pb-[11svh]">
          <div class="lg:mt-auto">
            <ToolkitHeading text="Summary & Next Steps" class="mx-auto"></ToolkitHeading>
          </div>
          <div class="my-auto lg:mb-auto lg:mt-0 lg:w-4/5 mx-auto">
            <img
              src="../../assets/steps.jpg"
              class="max-h-[30svh] float-left mx-24 rounded-2xl"
              alt="Consideration Character"
            />
            <h3 class="font-bold text-xl md:text-2xl pb-4 pt-4">Next Steps</h3>
            <p class="md:mb-4 text-base md:text-xl lg:mx-16">
              Work with your team to develop your project plan, ethics plan, team roles tables, and
              data management plan. Copies of blank templates are available from the
              <RouterLink to="/resources">resources</RouterLink>
              section.
            </p>
            <p class="md:mb-4 text-base md:text-xl lg:mx-16">
              We'd welcome your feeback on this beta version of CREDIT
            </p>
            <div class="text-center md:mt-8 mb-4 text-sm lg:text-lg">
              <Button
                as="a"
                href="https://forms.office.com/e/xrv5N2XtvA"
                target="_blank"
                rel="noopener"
                class="mr-4"
              >
                Feedback <span class="pi pi-arrow-right"> </span>
              </Button>
              <Button @click="scrollToSection('your-resources')" outlined
                >Your Resources ...
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>
      <ToolkitSection section-id="your-resources" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:min-h-[65svh]">
          <div class="lg:mt-auto">
            <ToolkitHeading text="Your Resources" class="mx-auto"></ToolkitHeading>
          </div>
          <div class="my-auto lg:mb-auto lg:mt-0 lg:w-4/5 mx-auto">
            <p class="md:mb-4 text-base md:text-xl lg:mx-16">
              In the final version of CREDIT the aim is that you will have the option to log in, so
              so you could come back and work on your notes, your plans, review your reading list,
              etc.
            </p>
            <p class="md:mb-4 text-base md:text-xl lg:mx-16"></p>
            <div class="text-center my-4 text-4xl">
              <Button @click="scrollToSection('header')" class="z-50">
                <span class="pi pi-arrow-up" titl="Return to Top"></span>
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>
    </div>
  </div>
</template>

<style scoped></style>
