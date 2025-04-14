<script setup lang="ts">
import Button from '@/volt/Button.vue'
import { RouterLink } from 'vue-router'
import CrestHeading from './ui/CrestHeading.vue'
</script>

<template>
  <div class="w-full sm:w-3/5 flex flex-col relative">
    <CrestHeading text="Community Research Toolkit"></CrestHeading>
    <p>
      When embarking on a research project involving participation from members of the public there
      are many opportunities and challenges to consider. The extent of participation in this type of
      research varies, and can involve crowd sourcing transcriptions, data collection, data
      analysis, or co-design, among other engagement. Opportunities for participants to engage with
      the research after the initial interaction lengthens the impact and legacy. This toolkit
      resource has been designed to help guide researchers through some of the considerations to
      undertake this type of research. Whether you have carried out participatory research
      previously or are new to the methodology, this toolkit provides the opportunities to reflect
      on your context and develop a research proposal.
    </p>
    <p>
      This toolkit has been designed to support research that might come under headings such as
      citizen science (<a href="https://www.ecsa.ngo/" target="_blank"
        >European Citizen Science Association (ECSA)</a
      >), participatory sciences (<a href="https://participatorysciences.org/" target="_blank"
        >AAPS - Association for Advancing Participatory Sciences</a
      >), or people-powered research (<a href="https://www.zooniverse.org/" target="_blank"
        >Zooniverse</a
      >). We are using Community Research as an encompassing term for the resource title, whilst
      noting it is challenging to select a term that defines the full scope of the methodologies.
      This toolkit does not cover research where members of the public are solely subjects of the
      research question.
    </p>
    <p>Ready to begin? To start at the beginning use the “develop a proposal” button below.</p>
    <p>
      Looking for inspiration? The tabs at the top of the page can be used to navigate to Lancaster
      University case studies used in the toolkit.
    </p>
    <div class="flex mt-4 justify-center sm:justify-start">
      <RouterLink v-slot="{ navigate }" to="/proposal/phase/01" custom>
        <Button @click="navigate">Develop a Proposal</Button>
      </RouterLink>
    </div>
  </div>
  <div class="hidden sm:block">
    <img
      src="../assets/community.jpg"
      alt="A placeholder image"
      class="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg my-auto mx-6"
    />
  </div>
</template>

<style scoped></style>
