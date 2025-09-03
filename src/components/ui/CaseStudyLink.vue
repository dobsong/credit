<script setup lang="ts">
import { caseStudySummaries } from '@/data/case-study-summaries'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  caseStudyIndex?: number
}>()

let currentIndex = props.caseStudyIndex ?? 0
const currentCaseStudy = ref(caseStudySummaries[currentIndex])
let interval: number | undefined

onMounted(() => {
  if (props.caseStudyIndex === undefined) {
    interval = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % caseStudySummaries.length
      currentCaseStudy.value = caseStudySummaries[currentIndex]
    }, 5000)
  }
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div
    class="w-full shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl dark:bg-[var(--p-surface-900)]"
  >
    <RouterLink v-slot="routerProps" :to="'/case-studies/' + currentCaseStudy.route">
      <a :href="routerProps.href" @click="routerProps.navigate">
        <img
          :src="currentCaseStudy.imageSrc"
          alt="Product"
          class="h-42 lg:h-50 w-full object-cover rounded-t-xl object-[0%_20%]"
        />
        <div class="px-4 py-3">
          <span class="mr-3 uppercase text-lg font-bold">{{ currentCaseStudy.title }}</span>
          <p class="text-sm block">
            {{ currentCaseStudy.summary }}
          </p>
        </div>
      </a>
    </RouterLink>
  </div>
</template>
