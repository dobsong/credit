<script setup lang="ts">
import Button from '@/volt/Button.vue'
import { RouterLink } from 'vue-router'
import ToolkitHeading from './ui/ToolkitHeading.vue'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="landing-main" class="w-full container mx-auto px-2 md:px-8">
    <section id="intro">
      <div class="text-base md:text-xl lg:mt-16 mb-8">
        <div class="grid grid-cols-3">
          <div class="col-span-3 md:col-span-2 md:px-4 lg:px-16 my-auto lg:pb-24">
            <ToolkitHeading text="Welcome To CREDIT" class="py-4"></ToolkitHeading>
            <p>
              <b>CREDIT</b> (<b>C</b>ommunity <b>RE</b>search <b>DI</b>gital <b>T</b>oolkit) is
              designed to provide information and inspiration for researchers aiming to involve and
              engage communities in their research.
            </p>
            <p>To start at the beginning use the “develop a proposal” button below.</p>
            <p>
              Looking for inspiration? The tabs at the top of the page can be used to navigate to
              Lancaster University <RouterLink to="case-studies">case studies</RouterLink> used in
              the toolkit.
            </p>
            <div
              class="lg:float-right bg-amber-200 text-gray-900 w-64 rounded-xl drop-shadow-xl drop-shadow-slate-500 dark:drop-shadow-gray-950 text-center mx-auto my-4"
            >
              <span class="pi pi-exclamation-circle float-right p-2"></span>
              <h3 class="font-bold pt-4">Beta Version</h3>
              <p class="px-4 pb-8 pt-4">
                Thanks for taking a look at the beta version. We're still working on completing the
                toolkit. We'd love
                <a href="https://forms.office.com/e/xrv5N2XtvA" target="_blank">
                  to hear your thoughts </a
                >.
              </p>
            </div>
            <div class="text-center md:mt-8 mb-4 text-sm lg:text-lg">
              <RouterLink v-slot="{ navigate }" to="/proposal/phase/01" class="mr-1 md:mr-4">
                <Button @click="navigate"
                  >Develop a Proposal <span class="pi pi-arrow-right"></span
                ></Button>
              </RouterLink>
              <Button @click="scrollToSection('more')" outlined> Tell me More... </Button>
            </div>
          </div>
          <div class="col-span-3 md:col-span-1 w-full my-auto">
            <img
              src="@/assets/community.jpg"
              alt="A group of people placing hands on a tree trunk."
              class="rounded-2xl object-none md:object-cover w-full h-70 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="more">
      <div class="text-base md:text-xl lg:mt-16">
        <div class="grid grid-cols-1">
          <ToolkitHeading text="What Is CREDIT?"></ToolkitHeading>
          <p class="md:px-4">
            When embarking on a research project involving participation from members of the public
            there are many opportunities and challenges to consider. The extent of participation in
            this type of research varies, and can involve crowd sourcing transcriptions, data
            collection, data analysis, or co-design, among other engagement. Opportunities for
            participants to engage with the research after the initial interaction lengthens the
            impact and legacy. This toolkit resource has been designed to help guide researchers
            through some of the considerations to undertake this type of research. Whether you have
            carried out participatory research previously or are new to the methodology,
            <b>
              this toolkit provides the opportunities to reflect on your context and develop a
              research proposal
            </b>
            .
          </p>
        </div>
      </div>
    </section>

    <section id="community-research">
      <div class="text-base md:text-xl lg:mt-16">
        <div class="grid grid-cols-1">
          <ToolkitHeading text="Community Research"></ToolkitHeading>
          <p class="md:px-4">
            This toolkit has been designed to support research that might come under headings such
            as citizen science (<a href="https://www.ecsa.ngo/" target="_blank"
              >European Citizen Science Association (ECSA)</a
            >), participatory sciences (<a href="https://participatorysciences.org/" target="_blank"
              >AAPS - Association for Advancing Participatory Sciences</a
            >), or people-powered research (<a href="https://www.zooniverse.org/" target="_blank"
              >Zooniverse</a
            >). We are using Community Research as an encompassing term for the resource title,
            whilst noting it is challenging to select a term that defines the full scope of the
            methodologies. This toolkit does not cover research where members of the public are
            solely subjects of the research question.
          </p>
          <div class="text-center mt-8 text-4xl">
            <Button @click="scrollToSection('header')" class="z-50">
              <span class="pi pi-arrow-up" titl="Return to Top"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div id="landing-footer" class="relative w-full pt-4 sm:pt-0 lg:-mt-6">
    <img src="../assets/characters_blue_bg.svg" alt="Background characters" class="h-auto" />
  </div>
</template>

<style scoped></style>
