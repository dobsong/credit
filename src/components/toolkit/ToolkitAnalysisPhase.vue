<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
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
      <ToolkitHeading text="Analysis, Reporting & Evaluation Phase" class="w-full"></ToolkitHeading>
      <p class="w-full">
        Participants may play a role in collecting or analysing data for the project. Their views
        are also important for evaluating the project.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title><h1 class="font-black text-xl">Analysis</h1></template>
          <template #content>
            <p>Considerations for data analysis includes:</p>
            <ul class="list-disc pl-6">
              <li>Data Quality and Processing</li>
              <li>Data Visualisation</li>
              <li>Data Interpretation</li>
              <li>Quantitative and Qualitative data</li>
              <li>Community involvement</li>
            </ul>
            <p class="mt-8">
              <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - space to
              write
            </p>
          </template>
        </Card>
        <Card>
          <template #title><h1 class="font-black text-xl">Reporting</h1></template>
          <template #content>
            <p>
              You will likely have different audiences to report back to, for example: the project
              participants, funders, academics, and other project partners. Additionally, you may
              look to report to policy makers and through the press or social media. For each
              audience type you will need to consider what information you are sharing and what
              format it is in to make it accessible. Information collected for reporting includes,
              data sets (such as interview data or raw scientific data), the project outcomes
              (intended and unintended), publications (e.g., academic journal articles and
              conference presentations, and recommendations), and project artifacts (such as
              software and algorithms).
            </p>
          </template>
        </Card>
        <Card>
          <template #title><h1 class="font-black text-xl">Data Sharing</h1></template>
          <template #content>
            <p>
              Data is an important part of a project’s legacy and needs to be archived along with
              suitable Metadata. Data sets may be published as supporting information for a
              publication, made available via a website, or stored in a repository. There are open
              access and ethical considerations around data collected from participatory methods. It
              is important to consider the type of data in the data sets; is it suitable for an open
              access repository? If it cannot be fully anonymised, then consideration is needed on
              how the data is archived and approaches for sharing. (Note: this needs to be
              considered both in your ethics plan and data management plan).
            </p>
            <p>
              <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - case study
              link...
            </p>
            <p>
              <ToolkitReference
                authors="Özgün Ünver and Julie Jordens"
                title="Understanding Data Repositories: A Beginners' Guide for Researchers & Data Stewards"
                short-description="Understanding Data Repositories: A Beginners' Guide for Researchers & Data Stewards"
                :year="2022"
                url="https://zenodo.org/records/7258306"
                citation="Özgün Ünver and Julie Jordens. 2022. Understanding Data Repositories: A Beginners' Guide for Researchers & Data Stewards. Zenodo. https://doi.org/10.5281/zenodo.7258306"
              ></ToolkitReference>
              <ToolkitReference
                authors="Özgün Ünver"
                title="Understanding Metadata: A Beginners' Guide for Researchers & Data Stewards"
                short-description="Understanding Metadata: A Beginners' Guide for Researchers & Data Stewards"
                :year="2022"
                url="https://doi.org/10.5281/zenodo.7124032"
                citation="Özgün Ünver, “Understanding Metadata: A Beginners' Guide for Researchers & Data Stewards”, 2022. https://doi.org/10.5281/zenodo.7124032"
              ></ToolkitReference>
            </p>
            <RouterLink to="/proposal/phase/09">See also, the Data Management section</RouterLink>
          </template>
          <p>
            <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - space to
            write
          </p>
        </Card>
        <Card>
          <template #title><h1 class="font-black text-xl">Evaluation</h1></template>
          <template #content>
            <h1 class="font-bold">Formative</h1>
            <p>
              Taking place during the preparation or live phases, formative evaluation may inform or
              lead to a change of approach for your project. This can improve the engagement with
              participants, the quality of the data obtained, and may (re)direct the project aims to
              be more meaningful for the community.
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Can be applied to individual or collections of activities.</li>
            </ul>
            <h1 class="font-bold">Summative</h1>
            <p>
              Taking place at the end of the project (or stage of the project, e.g., yearly if a
              multi-year project), summative evaluation reviews both the processes and outcomes.
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>May evaluate against a set of metrics and indicators.</li>
              <li>Review the subsequent actions taken by stakeholders.</li>
            </ul>
            <p>
              Further training on Evaluation can be found in the
              <a
                href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/research-integrity-ethical-research-and-research-impact-training/"
                target="_blank"
                >Research Impact training</a
              >
            </p>
            <h1 class="font-bold">Evaluation Methods</h1>
            <ul class="list-disc pl-6 mb-4">
              <li>
                <ToolkitReference
                  authors="Elisavet Christou, Violet Owen & Pınar Ceyhan"
                  url="https://creativeevaluation.uk/home"
                  short-description="The Little Book of Creative Evaluation"
                  title="The Little Book of Creative Evaluation"
                  citation="Elisavet Christou, Violet Owen & Pınar Ceyhan, “The Little Book of Creative Evaluation”, Imagination Lancaster, Lancaster University, The Little Book of Creative Evaluation"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Wellcome"
                  url="https://wellcome.org/what-we-do/our-work/research-culture/hosting-your-cafe-culture-discussion"
                  short-description="Hosting your Café Culture discussion"
                  title="Hosting your Café Culture discussion | Research Culture | Wellcome"
                  citation="Café Culture toolkit, Wellcome, Hosting your Café Culture discussion | Research Culture | Wellcome, https://wellcome.org/what-we-do/our-work/research-culture/hosting-your-cafe-culture-discussion"
                ></ToolkitReference>
              </li>
            </ul>
            <h1 class="font-bold">Resources for measuring outcomes, impact and evaluating</h1>
            <ul class="list-disc pl-6 mb-4">
              <li>
                <ToolkitReference
                  authors="The MICS project"
                  url="https://www.birds.cornell.edu/citizenscience/measuring-outcomes/"
                  short-description="MICS: Measuring the impact of citizen science"
                  title="MICS: Measuring the impact of citizen science"
                  citation="“MICS: Measuring the impact of citizen science”, The MICS project, MICS.tools “Tools for Measuring Outcomes and Evaluating Citizen Science”, Cornell University, Measuring Outcomes : Citizen Science, https://www.birds.cornell.edu/citizenscience/measuring-outcomes/"
                ></ToolkitReference>
              </li>
            </ul>
            <h1 class="font-bold">Further Resources</h1>
            <ul class="list-disc pl-6 mb-4">
              <li>
                <ToolkitReference
                  authors="University of Illinois Urbana-Champagne"
                  url="https://guides.library.illinois.edu/citizen-science/evaluation"
                  short-description="Evaluating participatory science data"
                  title="Evaluating participatory science data - LibGuides at University of Illinois at Urbana-Champaign"
                  citation="https://guides.library.illinois.edu/citizen-science/evaluation"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Barbara Kieslingerm"
                  url="https://ecsa.citizen-science.net/wp-content/uploads/2020/03/2017_bki_evaluation_cs.pdf"
                  short-description="Evaluation and impact assessment of Citizen Science: what’s the value for projects and for research funding policies?"
                  title="Evaluation and impact assessment of Citizen Science: what’s the value for projects and for research funding policies?"
                  citation="Barbara Kieslingerm, “Evaluation and impact assessment of Citizen Science: what’s the value for projects and for research funding policies?”, Centre for Social Innovation – ZSI, https://ecsa.citizen-science.net/wp-content/uploads/2020/03/2017_bki_evaluation_cs.pdf"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Andrew Sier and Hilary Geoghegan"
                  url="https://ukeof.org.uk/our-work/citizen-science/cswg-outputs/cit-sci-evaluation-video"
                  short-description="Evaluating a citizen science project"
                  title="Evaluating a citizen science project"
                  citation="Andrew Sier (UKCEH) and Hilary Geoghegan (University of Reading), “Evaluating a citizen science project”, Video, UKEOF, Evaluating a citizen science project | UKEOF"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Schaefer, T., Kieslinger, B., Brandt, M., van den Bogaert, V"
                  url="https://link.springer.com/chapter/10.1007/978-3-030-58278-4_25"
                  short-description="Evaluation in Citizen Science: The Art of Tracing a Moving Target"
                  title="Evaluation in Citizen Science: The Art of Tracing a Moving Target"
                  :year="2021"
                  citation="Schaefer, T., Kieslinger, B., Brandt, M., van den Bogaert, V. (2021). Evaluation in Citizen Science: The Art of Tracing a Moving Target. In: Vohland, K., et al. The Science of Citizen Science. Springer, Cham. https://doi.org/10.1007/978-3-030-58278-4_25, Evaluation in Citizen Science: The Art of Tracing a Moving Target | SpringerLink"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Barbara Kieslinger, Teresa Schäfer, Florian Heigl, Daniel Dörler, Anett Richter, and Aletta Bonn"
                  url="https://eu-citizen.science/resource/85"
                  short-description="The Challenge of Evaluation: An Open Framework for Evaluating Citizen Science Activities"
                  title="The Challenge of Evaluation: An Open Framework for Evaluating Citizen Science Activities"
                  :year="2017"
                  citation="Barbara Kieslinger, Teresa Schäfer, Florian Heigl, Daniel Dörler, Anett Richter, and Aletta Bonn. “The Challenge of Evaluation: An Open Framework for Evaluating Citizen Science Activities”, 2017. https://doi.org/10.17605/OSF.IO/ENZC9. European Citizen Science Platform :: Citizen Science Evaluation Framework"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  url="https://www.publicengagement.ac.uk/evaluation"
                  short-description="“Evaluation”, National Co-ordinating Centre for Public Engagement, Evaluation | NCCPE"
                  title="“Evaluation”, National Co-ordinating Centre for Public Engagement, Evaluation | NCCPE"
                  :year="2017"
                  citation="“Evaluation”, National Co-ordinating Centre for Public Engagement, Evaluation | NCCPE"
                ></ToolkitReference>
              </li>
            </ul>
            <p>
              <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - space to
              write
            </p>
          </template>
        </Card>
      </div>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="8" text="Legacy and Impact"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_analysis.svg"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
    alt="Analysis Phase Image"
  />
</template>

<style scoped></style>
