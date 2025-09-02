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

const projectPlan = useProjectPlanStore()
projectPlan.enable()
const phase = 1
</script>

<template>
  <div class="container mx-auto flex">
    <div class="w-full flex flex-wrap">
      <ToolkitPhaseNavigation :phase="phase" class="px-4"></ToolkitPhaseNavigation>

      <ToolkitSection section-id="intro" css-class="" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:h-[80svh]">
          <div class="lg:mt-auto">
            <ToolkitHeading text="Consideration Phase" class="mx-auto"></ToolkitHeading>
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
                src="../../assets/character_consideration.svg"
                class="max-h-[30svh] float-right"
                alt="Consideration Character"
              />
            </Motion>
            <p class="md:mb-4 text-base md:text-xl lg:mx-24">
              Before embarking on designing a participatory research or citizen science project it
              is first important to consider whether it is an appropriate approach. Then the context
              of the project can be defined and developed.
            </p>
            <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
              <Button @click="scrollToSection('decision-making')" class="text-sm md:text-base">
                Next: Decision Making
              </Button>
            </div>
          </div>
          <div class="col-span-1"></div>
        </div>
      </ToolkitSection>

      <ToolkitSection
        section-id="decision-making"
        css-class="md:w-9/10 lg:w-5/6"
        :slide-in-direction="-1"
      >
        <div class="flex flex-col-reverse md:flex-row items-center gap-0 lg:gap-8 lg:h-[95svh]">
          <div class="w-full md:w-1/3 text-center">
            <img
              src="@/assets/decision.jpg"
              class="rounded-2xl mb-3 p-1"
              alt="A walker considers a fork in the path"
            />
          </div>
          <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
            <ToolkitHeading text="Decision Making"></ToolkitHeading>
            <h4 class="font-bold text-lg md:text-xl pb-4 text-center">Is is the Right Approach?</h4>
            <p class="pb-2">
              The “<a
                href="https://www.ceh.ac.uk/sites/default/files/sepa_choosingandusingcitizenscience_interactive_4web_final_amended-blue1.pdf"
                target="_blank"
                >Choosing and Using Citizen Science</a
              >” resource from the UK Centre for Ecology and Hydrology contains a decision framework
              that you can use to assist with consideration of this question. It may also help to
              review the experiences of others, by examining the literature, and by networking with
              those who have done similar work to your own context.
            </p>
            <div class="text-center md:pt-8">
              <Button @click="scrollToSection('ethics')" class="text-sm md:text-base">
                Next: Ethics
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="ethics" :slide-in-direction="1" css-class="lg:h-[60svh] lg:w-4/5">
        <div class="grid grid-cols-1">
          <div>
            <ToolkitHeading text="Ethics"></ToolkitHeading>
          </div>
          <div class="">
            <p class="mb-1 md:mb-4 text-base md:text-xl">
              In this phase it is important to start thinking about the Ethics associated with the
              project as you have human participants. You will need to identify the ethics approval
              process and advisors for your discipline. At Lancaster University
              <a
                href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/research-integrity-ethical-research-and-research-impact-training/"
              >
                Ethics training
              </a>
              is available, and guidance is available on the
              <a
                href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/"
                target="_blank"
              >
                research ethics webpage</a
              >.
            </p>
            <h3 class="font-bold text-2xl pb-4">Suggested Reading List</h3>
            <ul class="list-disc pl-6 mb-1 md:mb-4 text-base md:text-xl">
              <li>
                <ToolkitReference
                  short-description="How to ethically share power with public research partners"
                  title="How to ethically share power with public research partners: AKA keeping blobs blobby"
                  citation="British Science Association"
                  url="https://www.britishscienceassociation.org/essay-6-lde-how-to-ethically-share-power"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Shaw, H., Brown, O., Hinds, J., Nightingale, S.J., Towse., J, Ellis, D.A."
                  :year="2025"
                  title="The DECIDE Framework: Describing Ethical Choices in Digital-Behavioral-Data Explorations"
                  citation="Shaw, H., Brown, O., Hinds, J., Nightingale, S.J., Towse., J, Ellis, D.A. (2025) The DECIDE Framework: Describing Ethical Choices in Digital-Behavioral-Data Explorations. Advances in Methods and Practices in Psychological Science. 8(3). doi:10.1177/25152459251361013"
                  url="https://journals.sagepub.com/doi/10.1177/25152459251361013"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  short-description="Valuing Voices Tool"
                  title="Valuing Voices Tool"
                  citation="Valuing Voices Project. University of York, Mahidol University with funding from Wellcome."
                  url="https://valuing-voices.ac.uk/"
                ></ToolkitReference>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center my-4 text-4xl">
          <Button @click="scrollToSection('header')" class="z-50">
            <span class="pi pi-arrow-up" titl="Return to Top"></span>
          </Button>
        </div>
      </ToolkitSection>
    </div>
  </div>
  <p class="w-full text-right container mx-auto px-4">
    <ToolkitNextButton :currentPhase="phase" text="Preparation"></ToolkitNextButton>
  </p>
  <img
    src="@/assets/ribbon_consideration.svg"
    alt="Consideration Phase Image"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
  />
</template>

<style scoped></style>
