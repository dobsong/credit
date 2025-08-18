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
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">H-U</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">nique</span>
          </h2>
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            H-Unique is an interdisciplinary project driven by anatomists, anthropologists,
            mathematicians, bioinformaticians, image analysists and computer scientists. It is
            investigating the uniqueness of visible hand anatomy and building revolutionary new
            technologies to automatically extract and compare key anatomical detail, including vein
            patterns, pigmentation, knuckle creases and scars. The project combines Professor Lady
            Sue Black’s ground-breaking research in the forensic identification of individuals from
            images of their anatomy in child abuse cases with Dr Bryan M. Williams’ world-leading
            research in Computer Vision. H-Unique – iCVL H-unique - Lancaster University Prof Lady
            Sue Black Dr Bryan M. Williams Funding €2.5 million grant from the European Research
            Council. Approach Volunteers submitted images of their hands using a dedicated secure
            web-based app, which was developed to make it easy for people to contribute their images
            to the project. The app was designed with clear instructions on how to take images from
            the angles and in the poses that the researchers needed. The images were anonymously
            used as part of a research database for developing and testing hand feature extraction
            and comparison algorithms.
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
            src="@/assets/h-unique_logo.png"
            class="rounded-2xl mx-auto object-cover w-full h-64 md:h-auto"
            alt="H-Unique Logo"
          />
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
