<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import { useBibliographyData } from '@/composables/useBibliographyData'
import { useBibliographyStore } from '@/stores/bibliography'
import type { Reference } from '@/types/reference'
import Button from '@/volt/Button.vue'
import Card from '@/volt/Card.vue'
import { storeToRefs } from 'pinia'
import { useToast } from 'primevue/usetoast'
import ToolkitHeading from './ui/ToolkitHeading.vue'

const bibliography = useBibliographyStore()
const { authenticated, getToken } = useKeycloak()
const toast = useToast()

useBibliographyData(bibliography, authenticated, getToken)

const { previousItems } = storeToRefs(bibliography)

async function mergePreviousItems() {
  if (!previousItems.value || previousItems.value.length === 0) return
  let token: string | null = null
  try {
    token = await getToken()
  } catch (err) {
    console.error('Failed to get token for merging reading list:', err)
  }

  for (const item of previousItems.value) {
    // Skip if already present by citation
    if (bibliography.items.some((x) => x.citation === item.citation)) continue

    const ref: Reference = { ...item }

    // If authenticated, require successful backend save; abort on any failure
    if (authenticated.value) {
      try {
        // Ensure we have a token
        if (!token) {
          token = await getToken()
        }
        if (!token) {
          throw new Error('No auth token available for merge')
        }

        const createdId = await bibliography.save(ref, token)
        if (createdId && createdId > 0) {
          ;(ref as Reference & { id?: number }).id = createdId
        }
      } catch (err) {
        console.error('Merge halted due to backend save failure:', err)
        toast.add({
          severity: 'error',
          summary: 'Merge Failed',
          detail: 'Failed to save references to the server. Merge halted — please try again.',
          life: 5000,
        })
        return
      }
    }

    // Add to local store (only reached if backend save succeeded or user not authenticated)
    bibliography.add(ref)
  }

  // Clear the previous items notification
  bibliography.clearPreviousData()
  toast.add({
    severity: 'success',
    summary: 'Reading List Merged',
    detail: 'References merged from your backup.',
    life: 3000,
  })
}

const deleteItem = async (ref: Reference) => {
  const shouldDeleteFromBackend = authenticated.value && ref.id && ref.id > 0

  if (shouldDeleteFromBackend) {
    try {
      const token = await getToken()
      if (token) {
        await bibliography.deleteReference(ref, token)
      }
    } catch {
      toast.add({
        severity: 'error',
        summary: 'Failed to Delete Reference',
        detail: 'The reference could not be deleted. Please try again.',
        life: 3000,
      })
      return
    }
  }

  // Remove from store (only reached if backend delete succeeded or was not needed)
  bibliography.remove(ref)
  toast.add({
    severity: 'success',
    summary: 'Reference Removed',
    detail: 'The reference has been removed from your reading list.',
    life: 3000,
  })
}
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8 pb-8 md:pb-16">
    <ToolkitHeading text="Your Reading List" class="pt-4"></ToolkitHeading>
    <Card class="mb-4">
      <template #content>
        <div class="flex flex-col md:flex-row">
          <div>
            <p class="text-sm md:text-lg">
              <span class="pi pi-info-circle"></span> Here you can store a personalised set of
              references for later reading. You'll find links throughout the toolkit next to
              relevant material.
            </p>
          </div>
        </div></template
      >
    </Card>
    <Card v-if="!authenticated" class="mb-4">
      <template #content>
        <div>
          <span class="pi pi-info-circle"></span> You can login using the button at the top if you
          want your personal reading list to be saved to revisit later
        </div>
      </template>
    </Card>
    <Card v-if="authenticated && previousItems && previousItems.length > 0" class="mb-4">
      <template #content>
        <div class="flex items-start gap-3">
          <span class="text-lg pi pi-info-circle text-amber-500 mt-1"></span>
          <div>
            <h4 class="font-bold mb-2">Previous Reading List Detected</h4>
            <p class="mb-3">
              We found items you added before logging in. You can merge any extra references into
              your account or dismiss this backup.
            </p>
            <div class="flex gap-2">
              <Button @click="mergePreviousItems" class="px-3 py-1">Merge References</Button>
              <Button @click="bibliography.clearPreviousData()" variant="outlined" class="px-3 py-1"
                >Dismiss</Button
              >
            </div>
          </div>
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
      <li
        v-for="ref in bibliography.items"
        :key="ref.citation"
        class="border-b pb-2 flex justify-between items-start"
      >
        <div>
          <a :href="ref.url" target="_blank" class="font-semibold hover:underline">
            {{ ref.title }}
          </a>
          <div class="text-sm text-muted-color-emphasis">{{ ref.citation }}</div>
        </div>
        <Button
          @click="deleteItem(ref)"
          class="ml-2 flex-shrink-0"
          title="Remove from reading list"
          icon="pi pi-trash"
        />
      </li>
    </ul>
    <div v-else class="text-muted-color">No references added yet.</div>
  </div>
</template>
