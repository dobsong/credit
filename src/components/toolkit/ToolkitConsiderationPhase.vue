<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '../../volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Decision making: Is it the right approach?</h1>
          </template>
          <template #content>
            <CharacterConsideration class="float-right size-32 sm:size-40" />
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
        <Card>
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
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Suggested Reading List</h1>
          </template>
          <template #content
            ><ul>
              <li>
                <ToolkitReference
                  short-description="How to ethically share power with public research partners"
                  title="How to ethically share power with public research partners: AKA keeping blobs blobby"
                  citation="British Science Association"
                  url="https://www.britishscienceassociation.org/essay-6-lde-how-to-ethically-share-power"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  authors="Shaw, H., Brown, O., Hinds, J., Nightingale, S.J., Towse., J, Ellis, D.A."
                  :year="2025"
                  title="The DECIDE Framework: Describing Ethical Choices in Digital-Behavioral-Data Explorations"
                  citation="Shaw, H., Brown, O., Hinds, J., Nightingale, S.J., Towse., J, Ellis, D.A. (2025) The DECIDE Framework: Describing Ethical Choices in Digital-Behavioral-Data Explorations. Advances in Methods and Practices in Psychological Science. 8(3). doi:10.1177/25152459251361013"
                  url="https://journals.sagepub.com/doi/10.1177/25152459251361013"
                ></ToolkitReference>
              </li>
              <li>
                <ToolkitReference
                  short-description="Valuing Voices Tool"
                  title="Valuing Voices Tool"
                  citation="Valuing Voices Project. University of York, Mahidol University with funding from Wellcome."
                  url="https://valuing-voices.ac.uk/"
                ></ToolkitReference>
              </li>
            </ul>
          </template>
        </Card>
      </div>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="4" text="Preparation"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_consideration.svg"
    alt="Consideration Phase Image"
    class="w-full h-32 object-cover object-right sm:h-auto sm:object-contain"
  />
</template>

<style scoped></style>
