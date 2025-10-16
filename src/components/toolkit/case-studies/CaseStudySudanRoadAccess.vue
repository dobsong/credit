<script setup lang="ts">
import ToolkitHeading from '@/components/ui/ToolkitHeading.vue'
import ToolkitSection from '@/components/ui/ToolkitSection.vue'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
</script>

<template>
  <div
    class="w-full bg-[url('@/assets/inclusion.svg')] dark:bg-[url('@/assets/dark/inclusion.svg')] bg-no-repeat bg-top-left bg-size-[50%] md:bg-size-[25%] bg-fixed flex flex-col"
  >
    <ToolkitSection section-id="background" css-class="" :slide-in-direction="1">
      <div class="grid grid-cols-3 h-full pt-4">
        <div class="col-span-3 md:col-span-2 my-auto">
          <ToolkitHeading text="Sudan Road Access"></ToolkitHeading>
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            In Sudan, numerous wadis (dry riverbeds) cross over roads, and during the rainy season,
            these fill up and flood the road. This makes it very difficult for aid vehicles to pass
            through and slows down the humanitarian supply chain. Aid workers struggle to inform
            each other of the wadis locations due to the telecommunications blackouts.
          </p>

          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            <a
              href="https://www.lancaster.ac.uk/physics/about-us/news/how-citizen-science-is-helping-humanitarian-aid-workers-in-sudan"
              target="_blank"
              >How citizen science is helping humanitarian aid workers in Sudan - Lancaster
              University
            </a>
          </p>
          <div class="font-[MuseoSans] md:mb-6 text-center text-sm md:text-base lg:text-xl">
            Research Contact:
            <a
              href="https://www.lancaster.ac.uk/physics/about-us/people/brooke-simmons"
              target="_blank"
              >Prof. Brooke Simmons</a
            >
          </div>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('approach')" class="text-sm md:text-base">
              Next: Approach
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
          <div>[Open Data Program] © [2024] Maxar Technologies</div>
          <div>
            © <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a> ©
            <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="approach" css-class="md:w-9/10 lg:w-5/6" :slide-in-direction="-1">
      <div class="flex flex-col-reverse md:flex-row items-center gap-0 lg:gap-8 lg:h-svh">
        <div class="w-full md:w-1/3 text-center">
          <img
            src="@/assets/zooniverse-logo-teal.svg"
            class="rounded-2xl mb-3 p-1"
            alt="Zooniverse Emblem"
          />
        </div>
        <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
          <ToolkitHeading text="Approach"></ToolkitHeading>
          <p class="pb-2">
            The Sudan Road Access project uses data analysis via the Zooniverse platform to mark the
            location of where wadis cross roads, and other pertinent information. The project
            Zooniverse page can be accessed by the following link:
            <a
              href="https://www.zooniverse.org/projects/alicemead/sudan-road-access-logistics-cluster/"
              target="_blank"
              >Sudan Road Access: Logistics Cluster — Zooniverse.</a
            >
          </p>
          <div class="text-center md:pt-8">
            <Button @click="scrollToSection('outcomes')" class="text-sm md:text-base"
              >Next: Outcomes</Button
            >
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="outcomes" :slide-in-direction="-1" css-class="lg:h-[90svh]">
      <div
        class="lg:w-2/3 grid grid-cols-1 h-full pt-4 text-lg md:text-xl mx-auto my-auto lg:pb-32"
      >
        <div class="col-span-2 text-center md:pb-8 mt-auto">
          <ToolkitHeading text="Outcomes & Impact"></ToolkitHeading>
        </div>
        <div class="col-span-2 md:col-span-1 mx-4">
          <ul class="list-disc pl-4">
            <li>
              Aggregated results, usually in "heat map" PDF and web formats, shared with responders
              on the ground.
            </li>
            <li>
              Ongoing and final outcomes shared on the project's Results page and on various Talk
              pages
            </li>
            <li>Press releases and scholarly articles</li>
            <li>
              <a href="https://www.logcluster.org/en/ops/sdn20a" target="_blank"
                >Sudan | Logistics Cluster Website</a
              >. Results are sent directly to LogIE. From the logistics Cluster Website → Open LogIE
              → “rainy season preparedness”. Results from the project (updated every week).
            </li>
          </ul>
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
