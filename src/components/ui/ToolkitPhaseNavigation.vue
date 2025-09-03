<script setup lang="ts">
import { RouterLink } from 'vue-router'

import analysisImg from '../../assets/shape_analysis.svg'
import considerationImg from '../../assets/shape_consideration.svg'
import dataImg from '../../assets/shape_data.svg'
import developmentImg from '../../assets/shape_development.svg'
import launchImg from '../../assets/shape_launch.svg'
import legacyImg from '../../assets/shape_legacy.svg'
import preparationImg from '../../assets/shape_preparation.svg'

defineProps<{
  phase: number
}>()

const phases = [
  {
    number: 1,
    name: 'Consideration',
    img: considerationImg,
    customClass: 'h-7 md:h-8 hover:-rotate-24',
  },
  {
    number: 2,
    name: 'Preparation',
    img: preparationImg,
    customClass: 'h-7 md:h-12 hover:rotate-12',
  },
  {
    number: 3,
    name: 'Development',
    img: developmentImg,
    customClass: 'w-10 md:w-13 hover:-rotate-12',
  },
  {
    number: 4,
    name: 'Launch',
    img: launchImg,
    customclass: 'h-7 md:h-8 hover:rotate-12',
  },
  {
    number: 5,
    name: 'Analysis',
    img: analysisImg,
    customClass: 'h-7 md:h-12 hover:-rotate-18',
  },
  {
    number: 6,
    name: 'Legacy',
    img: legacyImg,
    customclass: 'h-7 md:h-9 hover:-rotate-32',
  },
  {
    number: 7,
    name: 'Data Management',
    img: dataImg,
    customclass: 'h-7 md:h-12 hover:rotate-12',
  },
]
</script>

<template>
  <div
    class="flex flex-wrap text-center w-full lg:w-3/4 font-sans text-sm items-baseline justify-between mx-auto mt-2 md:mb-4"
  >
    <template v-for="phaseItem in phases" :key="phaseItem.number">
      <div>
        <RouterLink :to="`/proposal/phase/0${phaseItem.number + 2}`">
          <img
            :src="phaseItem.img"
            :title="`Navigate to ${phaseItem.name} Phase`"
            :alt="`Navigate to ${phaseItem.name} Phase`"
            class="h-7 md:h-8 px-2 mx-auto hover:transform hover:scale-125"
            :class="phaseItem.customClass"
            :id="`${phaseItem.name.toLowerCase()}PhaseLink`"
          />
        </RouterLink>
        <span
          v-if="phase !== phaseItem.number"
          class="font-medium font-sans hidden md:inline-block"
        >
          {{ phaseItem.name }}
        </span>
        <span
          v-if="phase !== phaseItem.number"
          class="font-medium font-sans inline-block md:hidden"
        >
          {{ phaseItem.number }}
        </span>
        <span v-if="phase === phaseItem.number" class="pi pi-sort-up-fill"></span>
      </div>
      <span class="max-sm:hidden" v-if="phaseItem.number < phases.length">
        <span class="pi pi-arrow-right mx-auto text-xs md:text-base"></span>
      </span>
    </template>
  </div>
</template>
