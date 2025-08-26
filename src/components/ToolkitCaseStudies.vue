<script setup lang="ts">
import { caseStudySummaries } from '@/data/case-study-summaries'
import Chip from '@/volt/Chip.vue'
import ToolkitHeading from './ui/ToolkitHeading.vue'
</script>

<template>
  <ToolkitHeading text="Case Studies"></ToolkitHeading>

  <div
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5"
  >
    <div
      v-for="caseStudy in caseStudySummaries"
      v-bind:key="caseStudy.id"
      class="w-88 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
      <RouterLink v-slot="routerProps" :to="'/case-studies/' + caseStudy.route">
        <a :href="routerProps.href" @click="routerProps.navigate">
          <img
            :src="caseStudy.imageSrc"
            alt="Product"
            class="h-75 w-88 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="mr-3 uppercase text-lg font-bold">{{ caseStudy.title }}</span>
            <p class="text-sm block">
              {{ caseStudy.summary }}
            </p>
            <h2 class="underline pb-4">Keywords</h2>
            <div class="flex items-center flex-wrap gap-0.5 text-xs">
              <Chip v-for="keyword in caseStudy.keywords" v-bind:key="keyword">{{ keyword }}</Chip>
            </div>
          </div>
        </a>
      </RouterLink>
    </div>
  </div>
</template>
