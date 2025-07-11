<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import type { DevelopmentSection } from '@/types/developmentSection'
import Accordion from '@/volt/Accordion.vue'
import AccordionHeader from '@/volt/AccordionHeader.vue'
import AccordionPanel from '@/volt/AccordionPanel.vue'
import Checkbox from '@/volt/Checkbox.vue'
import Textarea from '@/volt/Textarea.vue'
import { ref, watch, type Ref } from 'vue'
import AccordionContent from '../../volt/AccordionContent.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()

const sections: Ref<DevelopmentSection[]> = ref([
  {
    id: 1,
    sectionName: 'Vision',
    references: [],
    links: [],
    notes: '',
    prompts: [
      'prompt 1... hjdfy jewg sdhgsadghjas gdsagh dg',
      'prompt 2... shdgsadga sajkhdkjshd jksahdkash d',
      'prompt 3... sadha djhkdshdksah ',
    ],
  },
  {
    id: 2,
    sectionName:
      "Layman's summary, important both for funding proposals and communicating to participants",
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt X', 'prompt Y', 'prompt Z'],
  },
  {
    id: 3,
    sectionName: 'Analysis of Partnerships and Interested Parties',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
  {
    id: 4,
    sectionName: 'Approach and methodology',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
  {
    id: 5,
    sectionName: 'Data',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
  {
    id: 6,
    sectionName: 'Ethics',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
  {
    id: 7,
    sectionName: 'Platform and Resources',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
  {
    id: 8,
    sectionName: 'Support materials',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
  {
    id: 9,
    sectionName: 'Costings',
    references: [],
    links: [],
    notes: '',
    prompts: ['prompt A', 'prompt B', 'prompt C'],
  },
])

const activePanel = ref(1) // Start with the first panel open

const activePrompts: Ref<string[]> = ref(sections.value[0].prompts)
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
  <Accordion v-model:value="activePanel" class="w-full">
    <AccordionPanel v-for="section in sections" :key="section.id" :value="section.id">
      <AccordionHeader class="text-left">
        {{ `${section.id}. ${section.sectionName}` }}
      </AccordionHeader>
      <AccordionContent>
        <div class="grid grid-cols-2 space-x-8">
          <div>
            <p>Content for each section here... will adjust depending on prompts selected?</p>
            <p>Prompts selected over all sections: {{ selectedPrompts.length }}</p>
            <h3>Notes</h3>
            <Textarea class="w-full" title="Notes"></Textarea>
          </div>
          <ul>
            <li v-for="prompt in activePrompts" :key="prompt">
              <Checkbox
                v-model="selectedPrompts"
                :inputId="prompt"
                name="category"
                :value="prompt"
                class="mr-2"
              />
              <label :for="prompt">{{ prompt }}</label>
            </li>
          </ul>
        </div>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style scoped></style>
