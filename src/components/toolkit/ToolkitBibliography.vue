<script setup lang="ts">
import { useBibliographyStore } from '@/stores/bibliography'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
const bibliography = useBibliographyStore()
</script>

<template>
  <div class="w-full flex flex-col">
    <ToolkitHeading text="Your Bibliography"></ToolkitHeading>
    <h2 class="text-xl font-bold mb-4">
      Here you can store a personalised set of references for later reading. You'll find links
      throughout the toolkit next to relevant material.
    </h2>
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
