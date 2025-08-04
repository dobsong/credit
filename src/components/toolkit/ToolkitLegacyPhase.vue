<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Legacy and Impact Phase" class="w-full"></ToolkitHeading>
      <p>
        As well as data and data analysis for academic study, there are impacts for the
        participants, and community. The project may also lead to unexpected outputs. What is the
        long-term timeframe for the study? Are there plans to revisit the project (e.g., annually),
        and what funding implications does this have? Or are there project outputs for academic or
        community use?
      </p>
      <p>TODO - Case Study, DARE</p>
      <Card>
        <template #title>
          <h1 class="font-black text-xl">Case studies and literature</h1>
        </template>
        <template #content>
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
        </template>
      </Card>
      <Card>
        <template #title>
          <h1 class="font-black text-xl">Legacy and Impact Parteners and Platforms</h1>
        </template>
        <template #content>
          <ul class="list-disc pl-6 mb-4">
            <li>Libraries (public and research)</li>
            <li>Museums and attractions (free and pay for entry)</li>
            <li>Education platforms (e.g., STEM Learning, Teaching resources - Tes)</li>
          </ul>
        </template>
      </Card>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="9" text="Data Management"></ToolkitNextButton>
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
