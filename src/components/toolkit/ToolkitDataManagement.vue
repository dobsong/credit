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

const phase = 7
</script>

<template>
  <div class="container mx-auto px-2 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitPhaseNavigation :phase="phase"></ToolkitPhaseNavigation>

      <ToolkitSection section-id="intro" :slide-in-direction="1">
        <div class="grid grid-cols-1 lg:min-h-[65svh]">
          <div class="lg:mt-auto">
            <ToolkitHeading text="Data Management" class="mx-auto"></ToolkitHeading>
          </div>
          <div class="my-auto lg:mb-auto lg:mt-0 mx-auto">
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
                src="../../assets/character_data.svg"
                class="max-h-[30svh] float-right"
                alt="Data Management Character"
              />
            </Motion>
            <p class="text-base md:text-xl">
              Any project that produces data, has responsibilities in how that data is collected,
              stored, and used.
            </p>
            <ul class="list-disc pl-6 mb-4 text-base md:text-xl">
              <li>
                How accessible will the final data set be? Will participants and other researchers
                be able to access and use the data?
              </li>
              <li>Is any of the data you collected sensitive data?</li>
              <li>
                Are you GDPR compliant? If working in another overseas what are the data rules?
              </li>
            </ul>
            <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
              <Button @click="scrollToSection('data-management-plan')" class="text-sm md:text-base">
                Next: Data Management Plan
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="data-management-plan" :slide-in-direction="-1">
        <div class="flex flex-col-reverse md:flex-row items-center gap-0 lg:gap-8 lg:min-h-[95svh]">
          <div class="w-full md:w-1/3 text-center">
            <img
              src="@/assets/data.jpg"
              class="rounded-2xl mb-3 p-1"
              alt="Illustrative image of data on a screen"
            />
          </div>
          <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
            <ToolkitHeading text="Data Management Plan"></ToolkitHeading>
            <p>
              A Data Management Plan encourages consideration before the project starts and for
              participatory project may link to the project Ethics plan. The LU Data Management Plan
              Template (available
              <a
                href="https://portal.lancaster.ac.uk/ask/study/library/open-research/research-data-management/data-management-plans/"
                target="_blank"
                >on the intranet</a
              >) is suitable for use where there are no funder requirements.
            </p>
            <div class="text-center md:pt-8">
              <Button @click="scrollToSection('case-studies')" class="text-sm md:text-base">
                Next: Case Studies
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="case-studies" :slide-in-direction="1">
        <div class="flex lg:min-h-[95svh]">
          <div class="lg:w-4/5 mx-auto">
            <ToolkitHeading text="Case Studies" class="w-full"></ToolkitHeading>
            <p class="md:mb-4 text-base md:text-xl my-auto w-full">
              Consider the data management issues relating to case studies such as the Davy
              Noteboooks Project.
            </p>
            <div class="md:px-4 my-auto md:w-1/2 lg:w-1/2 mx-auto">
              <CaseStudyLink :case-study-index="1"></CaseStudyLink>
            </div>
            <div class="w-full text-center pt-8">
              <Button @click="scrollToSection('considerations')" class="text-sm md:text-base">
                Next: Key Areas
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="considerations" :slide-in-direction="-1">
        <div class="grid grid-cols-2 gap-0 lg:gap-8 text-lg md:text-xl mx-auto lg:min-h-[95svh]">
          <ToolkitHeading
            text="Key Areas"
            class="col-span-2 md:col-span-1 my-auto"
          ></ToolkitHeading>
          <div class="col-span-2 md:col-span-1 my-auto pb-8">
            <h3 class="md:mb-4 text-base md:text-xl lg:mx-8 font-bold">
              There are 7 key areas of data management to consider:
            </h3>
            <ul class="list-disc text-base md:text-xl pl-6 lg:ml-8">
              <li>Data Collection</li>
              <li>Documentation and Metadata</li>
              <li>Storage, Backup and Security</li>
              <li>Ethics and Legal Compliance</li>
              <li>Data Selection and Preservation</li>
              <li>Data Sharing and Archiving</li>
              <li>Responsibilities and Resources</li>
            </ul>
          </div>
          <div class="col-span-2 text-center mt-1 mb-2">
            <Button @click="scrollToSection('further-resources')" class="text-sm md:text-base">
              Next: Further Resources
            </Button>
          </div>
        </div>
      </ToolkitSection>

      <ToolkitSection section-id="further-resources" :slide-in-direction="-1">
        <ToolkitHeading text="Training & Further Resources"></ToolkitHeading>
        <ul class="list-disc pl-6 mb-4">
          <li>
            <ToolkitReference
              title="Data Management Plans, Lancaster University"
              short-description="Data Management Plans, Lancaster University"
              url="https://portal.lancaster.ac.uk/ask/study/library/open-research/research-data-management/data-management-plans/"
              citation="Data Management Plans, Lancaster University, Data Management Plans | ASK - Lancaster University"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              title="DMPonline, a tool and community for developing data management plans"
              short-description="DMPonline"
              url="https://dmponline.dcc.ac.uk/"
              :year="2019"
              citation="DMPonline, Digital Curation Centre, DMPonline. Holmstrand, K.F., den Boer, S.P.A., Vlachos, E., Martínez-Lavanchy, P.M., Hansen, K.K. (Eds.) (2019). Research Data Management (eLearning course). doi: 10.11581/dtu:00000047"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              title="eLearning course about the importance of good research data management (RDM)"
              short-description="eLearning course about the importance of good research data management (RDM)"
              url="https://deic.dk/en/data-management/instructions-and-guides/RDM"
              citation="eLearning course about the importance of good research data management (RDM) | Danish e-Infrastructure Consortium"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              title="Data Management Documentation in Citizen Science Projects: Bringing Formalisation and Transparency Together"
              short-description="Data Management Documentation in Citizen Science Projects: Bringing Formalisation and Transparency Together"
              url="https://theoryandpractice.citizenscienceassociation.org/articles/538/files/647dce1d15fad.pdf"
              citation="Thuermer, G, Guardia, EG, Reeves, N, Corcho, O and Simperl, E., “Data Management Documentation in Citizen Science Projects: Bringing Formalisation and Transparency Together”, Citizen Science: Theory and Practice, 8(1), 25, 2023. DOI: https://doi.org/10.5334/cstp.53"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              title="Data Ethics in the Participatory Sciences Toolkit, Association for Advancing Participatory Sciences"
              short-description="Data Ethics in the Participatory Sciences Toolkit"
              url="https://participatorysciences.org/resources/data-ethics/"
              citation="Data Ethics in the Participatory Sciences Toolkit, Association for Advancing Participatory Sciences"
            ></ToolkitReference>
          </li>
        </ul>
        <div class="text-center my-4 text-4xl">
          <Button @click="scrollToSection('header')" class="z-50">
            <span class="pi pi-arrow-up" titl="Return to Top"></span>
          </Button>
        </div>
      </ToolkitSection>

      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :currentPhase="phase" text="Final Summary"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_data.svg"
    class="w-full h-32 object-cover object-left sm:h-auto sm:object-contain"
    alt="Data Management Phase Image"
  />
</template>

<style scoped></style>
