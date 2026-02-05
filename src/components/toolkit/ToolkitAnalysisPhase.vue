<script setup lang="ts">
import Button from '@/volt/Button.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitPhaseNavigation from '../ui/ToolkitPhaseNavigation.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
import ToolkitSection from '../ui/ToolkitSection.vue'

const phase = 5

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="container mx-auto px-2 flex flex-col">
    <ToolkitPhaseNavigation :phase="phase" />

    <ToolkitSection section-id="intro" :slide-in-direction="1">
      <div class="grid grid-cols-1 lg:min-h-[65svh]">
        <div class="lg:mt-auto">
          <ToolkitHeading text="Analysis, Reporting & Evaluation" class="mx-auto"></ToolkitHeading>
        </div>
        <div class="my-auto lg:mb-auto lg:mt-0 lg:w-4/5 mx-auto">
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            Before embarking on designing a participatory research or citizen science project it is
            first important to consider whether it is an appropriate approach. Then the context of
            the project can be defined and developed.
          </p>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('analysis')" class="text-sm md:text-base">
              Next: Analysis
            </Button>
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="analysis" :slide-in-direction="-1">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div class="flex flex-wrap w-full md:w-1/3">
          <ToolkitHeading text="Analysis" class="mx-auto"></ToolkitHeading>
          <img
            src="@/assets/character_analysis.svg"
            class="h-[10svh] md:h-[15svh] lg:h-[30svh] md:w-full ml-auto"
            alt="Analysis image"
          />
        </div>
        <div class="my-auto w-full md:w-1/3">
          <p class="mb-1 md:mb-4 text-lg md:text-2xl lg:text-3xl font-bold">
            Considerations for data analysis include:
          </p>
          <ul class="list-disc pl-6 mb-8 text-lg md:text-xl">
            <li>Data Quality and Processing</li>
            <li>Data Visualisation</li>
            <li>Data Interpretation</li>
            <li>Quantitative and Qualitative data</li>
            <li>Community involvement</li>
          </ul>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('reporting')" class="text-sm md:text-base"
              >Next: Reporting</Button
            >
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-auto text-center">
          <img
            src="@/assets/analysis3.jpg"
            class="hidden md:inline-block max-h-[60svh] rounded-2xl"
            alt="A Person looking at graphs on a computer screen"
          />
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="reporting" :slide-in-direction="1">
      <div class="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
        <div class="my-auto w-full lg:w-1/2 md:p-8">
          <p class="mb-1 md:mb-4 text-lg md:text-xl">
            You will likely have different audiences to report back to, for example: the project
            participants, funders, academics, and other project partners. Additionally, you may look
            to report to policy makers and through the press or social media. For each audience type
            you will need to consider what information you are sharing and what format it is in to
            make it accessible. Information collected for reporting includes, data sets (such as
            interview data or raw scientific data), the project outcomes (intended and unintended),
            publications (e.g., academic journal articles and conference presentations, and
            recommendations), and project artifacts (such as software and algorithms).
          </p>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('data-sharing')" class="text-sm md:text-base"
              >Next: Data Sharing</Button
            >
          </div>
        </div>
        <div class="w-full lg:w-1/2 text-center md:pb-8">
          <ToolkitHeading text="Reporting" class="mx-auto"></ToolkitHeading>
          <img
            src="@/assets/report3.jpg"
            class="hidden md:inline-block lg:max-w-2/3 rounded-2xl"
            alt="A Person Writing"
          />
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="data-sharing" :slide-in-direction="-1">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div class="md:w-1/2 text-center md:pb-8">
          <ToolkitHeading text="Data Sharing" class="mx-auto"></ToolkitHeading>
        </div>
        <div class="my-auto md:w-1/2 lg:p-8">
          <p class="mb-1 md:mb-4 text-lg md:text-xl">
            Data is an important part of a project’s legacy and needs to be archived along with
            suitable Metadata. Data sets may be published as supporting information for a
            publication, made available via a website, or stored in a repository. There are open
            access and ethical considerations around data collected from participatory methods.
          </p>
          <ul class="list-disc pl-6 mb-8 text-lg md:text-xl">
            <li>
              <ToolkitReference
                authors="Özgün Ünver and Julie Jordens"
                title="Understanding Data Repositories: A Beginners' Guide for Researchers & Data Stewards"
                url="https://zenodo.org/records/7258306"
                citation="Özgün Ünver and Julie Jordens. 2022. Understanding Data Repositories: A Beginners' Guide for Researchers & Data Stewards. Zenodo. https://doi.org/10.5281/zenodo.7258306"
              />
            </li>
            <li>
              <ToolkitReference
                authors="Özgün Ünver"
                title="Understanding Metadata: A Beginners' Guide for Researchers & Data Stewards"
                url="https://doi.org/10.5281/zenodo.7124032"
                citation="Özgün Ünver, “Understanding Metadata: A Beginners' Guide for Researchers & Data Stewards”, 2022. https://doi.org/10.5281/zenodo.7124032"
              />
            </li>
          </ul>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('evaluation')" class="text-sm md:text-base"
              >Next: Evaluation</Button
            >
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="evaluation" :slide-in-direction="1">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
          <ToolkitHeading text="Evaluation" class="mx-auto"></ToolkitHeading>
          <h3 class="font-bold mb-2">Formative</h3>
          <p>
            Taking place during the preparation or live phases, formative evaluation may inform or
            lead to a change of approach for your project. This can improve the engagement with
            participants, the quality of the data obtained, and may (re)direct the project aims to
            be more meaningful for the community.
          </p>
          <ul class="list-disc pl-6 mb-8">
            <li>Can be applied to individual or collections of activities.</li>
          </ul>
          <h3 class="font-bold mb-2">Summative</h3>
          <p>
            Taking place at the end of the project (or stage of the project, e.g., yearly if a
            multi-year project), summative evaluation reviews both the processes and outcomes.
          </p>
          <ul class="list-disc pl-6 mb-8">
            <li>May evaluate against a set of metrics and indicators.</li>
            <li>Review the subsequent actions taken by stakeholders.</li>
          </ul>
          <p>
            For researchers at Lancaster University, further training on Evaluation can be found in
            the
            <a
              href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/research-integrity-ethical-research-and-research-impact-training/"
              target="_blank"
              >Research Impact training</a
            >
          </p>
          <h3 class="font-bold mb-2">Resources for Evaluation methods</h3>
          <ul class="list-disc pl-6 mb-8">
            <li>
              <ToolkitReference
                title="The Little Book of Creative Evaluation, Imagination Lancaster"
                authors="Elisavet Christou, Violet Owen & Pınar Ceyhan"
                citation="Elisavet Christou, Violet Owen & Pınar Ceyhan, “The Little Book of Creative Evaluation”, Imagination Lancaster, Lancaster University"
                url="https://creativeevaluation.uk/home"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="Hosting your Café Culture discussion, Wellcome"
                citation="Café Culture toolkit, Wellcome, Hosting your Café Culture discussion | Research Culture | Wellcome"
                url="https://wellcome.org/what-we-do/our-work/research-culture/hosting-your-cafe-culture-discussion"
              ></ToolkitReference>
            </li>
          </ul>
          <h3 class="font-bold mb-2">Resources for measuring outcomes, impact and evaluating</h3>
          <ul class="list-disc pl-6 mb-8">
            <li>
              <ToolkitReference
                title="MICS: Measuring the impact of citizen science, The MICS project"
                citation="“MICS: Measuring the impact of citizen science”, The MICS project"
                url="https://mics.tools/"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="Tools for Measuring Outcomes and Evaluating Citizen Science, Cornell University"
                citation="“Tools for Measuring Outcomes and Evaluating Citizen Science”, Cornell University, Measuring Outcomes : Citizen Science"
                url="https://www.birds.cornell.edu/citizenscience/measuring-outcomes/"
              ></ToolkitReference>
            </li>
          </ul>
          <h3 class="font-bold mb-2">Further Resources</h3>
          <ul class="list-disc pl-6 mb-8">
            <li>
              <ToolkitReference
                title="Citizen Science/Participatory Science, Evaluating participatory science data, LibGuides at University of Illinois at Urbana-Champaign"
                citation="Citizen Science/Participatory Science, Evaluating participatory science data, University of Illinois Urbana-Champaign, Evaluating Citizen Science - Citizen Science/Participatory Science - LibGuides at University of Illinois at Urbana-Champaign"
                url="https://guides.library.illinois.edu/citizen-science/evaluation"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="Evaluation and impact assessment of Citizen Science: what’s the value for projects and for research funding policies?"
                authors="Barbara Kieslingerm"
                citation="Barbara Kieslingerm, “Evaluation and impact assessment of Citizen Science: what’s the value for projects and for research funding policies?”, Centre for Social Innovation - ZSI."
                url="https://ecsa.citizen-science.net/wp-content/uploads/2020/03/2017_bki_evaluation_cs.pdf"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="Evaluating a citizen science project, Video, UKEOF"
                authors="Andrew Sier (UKCEH) and Hilary Geoghegan (University of Reading)"
                citation="Andrew Sier (UKCEH) and Hilary Geoghegan (University of Reading), “Evaluating a citizen science project”, Video, UKEOF"
                url="https://ukeof.org.uk/our-work/citizen-science/cswg-outputs/cit-sci-evaluation-video"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="Evaluation in Citizen Science: The Art of Tracing a Moving Target"
                authors="Schaefer, T., Kieslinger, B., Brandt, M., van den Bogaert, V"
                :year="2021"
                citation="Schaefer, T., Kieslinger, B., Brandt, M., van den Bogaert, V. (2021). Evaluation in Citizen Science: The Art of Tracing a Moving Target. In: Vohland, K., et al. The Science of Citizen Science. Springer, Cham. https://doi.org/10.1007/978-3-030-58278-4_25"
                url="https://link.springer.com/chapter/10.1007/978-3-030-58278-4_25"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="The Challenge of Evaluation: An Open Framework for Evaluating Citizen Science Activities"
                authors="Barbara Kieslinger, Teresa Schäfer, Florian Heigl, Daniel Dörler, Anett Richter, and Aletta Bonn"
                :year="2017"
                citation="Barbara Kieslinger, Teresa Schäfer, Florian Heigl, Daniel Dörler, Anett Richter, and Aletta Bonn. “The Challenge of Evaluation: An Open Framework for Evaluating Citizen Science Activities”, 2017. https://doi.org/10.17605/OSF.IO/ENZC9."
                url="https://eu-citizen.science/resource/85"
              ></ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                title="FailSpace resources to help you talk about and learn from failure, Centre for Cultural Value"
                citation="FailSpace resources to help you talk about and learn from failure, Centre for Cultural Value"
                url="https://www.culturalvalue.org.uk/our-work/failspace/"
              ></ToolkitReference>
            </li>
          </ul>
        </div>
        <div class="w-1/3 pb-8">
          <img
            src="@/assets/evaluation.jpg"
            class="hidden md:inline-block rounded-2xl"
            alt="People looking at a map"
          />
        </div>
      </div>
      <div class="text-center my-4 text-4xl">
        <Button @click="scrollToSection('header')" class="z-50">
          <span class="pi pi-arrow-up" titl="Return to Top"></span>
        </Button>
      </div>
    </ToolkitSection>

    <p class="w-full text-right">
      <ToolkitNextButton :currentPhase="phase" text="Legacy and Impact" />
    </p>
  </div>
  <img
    src="@/assets/ribbon_analysis.svg"
    alt="Analysis Phase Image"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
  />
</template>
