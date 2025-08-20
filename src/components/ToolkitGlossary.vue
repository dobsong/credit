<script setup lang="ts">
import DataTable from '@/volt/DataTable.vue'
import InputText from '@/volt/InputText.vue'
import { SearchIcon } from '@primevue/icons'
import Column from 'primevue/column'
import { ref } from 'vue'
import type { GlossaryDefinition } from '../types/glossary-definition'
import ToolkitHeading from './ui/ToolkitHeading.vue'

const glossaryDefinitions: GlossaryDefinition[] = [
  {
    term: 'Citizen Science',
    definition:
      'The practice of public participation and collaboration in scientific research to increase scientific knowledge',
    id: 1,
  },
  {
    term: 'Metadata',
    definition:
      'Contextual and descriptive features of the data. Metadata may be descriptive, structural or administrative',
    id: 2,
    url: 'https://doi.org/10.5281/zenodo.7124031',
  },
  {
    term: 'AAPS',
    definition: 'Association for Advancing Participatory Sciences',
    id: 3,
  },
  {
    term: 'CREDIT',
    definition: 'Community Research Digital Toolkit',
    id: 4,
  },
  {
    term: 'DMP',
    definition: 'Data Management Plan',
    id: 5,
  },
  {
    term: 'ECSA',
    definition: 'European Citizen Science Association',
    id: 6,
  },
  {
    term: 'GDPR',
    definition: 'General Data Protection Regulation',
    id: 7,
  },
  {
    term: 'UKRI',
    definition: 'UK Research and Innovation',
    id: 8,
  },
  {
    term: 'Typology',
    definition:
      'The term typology refers to classifying things or concepts into types based upon their similarities',
    id: 9,
    url: 'https://zenodo.org/records/6653806',
  },
]

const filters = ref({
  global: { value: null, matchMode: 'contains' },
})
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8 mb-8 md:mb-24">
    <ToolkitHeading text="Glossary"></ToolkitHeading>

    <div>
      <DataTable
        :value="glossaryDefinitions"
        pt:table="min-w-200"
        v-model:filters="filters"
        :globalFilterFields="['term', 'definition']"
      >
        <template #header>
          <div class="flex justify-end">
            <div class="relative">
              <SearchIcon
                class="absolute top-1/2 -mt-2 text-surface-400 leading-none end-3 z-1"
              ></SearchIcon>
              <InputText v-model="filters['global'].value" placeholder="Search" />
            </div>
          </div>
        </template>
        <Column field="term" filterField="term" header="Term" sortable></Column>
        <Column field="definition" filterField="definition" header="Definition"></Column>
        <Column field="url" header="Read More">
          <template #body="{ data }">
            <span v-if="data.url"><a :href="data.url" target="_blank" class="pi pi-book"></a></span>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
