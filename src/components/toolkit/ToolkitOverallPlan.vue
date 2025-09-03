<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import type { DevelopmentSection } from '@/types/developmentSection'
import Accordion from '@/volt/Accordion.vue'
import AccordionHeader from '@/volt/AccordionHeader.vue'
import AccordionPanel from '@/volt/AccordionPanel.vue'
import Checkbox from '@/volt/Checkbox.vue'
import InputText from '@/volt/InputText.vue'
import Textarea from '@/volt/Textarea.vue'
import { storeToRefs } from 'pinia'
import { ref, watch, type Ref } from 'vue'
import AccordionContent from '../../volt/AccordionContent.vue'

const projectPlan = useProjectPlanStore()
const projectPlanRefs = storeToRefs(projectPlan)

const sections: Ref<DevelopmentSection[]> = ref([
  {
    id: 1,
    sectionName: 'Vision',
    references: [],
    links: [],
    notes: '',
    prompts: [],
    storeBinding: projectPlanRefs.vision,
    sectionText: ' Write a Headline statement for your project.',
  },
  {
    id: 2,
    sectionName: "Layman's summary",
    references: [],
    links: [],
    notes: '',
    prompts: [],
    storeBinding: projectPlanRefs.laymansSummary,
    sectionText:
      'Write a 250 word summary for a general audience. Important both for funding proposals and communicating to participants.',
  },
  {
    id: 3,
    sectionName: 'Analysis of Partnerships and Interested Parties',
    references: [],
    links: [],
    notes: '',
    prompts: [],
    sectionText:
      'Who are your academic partners and your community partners? What are their needs and interests?',
    storeBinding: projectPlanRefs.stakeholderAnalysis,
  },
  {
    id: 4,
    sectionName: 'Approach and methodology',
    references: [],
    links: [],
    notes: '',
    prompts: [
      'Consider both the aims of the project and how you will evaluate the project itself.',
      'Is there adaptability and flexibility for if something changes?',
      'During the course of your research, additional data may be collected which could lead to supplementary outputs.',
      'How will you test your method?',
    ],
    storeBinding: projectPlanRefs.approach,
    sectionText: 'What are your initial plans?',
  },
  {
    id: 5,
    sectionName: 'Data',
    references: [],
    links: [],
    notes: '',
    prompts: [],
    sectionText:
      'What type of data are you aiming to collect? Write some bullet points/initial thoughts prior to developing a Data Management Plan',
    storeBinding: projectPlanRefs.data,
  },
  {
    id: 6,
    sectionName: 'Ethics',
    references: [],
    links: [],
    notes: '',
    prompts: [
      'Does your project use surveys or interviews?',
      'Is technology being used to collect and analyse data (e.g., AI, digital devices)',
      'What GDPR considerations are there? What type of data is being collected?',
    ],
    sectionText:
      'How will people be involved in your research? Write some bullet points/initial thoughts prior to developing an Ethics plan',
    storeBinding: projectPlanRefs.ethics,
  },
  {
    id: 7,
    sectionName: 'Platform and Resources',
    references: [],
    links: [],
    notes: '',
    prompts: [
      'How many people do you need to participate? Is there a minimum for collecting statistically relevant data.',
      'What technology options are available, or can you create?',
      'How will you engage with your participants (advertising, ongoing through the project, sharing results)?',
      'How will participants know how to engage and what to do?',
      'What support materials do you need to create? (e.g., tutorials)',
      'What approaches will you use to provide legacy to the project?',
    ],
    sectionText:
      'Where will the project activities be hosted?<ul class="list-disc pl-6"><li>Remote or in person</li><li>Virtual platform</li><li>UK or abroad?</li></ul',
    storeBinding: projectPlanRefs.platform,
  },
  {
    id: 8,
    sectionName: 'Costings',
    references: [],
    links: [],
    notes: '',
    prompts: [
      'Internal staff time (professional, e.g., Library, and academic)',
      'Partner costs',
      'Participant recognition/reimbursement',
      'Equipment and Consumables for data collection',
      'Outsourcing, e.g. transcription services to prepare data for analysis',
    ],
    sectionText:
      'Considering the above what needs to be costed into a funding proposal? As with any research proposal there a various costs that need to be considered. See the prompts for some costs that might be involved in participatory research.',
    storeBinding: projectPlanRefs.costings,
  },
])

const activePanel = ref(1) // Start with the first panel open

const activePrompts: Ref<string[] | undefined> = ref(sections.value[0].prompts)
const selectedPrompts: Ref<string[]> = ref([])

// Watch for changes to activePanel and update activePrompts
watch(activePanel, (newVal) => {
  const section = sections.value.find((s) => s.id === newVal)
  if (section) {
    activePrompts.value = section.prompts
  }
})
</script>

<template>
  <InputText placeholder="Project Title" class="mb-4" v-model="projectPlan.title"></InputText>
  <Accordion v-model:value="activePanel" class="w-full">
    <AccordionPanel v-for="section in sections" :key="section.id" :value="section.id">
      <AccordionHeader class="text-left">
        {{ `${section.id}. ${section.sectionName}` }}
      </AccordionHeader>
      <AccordionContent>
        <div class="grid grid-cols-2 space-x-8">
          <div
            :class="
              activePrompts && activePrompts.length ? 'col-span-2 md:col-span-1' : 'col-span-2'
            "
          >
            <p v-if="section.sectionText" v-html="section.sectionText"></p>
            <Textarea
              class="w-full"
              :title="section.freeTextLabel ?? 'Notes'"
              rows="10"
              v-model="section.storeBinding"
            ></Textarea>
          </div>
          <ul v-if="activePrompts && activePrompts.length" class="col-span-2 md:col-span-1">
            <li v-for="prompt in activePrompts" :key="prompt">
              <Checkbox
                v-model="selectedPrompts"
                :inputId="prompt"
                name="category"
                :value="prompt"
                class="mr-2"
              />
              <label :for="prompt" :class="selectedPrompts.includes(prompt) ? 'font-bold' : ''">{{
                prompt
              }}</label>
            </li>
          </ul>
        </div>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style scoped></style>
