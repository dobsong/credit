<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
import { Motion } from 'motion-v'
import CaseStudyLink from '../ui/CaseStudyLink.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitPhaseNavigation from '../ui/ToolkitPhaseNavigation.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
import ToolkitSection from '../ui/ToolkitSection.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()

const phase = 6
</script>

<template>
  <div class="container mx-auto p-2 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitPhaseNavigation :phase="phase"></ToolkitPhaseNavigation>

      <ToolkitSection section-id="intro" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:min-h-[65svh] lg:mb-[11svh]">
          <div class="lg:mt-auto">
            <ToolkitHeading text="Legacy & Impact Phase" class="mx-auto"></ToolkitHeading>
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
                src="../../assets/character_legacy.svg"
                class="max-h-[30svh] float-right"
                alt="Legacy Character"
              />
            </Motion>
            <p class="md:mb-4 text-base md:text-xl lg:mx-24">
              As well as data and data analysis for academic study, there are impacts for the
              participants, and community. The project may also lead to unexpected outputs. What is
              the long-term timeframe for the study? Are there plans to revisit the project (e.g.,
              annually), and what funding implications does this have? Or are there project outputs
              for academic or community use?
            </p>
            <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
              <Button @click="scrollToSection('case-studies')" class="text-sm md:text-base">
                Next: Case Studies
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="case-studies" :slide-in-direction="-1">
        <div class="flex lg:min-h-[95svh]">
          <div class="lg:w-4/5 mx-auto">
            <ToolkitHeading text="Case Studies" class="w-full"></ToolkitHeading>
            <p class="md:mb-4 text-base md:text-xl my-auto w-full">
              Read about some case studies such as Afrofuturism. The Literature section below also
              contains relevant reading reflecting on legacy in community projects.
            </p>
            <div class="md:px-4 my-auto md:w-1/2 lg:w-1/2 mx-auto">
              <CaseStudyLink :case-study-index="0"></CaseStudyLink>
            </div>
            <div class="w-full text-center pt-8">
              <Button @click="scrollToSection('literature')" class="text-sm md:text-base">
                Next: Literature
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="literature" :slide-in-direction="1">
        <ToolkitHeading text="Literature"></ToolkitHeading>

        <ul class="list-disc pl-6 mb-4">
          <li>
            <ToolkitReference
              authors="Boulanger, Matthew T., Michael Adler, Jeffrey L. Boyer, and Mark Henderson"
              url="https://www.tandfonline.com/doi/abs/10.1080/00231940.2022.2150811"
              short-description="‘Our Work Will Continue’: Geochemical Sourcing by XRF of Obsidian in the Collections of Helen Greene Blumenschein"
              title="‘Our Work Will Continue’: Geochemical Sourcing by XRF of Obsidian in the Collections of Helen Greene Blumenschein"
              citation="Boulanger, Matthew T., Michael Adler, Jeffrey L. Boyer, and Mark Henderson, “‘Our Work Will Continue’: Geochemical Sourcing by XRF of Obsidian in the Collections of Helen Greene Blumenschein”, KIVA, 89 (1), 51-77, 2023. doi:10.1080/00231940.2022.2150811"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              authors="Lopez, L.S., Basu, A., Blagrave, K., Bove, G., Stewart, K., Bazely, D. and Sharma, S."
              url="https://www.tandfonline.com/doi/abs/10.1080/00231940.2022.2150811"
              short-description="Establishing a long-term citizen science project? Lessons learned from the Community Lake Ice Collaboration spanning over 30 yr and 1000 lakes"
              title="Establishing a long-term citizen science project? Lessons learned from the Community Lake Ice Collaboration spanning over 30 yr and 1000 lakes"
              citation="Lopez, L.S., Basu, A., Blagrave, K., Bove, G., Stewart, K., Bazely, D. and Sharma, S., “Establishing a long-term citizen science project? Lessons learned from the Community Lake Ice Collaboration spanning over 30 yr and 1000 lakes”, Limnol. Oceanogr. Lett, 9, 99-111, 2024. https://doi.org/10.1002/lol2.10336"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              authors="RSPB"
              url="https://www.rspb.org.uk/whats-happening/big-garden-birdwatch"
              short-description="RSPB Garden Bird Watch"
              title="RSPB Garden Bird Watch, started in 1979"
              citation="RSPB Garden Bird Watch, started in 1979, Big Garden Birdwatch. "
            ></ToolkitReference>
          </li>
        </ul>
      </ToolkitSection>

      <ToolkitSection section-id="partners" :slide-in-direction="-1">
        <h1 class="font-black text-xl pb-4 mx-auto text-center">
          Legacy & Impact Partners & Platforms
        </h1>
        <ul class="list-disc pl-6 mb-4 md:mb-8 md:text-xl lg:mx-24">
          <li>Libraries (public and research)</li>
          <li>Museums and attractions (free and pay for entry)</li>
          <li>Education platforms (e.g., STEM Learning, Teaching resources - Tes)</li>
        </ul>

        <div class="text-center my-4 text-4xl">
          <Button @click="scrollToSection('header')" class="z-50">
            <span class="pi pi-arrow-up" titl="Return to Top"></span>
          </Button>
        </div>
      </ToolkitSection>

      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :currentPhase="phase" text="Data Management"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_legacy.svg"
    class="w-full h-32 object-cover object-left sm:h-auto sm:object-contain"
    alt="Legacy Phase Image"
  />
</template>

<style scoped></style>
