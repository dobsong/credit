<script setup lang="ts">
import DataTable from '@/volt/DataTable.vue'
import InputText from '@/volt/InputText.vue'
import { SearchIcon } from '@primevue/icons'
import Column from 'primevue/column'
import { ref } from 'vue'
import type { GlossaryDefinition } from './types/glossary-definition'
import ToolkitHeading from './ui/ToolkitHeading.vue'

const glossaryDefinitions: GlossaryDefinition[] = [
  {
    term: 'A1',
    definition: 'Example Definition 1',
  },
  {
    term: 'A2',
    definition: 'Example Definition 2',
  },
  {
    term: 'A3',
    definition: 'Example Definition 3',
  },
]

const filters = ref({
  global: { value: null, matchMode: 'contains' },
})
</script>

<template>
  <div class="w-full flex flex-col">
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
      </DataTable>
    </div>
  </div>
</template>
