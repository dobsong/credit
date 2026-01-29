<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import { useBibliographyData } from '@/composables/useBibliographyData'
import { useBibliographyStore } from '@/stores/bibliography'
import Card from '@/volt/Card.vue'
import ToolkitHeading from './ui/ToolkitHeading.vue'

const bibliography = useBibliographyStore()
const { authenticated, getToken } = useKeycloak()

useBibliographyData(bibliography, authenticated, getToken)
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8 pb-8 md:pb-16">
    <ToolkitHeading text="Your Bibliography" class="pt-4"></ToolkitHeading>
    <h2 class="text-xl font-bold mb-4">
      Here you can store a personalised set of references for later reading. You'll find links
      throughout the toolkit next to relevant material.
    </h2>
    <Card v-if="!authenticated" class="mb-4">
      <template #content>
        <div>
          <span class="pi pi-info-circle"></span> You can login using the button at the top if you
          want your personal reading list to be saved to revisit later
        </div>
      </template>
    </Card>
    <div v-else-if="bibliography.isLoading" class="mb-4">
      Loading your reading list... <span class="pi pi-spin pi-spinner"></span>
    </div>
    <div v-else-if="bibliography.error" class="mb-4">
      <span class="pi pi-exclamation-triangle text-amber-500"></span> Error loading reading list:
      {{ bibliography.error }}
    </div>
    <ul v-if="bibliography.items.length > 0" class="space-y-2">
      <li v-for="ref in bibliography.items" :key="ref.citation" class="border-b pb-2">
        <a :href="ref.url" target="_blank" class="font-semibold hover:underline">
          {{ ref.title }}
        </a>
        <div class="text-sm text-muted-color-emphasis">{{ ref.citation }}</div>
      </li>
    </ul>
    <div v-else class="text-muted-color">No references added yet.</div>
  </div>
</template>
