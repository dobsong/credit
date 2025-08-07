<script setup lang="ts">
import Button from '@/volt/Button.vue'
import { Motion } from 'motion-v'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="container mx-auto px-4 flex flex-col">
    <ToolkitHeading text="Analysis, Reporting & Evaluation Phase" class="w-full" />
    <p class="text-base md:text-xl">
      Participants may play a role in collecting or analysing data for the project. Their views are
      also important for evaluating the project.
    </p>
    <!-- Analysis Section -->
    <Motion
      :initial="{ x: -300, opacity: 0 }"
      :animate="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } }"
      :visible="true"
      :once="true"
      class="w-full"
    >
      <section id="analysis" class="flex items-center justify-center">
        <div class="bg-amber-200 dark:bg-slate-950 w-full h-full p-6 rounded-2xl mb-8">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div class="flex flex-wrap w-full md:w-1/3">
              <h2
                class="md:w-full font-[MuseoSans] font-extrabold mb-1 md:mb-4 text-center dark:text-[var(--color-analysis)]"
              >
                <span class="text-6xl md:text-7xl lg:text-9xl align-middle">A</span>
                <span class="text-3xl md:text-4xl lg:text-6xl align-middle">nalysis</span>
              </h2>
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
              <Button @click="scrollToSection('reporting')">Next: Reporting</Button>
            </div>
            <div class="w-full md:w-1/3 mb-auto text-center">
              <img
                src="@/assets/analysis3.jpg"
                class="hidden md:inline-block max-h-[60svh] rounded-2xl"
                alt="Analysis image"
              />
            </div>
          </div>
        </div>
      </section>
    </Motion>

    <!-- Reporting Section -->
    <Motion
      :initial="{ x: 300, opacity: 0 }"
      :animate="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } }"
      :visible="true"
      :once="true"
      class="w-full"
    >
      <section id="reporting" class="flex items-center justify-center">
        <div class="bg-[var(--color-analysis)] dark:bg-cyan-900 md:w-5/6 p-6 rounded-2xl mb-8">
          <div class="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
            <div class="my-auto w-2/3 lg:w-1/2 p-4 md:p-8">
              <p class="mb-1 md:mb-4 text-lg md:text-xl">
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
              <Button @click="scrollToSection('datasharing')">Next: Data Sharing</Button>
            </div>
            <div class="w-1/3 lg:w-1/2 text-center md:pb-8">
              <h2 class="md:w-full font-[MuseoSans] font-extrabold md:mb-6 text-center">
                <span class="text-6xl lg:text-9xl align-middle">R</span>
                <span class="text-3xl lg:text-6xl align-middle">eporting</span>
              </h2>
              <img
                src="@/assets/report3.jpg"
                class="hidden md:inline-block lg:max-w-2/3 rounded-2xl"
                alt="Analysis image"
              />
            </div>
          </div>
        </div>
      </section>
    </Motion>

    <!-- Data Sharing Section -->
    <Motion
      :initial="{ x: -300, opacity: 0 }"
      :animate="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } }"
      :visible="true"
      :once="true"
      class="w-full"
    >
      <section id="datasharing" class="flex items-center justify-center">
        <div class="bg-amber-200 dark:bg-slate-950 w-full p-6 rounded-2xl mb-1">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div class="md:w-1/2 text-center md:pb-8">
              <h2
                class="md:w-full font-[MuseoSans] font-extrabold md:mb-6 text-center dark:text-[var(--color-analysis)]"
              >
                <span class="text-6xl md:text-9xl align-middle">D</span>
                <span class="text-3xl md:text-6xl align-middle">ata </span>
                <span class="text-6xl md:text-9xl align-middle">S</span>
                <span class="text-3xl md:text-6xl align-middle">haring</span>
              </h2>
            </div>
            <div class="my-auto md:w-1/2 p-4 lg:p-8">
              <p class="mb-1 md:mb-4 text-lg md:text-xl">
                Data is an important part of a project’s legacy and needs to be archived along with
                suitable Metadata. Data sets may be published as supporting information for a
                publication, made available via a website, or stored in a repository. There are open
                access and ethical considerations around data collected from participatory methods.
              </p>
              <ul class="list-disc pl-6 mb-8">
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
              <Button @click="scrollToSection('evaluation')">Next: Evaluation</Button>
            </div>
          </div>
        </div>
      </section>
    </Motion>

    <!-- Evaluation Section -->
    <Motion
      :initial="{ x: 300, opacity: 0 }"
      :animate="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 22 } }"
      :visible="true"
      :once="true"
      class="w-full"
    >
      <section id="evaluation" class="flex items-center justify-center py-8">
        <div class="bg-[var(--color-analysis)] dark:bg-cyan-900 md:w-5/6 p-6 rounded-2xl">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div class="my-auto md:w-2/3 p-4 md:p-8 text-lg md:text-xl">
              <h2
                class="md:w-full font-[MuseoSans] font-extrabold mb-6 text-center text-slate-800 dark:text-slate-200"
              >
                <span class="text-6xl md:text-9xl align-middle">E</span>
                <span class="text-3xl md:text-6xl align-middle">valuation</span>
              </h2>
              <h3 class="font-bold mb-2">Formative</h3>
              <p>
                Taking place during the preparation or live phases, formative evaluation may inform
                or lead to a change of approach for your project. This can improve the engagement
                with participants, the quality of the data obtained, and may (re)direct the project
                aims to be more meaningful for the community.
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
                Further training on Evaluation can be found in the
                <a
                  href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/research-integrity-ethical-research-and-research-impact-training/"
                  target="_blank"
                  >Research Impact training</a
                >
              </p>
            </div>
            <div class="w-1/3 pb-8">
              <img
                src="@/assets/evaluation.jpg"
                class="hidden md:inline-block rounded-2xl"
                alt="Analysis image"
              />
            </div>
          </div>
        </div>
      </section>
    </Motion>
    <p class="w-full text-right">
      <ToolkitNextButton :phase="8" text="Legacy and Impact" />
    </p>
  </div>
  <img
    src="@/assets/ribbon_analysis.svg"
    alt="Consideration Phase Image"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
  />
</template>
