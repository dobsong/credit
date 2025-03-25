<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mx-auto px-6 flex relative py-8 md:py-16">
    <div class="w-full sm:w-3/5 flex flex-col relative">
      <h1 class="uppercase text-3xl md:text-6xl font-[MuseoSans] flex flex-col mb-4">
        Community Research Toolkit
      </h1>
      <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-8"> </span>
      <p>
        When embarking on a research project involving participation from members of the public
        there are many opportunities and challenges to consider. The extent of participation in this
        type of research varies, and can involve crowd sourcing transcriptions, data collection,
        data analysis, or co-design, among other engagement. Opportunities for participants to
        engage with the research after the initial interaction lengthens the impact and legacy. This
        toolkit resource has been designed to help guide researchers through some of the
        considerations to undertake this type of research. Whether you have carried out
        participatory research previously or are new to the methodology, this toolkit provides the
        opportunities to reflect on your context and develop a research proposal.
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
        Looking for inspiration? The tabs at the top of the page can be used to navigate to
        Lancaster University case studies used in the toolkit.
      </p>
      <div class="flex mt-8 justify-center sm:justify-start">
        <RouterLink
          to="/proposal/phase/01"
          class="uppercase py-2 px-4 rounded-lg bg-highlight border-2 border-transparent text-white dark:text-gray-800 text-md hover:bg-highlight-hover"
        >
          Develop a Proposal
        </RouterLink>
      </div>
    </div>
    <div class="hidden sm:block">
      <img
        src="https://unsplash.it/400/400"
        class="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg my-auto mx-6"
      />
    </div>
  </div>
</template>

<style scoped></style>
