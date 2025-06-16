<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '../../volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import CharacterConsideration from './characters/CharacterConsideration.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Consideration Phase"></ToolkitHeading>
      <p>
        Before embarking on designing a participatory research or citizen science project it is
        first important to consider whether it is an appropriate approach. Then the context of the
        project can be defined and developed.
      </p>
      <Card class="w-1/2">
        <template #title>
          <h1 class="font-black text-xl">Decision making: Is it the right approach?</h1>
        </template>
        <template #content>
          <CharacterConsideration class="float-right" />
          <p>
            The “<a
              href="https://www.ceh.ac.uk/sites/default/files/sepa_choosingandusingcitizenscience_interactive_4web_final_amended-blue1.pdf"
              target="_blank"
              >Choosing and Using Citizen Science</a
            >” resource from the UK Centre for Ecology and Hydrology contains a decision framework
            that you can use to assist with consideration of this question. It may also help to
            review the experiences of others, by examining the literature, and by networking with
            those who have done similar work to your own context.
          </p>
        </template>
      </Card>
      <Card class="w-1/2">
        <template #title>
          <h1 class="font-black text-xl">Ethics</h1>
        </template>
        <template #content>
          <p>
            In this phase it is important to start thinking about the Ethics associated with the
            project as you have human participants. You will need to identify the ethics approval
            process and advisors for your discipline. At Lancaster University
            <a
              href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/research-integrity-ethical-research-and-research-impact-training/"
              >Ethics training</a
            >
            is available, and guidance is available on the
            <a
              href="https://www.lancaster.ac.uk/research/research-services/research-integrity-ethics--governance/"
              target="_blank"
              >research ethics webpage</a
            >.
          </p>
        </template>
      </Card>
      <p class="mt-4">
        <ToolkitNextButton :phase="4" text="Preparation"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_consideration.svg"
    class="w-full h-auto"
    alt="Consideration Phase Image"
  />
</template>

<style scoped></style>
