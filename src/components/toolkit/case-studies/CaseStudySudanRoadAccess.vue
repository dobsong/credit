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
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">S</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">udan </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">R</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">oad </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">A</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">ccess</span>
          </h2>
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            In Sudan, numerous wadis (dry riverbeds) cross over roads, and during the rainy season,
            these fill up and flood the road. This makes it very difficult for aid vehicles to pass
            through and slows down the humanitarian supply chain. Aid workers struggle to inform
            each other of the wadis locations due to the telecommunications blackouts.
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
            src="@/assets/sudan_road_1.jpg"
            class="rounded-2xl mx-auto object-cover w-full h-64 md:h-auto"
            alt="Example image - SUdan Road Access"
          />
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
