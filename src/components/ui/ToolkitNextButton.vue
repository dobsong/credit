<script setup lang="ts">
import Button from '@/volt/Button.vue'
import { RouterLink } from 'vue-router'

interface Props {
  text: string
  phase: number
  showNavigation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showNavigation: () => true,
})
</script>

<template>
  <div
    v-if="props.showNavigation"
    class="flex flex-wrap text-center w-full lg:w-3/4 font-sans text-sm items-baseline justify-between mx-auto"
  >
    <div>
      <RouterLink to="/proposal/phase/03">
        <img
          src="../../assets/shape_consideration.svg"
          title="Navigate to Consideration Phase"
          alt="Navigate to Consideration Phase"
          class="h-7 md:h-8 px-2 mx-auto hover:transform hover:scale-125 hover:-rotate-24"
          id="considerationPhaseLink"
        />
      </RouterLink>
      <span v-if="phase !== 4" class="font-medium font-sans hidden md:inline-block"
        >Consideration</span
      >
      <icon v-if="phase === 4" class="pi pi-sort-up-fill" />
    </div>
    <span class="max-sm:hidden">
      <icon class="pi pi-arrow-right mx-auto text-xs md:text-base" />
    </span>
    <div>
      <RouterLink to="/proposal/phase/04">
        <img
          src="../../assets/shape_preparation.svg"
          title="Navigate to Preparation Phase"
          alt="Navigate to Preparation Phase"
          class="h-7 md:h-12 px-2 mx-auto hover:transform hover:scale-125 hover:rotate-12"
          id="preparationPhaseLink"
        />
      </RouterLink>
      <span v-if="phase !== 5" class="font-medium font-sans hidden md:inline-block"
        >Preparation</span
      >
      <icon v-if="phase === 5" class="pi pi-sort-up-fill" />
    </div>
    <span class="max-sm:hidden">
      <icon class="pi pi-arrow-right mx-auto text-xs md:text-base" />
    </span>
    <div>
      <RouterLink to="/proposal/phase/05">
        <img
          src="../../assets/shape_development.svg"
          title="Navigate to Development Phase"
          alt="Navigate to Development Phase"
          class="w-10 md:w-13 px-2 mx-auto hover:transform hover:scale-125 hover:-rotate-12"
          id="developmentPhaseLink"
        />
      </RouterLink>
      <span v-if="phase !== 6" class="font-medium font-sans hidden md:inline-block"
        >Development</span
      >
      <icon v-if="phase === 6" class="pi pi-sort-up-fill" />
    </div>
    <span class="max-sm:hidden">
      <icon class="pi pi-arrow-right mx-auto text-xs md:text-base" />
    </span>
    <div>
      <RouterLink to="/proposal/phase/06">
        <img
          src="../../assets/shape_launch.svg"
          title="Navigate to Launch Phase"
          alt="Navigate to Launch Phase"
          class="h-7 md:h-8 px-2 mx-auto hover:transform hover:scale-125 hover:rotate-12"
          id="launchPhaseLink"
        />
      </RouterLink>
      <span v-if="phase !== 7" class="font-medium font-sans hidden md:inline-block">Launch</span>
      <icon v-if="phase === 7" class="pi pi-sort-up-fill" />
    </div>
    <span class="max-sm:hidden">
      <icon class="pi pi-arrow-right mx-auto text-xs md:text-base" />
    </span>
    <div>
      <RouterLink to="/proposal/phase/07">
        <img
          src="../../assets/shape_analysis.svg"
          title="Navigate to Analysis Phase"
          alt="Navigate to Analysis Phase"
          class="h-7 md:h-12 px-2 mx-auto hover:transform hover:scale-125 hover:-rotate-18"
          id="analysisPhaseLink"
        />
      </RouterLink>
      <span v-if="phase !== 8" class="font-medium font-sans hidden md:inline-block">Analysis</span>
      <icon v-if="phase === 8" class="pi pi-sort-up-fill" />
    </div>
    <span class="max-sm:hidden">
      <icon class="pi pi-arrow-right mx-auto text-xs md:text-base" />
    </span>
    <div>
      <RouterLink to="/proposal/phase/08">
        <img
          src="../../assets/shape_legacy.svg"
          title="Navigate to Legacy Phase"
          alt="Navigate to Legacy Phase"
          class="h-7 md:h-9 px-2 mx-auto hover:transform hover:scale-125 hover:-rotate-32"
        />
      </RouterLink>
      <span v-if="phase !== 9" class="font-medium font-sans hidden md:inline-block">Legacy</span>
      <icon v-if="phase === 9" class="pi pi-sort-up-fill" />
    </div>
    <span class="max-sm:hidden">
      <icon class="pi pi-arrow-right mx-auto text-xs md:text-base" />
    </span>
    <div>
      <RouterLink to="/proposal/phase/09">
        <img
          src="../../assets/shape_data.svg"
          title="Navigate to Data Management"
          alt="Navigate to Data Management"
          class="h-7 md:h-12 px-2 mx-auto hover:transform hover:scale-125 hover:rotate-12"
        />
      </RouterLink>
      <span v-if="phase !== 10" class="font-medium font-sans hidden md:inline-block"
        >Data Management</span
      >
      <icon v-if="phase === 10" class="pi pi-sort-up-fill" />
    </div>
  </div>
  <div class="mt-4">
    <RouterLink
      v-slot="{ navigate }"
      :to="`/proposal/phase/${String(phase).padStart(2, '0')}`"
      custom
    >
      <Button @click="navigate" icon="pi pi-arrow-right" iconPos="right" :label="text"></Button>
    </RouterLink>
  </div>
</template>
