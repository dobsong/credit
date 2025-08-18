<script setup lang="ts">
import ToolkitSection from '@/components/ui/ToolkitSection.vue'
import Button from '@/volt/Button.vue'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div
    class="w-full bg-[url('@/assets/inclusion.svg')] bg-no-repeat bg-top-left bg-size-[50%] md:bg-size-[25%] bg-fixed flex flex-col"
  >
    <ToolkitSection section-id="background" css-class="" :slide-in-direction="1">
      <div class="grid grid-cols-3 h-full pt-4">
        <div class="col-span-3 md:col-span-2 my-auto">
          <h2 class="font-[MuseoSans] font-extrabold md:mb-6 text-center">
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">T</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">he </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">B</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">ig </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">W</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">indermere </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">S</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">urvey</span>
          </h2>
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            The Big Windermere Survey was launched jointly by the Freshwater Biological Association
            (FBA) and Lancaster University, using citizen scientists to help assess the
            environmental health of Windermere.
          </p>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('challenges')" class="text-sm md:text-base">
              Next: Challenges
            </Button>
          </div>
        </div>
        <div
          class="text-center lg:p-8 lg: col-span-3 md:col-span-1 mb-auto md:mt-auto md:pt-8 flex-1"
        >
          <img
            src="@/assets/trine_windermere_2.jpg"
            class="rounded-2xl mx-auto object-cover w-full h-64 md:h-auto"
            alt="Windermere"
          />
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
