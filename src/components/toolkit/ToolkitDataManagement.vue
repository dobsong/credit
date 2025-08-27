<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '@/volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitPhaseNavigation from '../ui/ToolkitPhaseNavigation.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()

const phase = 7
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitPhaseNavigation :phase="phase"></ToolkitPhaseNavigation>
      <ToolkitHeading text="Data Management" class="w-full"></ToolkitHeading>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #content>
            <p>
              Any project that produces data, has responsibilities in how that data is collected,
              stored, and used.
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>
                How accessible will the final data set be? Will participants and other researchers
                be able to access and use the data?
              </li>
              <li>Is any of the data you collected sensitive data?</li>
              <li>
                Are you GDPR compliant? If working in another overseas what are the data rules?
              </li>
            </ul>
          </template>
        </Card>
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Data Management Plan</h1>
          </template>
          <template #content>
            <p>
              A Data Management Plan encourages consideration before the project starts and for
              participatory project may link to the project Ethics plan. The
              <a
                href="https://portal.lancaster.ac.uk/ask/download?document=/media/ask/ask-assets/documents/study/2025LancasterUniversityDataManagementTemplate.docx"
                target="_blank"
                >LU Data Management Plan Template 2025</a
              >
              is suitable for use where there are no funder requirements
            </p>
          </template>
        </Card>
        <Card class="md:col-span-2">
          <template #title>
            <h1 class="font-black text-xl">Case Study</h1>
          </template>
          <template #content>
            <p>
              <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - [case
              study links - Windermere, Davy Notebooks]
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
        <Card class="w-full">
          <template #title>
            <h1 class="font-black text-xl">Key Considerations</h1>
          </template>
          <template #content>
            <p>There are 7 key areas of data management to consider:</p>
            <ol class="list-disc pl-6 mb-4">
              <li>Data Collection</li>
              <li>Documentation and Metadata</li>
              <li>Storage, Backup and Security</li>
              <li>Ethics and Legal Compliance</li>
              <li>Data Selection and Preservation</li>
              <li>Data Sharing and Archiving</li>
              <li>Responsibilities and Resources</li>
            </ol>
          </template>
        </Card>
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Training and Further Resources</h1>
          </template>
          <template #content>
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
                  title="DMPonline"
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
          </template>
        </Card>
      </div>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :currentPhase="phase" text="Final Summary"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_data.svg"
    class="w-full h-32 object-cover object-left sm:h-auto sm:object-contain"
    alt="Legacy Phase Image"
  />
</template>

<style scoped></style>
