<script setup lang="ts">
import { useBibliographyStore } from '@/stores/bibliography'
import { useToast } from 'primevue/usetoast'

const bibliography = useBibliographyStore()
const toast = useToast() // instance to create messages

import { onMounted, ref } from 'vue'

const props = defineProps<{
  shortDescription?: string
  title: string
  authors?: string
  citation: string
  url: string
  year?: number
}>()

const bouncing = ref(true)
const settling = ref(false)

onMounted(() => {
  setTimeout(() => {
    bouncing.value = false
    settling.value = true
    setTimeout(() => (settling.value = false), 400)
  }, 3000)
})

const startBounce = () => {
  bouncing.value = true
  settling.value = false
}

const stopBounce = () => {
  bouncing.value = false
  settling.value = true
  setTimeout(() => (settling.value = false), 400)
}

const addToBibliography = () => {
  // Add the current reference to the bibliography
  bibliography.add({
    title: props.title || '',
    authors: props.authors || '',
    citation: props.citation,
    url: props.url,
    year: props.year || 0,
  })

  // Show a toast message to confirm addition
  toast.add({
    severity: 'success',
    summary: 'Reference Added',
    detail: 'The reference has been added to your bibliography.',
    life: 3000,
  })
}
</script>
<template>
  <span>
    <a class="italic" :href="url" target="_blank">{{ shortDescription || title }}</a>
    <button title="Add to your bibliography to review later" @click="addToBibliography()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width=""
        stroke="currentColor"
        class="size-6 inline-block ml-1.5 text-primary-400 cursor-pointer hover:text-primary-200"
        :class="{ 'animate-bounce': bouncing, 'bounce-settle': settling }"
        @mouseenter="startBounce"
        @mouseleave="stopBounce"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
        />
      </svg>
    </button>
  </span>
</template>

<style scoped>
.bounce-settle {
  animation: bounce-settle 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes bounce-settle {
  0% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
