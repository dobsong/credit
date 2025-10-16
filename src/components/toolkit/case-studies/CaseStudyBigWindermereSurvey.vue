<script setup lang="ts">
import ToolkitHeading from '@/components/ui/ToolkitHeading.vue'
import ToolkitReference from '@/components/ui/ToolkitReference.vue'
import ToolkitSection from '@/components/ui/ToolkitSection.vue'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
</script>

<template>
  <div
    class="w-full bg-[url('@/assets/inclusion.svg')] dark:bg-[url('@/assets/dark/inclusion.svg')] bg-no-repeat bg-top-left bg-size-[50%] md:bg-size-[25%] bg-fixed flex flex-col"
  >
    <ToolkitSection section-id="background" css-class="" :slide-in-direction="1">
      <div class="grid grid-cols-3 h-full pt-4 md:pb-64">
        <div class="col-span-3 md:col-span-2 my-auto">
          <ToolkitHeading text="The Big Windermere Survey"></ToolkitHeading>
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            <a href="https://www.fba.org.uk/the-big-windermere-survey" target="_blank">
              The Big Windermere Survey
            </a>
            (BWS) is an innovative and impactful citizen science project designed to assess the
            environmental health of Windermere, a vital and iconic body of water within the Lake
            District National Park and UNESCO World Heritage site. The project was first developed
            in 2022 through collaboration between Lancaster University and the Freshwater Biological
            Association (FBA), in response to community concern around water quality and gaps in
            traditional water quality monitoring.
          </p>
          <ul class="md:w-4/5 lg:w-3/5 mx-auto list-disc md:mb-8 text-base md:text-xl">
            <li>
              <a
                href="https://www.lancaster.ac.uk/news/big-windermere-survey-reveals-one-day-snapshot-of-water-quality-in-iconic-lake-and-its-catchment"
                target="_blank"
                >‘Big Windermere Survey’ reveals one-day snapshot of water quality in iconic lake
                and its catchment - Lancaster University
              </a>
            </li>
            <li>
              <a
                href="https://www.lancaster.ac.uk/rse/news/windermere-two-year-report-demands-action-to-address-poor-water-quality-results"
                target="_blank"
              >
                Windermere two-year report demands action to address ‘Poor’ water quality results
              </a>
            </li>
          </ul>
          <div class="font-[MuseoSans] md:mb-6 text-center text-sm md:text-base lg:text-xl">
            Research Contact:
            <a href="https://www.lancaster.ac.uk/lec/about-us/people/ben-surridge" target="_blank"
              >Dr. Ben Surridge</a
            >
          </div>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('funding')" class="text-sm md:text-base">
              Next: Funding & Support
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

    <ToolkitSection section-id="funding" :slide-in-direction="-1" css-class="">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:pb-8">
          <ToolkitHeading text="Funding & Support"></ToolkitHeading>
        </div>
        <div class="my-auto md:w-1/2 lg:p-8">
          <p class="mb-1 md:mb-4 text-base md:text-xl">
            The project was initially funded by Lancaster University’s Vice-Chancellor’s Prize for
            Participatory Research (2021-2022). Subsequent financial support for the project has
            been kindly provided by Aviva Community Fund, Environment Agency, Lake District
            Foundation, Lake District National Park Authority, Lakeland, Lancaster University,
            National Trust, United Utilities, Westmorland and Furness Council, and private
            donations. The BWS has also been supported by the UK Centre for Ecology & Hydrology,
            South Cumbria Rivers Trust, and Brathay Trust.
          </p>
        </div>
      </div>
      <div class="w-full text-center md:pt-8 md:mb-24">
        <Button @click="scrollToSection('approach')" class="text-sm md:text-base">
          Next: Approach
        </Button>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="approach" :slide-in-direction="1" css-class="">
      <div class="flex flex-col-reverse md:flex-row items-center gap-0 md:gap-8">
        <div class="w-full md:w-1/3 p-1 text-center">
          <img
            src="@/assets/river_sampling_windermere.jpg"
            class="rounded-2xl mb-3 lg:max-h-[90svh] mx-auto"
            alt="River sampling, Windermere catchment. Credit Dr. Ben Surridge"
          />
        </div>
        <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
          <ToolkitHeading text="Approach"></ToolkitHeading>
          <p class="`pb-2">
            Ten surveys have been conducted seasonally (Spring, Summer, Autumn and Winter) over two
            and a half years between June 2022 and November 2024. During a two-hour window in each
            survey, dedicated citizen scientists collect water samples from over 100 locations in
            the catchment of Windermere. The citizen scientists receive training via videos and
            printed guides, and are provided with the same sampling equipment used in water quality
            research, ensuring robust sample collection. Samples collected during each survey are
            analysed for over 15 water quality parameters at Lancaster University research
            laboratories and at external accredited laboratories. Over 350 volunteer citizen
            scientists have contributed their time to this unprecedented sampling campaign,
            generating a unique dataset based on over 1000 water samples. No traditional academic
            research or monitoring programme would be capable of collecting samples at the same
            spatial intensity as the BWS.
          </p>
          <p>
            <ToolkitReference
              authors="Surridge, B.W.J., Cowling, S., Lavictoire, L., Kelly, E., Johnson, S."
              :year="2025"
              url="https://www.fba.org.uk/fba-voice/windermere-two-year-report-demands-action-to-address-poor-water-quality-results"
              title="Big Windermere Survey Summary Report, June 2022 - November 2024"
              citation="Surridge, B.W.J, Cowling, S., Lavictoire, L., Kelly, E., Johnson, S. (2025) Big Windermere Survey Summary Report, June 2022 - November 2024. Freshwater Biological Association, UK."
            ></ToolkitReference>
          </p>
          <div class="text-center md:pt-8">
            <Button @click="scrollToSection('challenges')" class="text-sm md:text-base">
              Next: Challenges
            </Button>
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="challenges" :slide-in-direction="1" css-class="">
      <div class="grid grid-cols-1 md:w-2/3 mx-auto">
        <div>
          <ToolkitHeading text="Challenges"></ToolkitHeading>
        </div>

        <ul class="list-disc pl-6 mb-4 text-base md:text-xl">
          <li>
            Managing expectations among citizen scientists regarding the extent to which the project
            itself can lead changes in the catchment that improve water quality.
          </li>
          <li>
            Maintaining the independence (real and perceived) of the research project when it is
            located in the middle of a politically and publicly charged issue such as water
            pollution.
          </li>
          <li>Securing funding for continuation of the project.</li>
        </ul>
      </div>
      <div class="w-full text-center md:pt-8">
        <Button @click="scrollToSection('outcomes')" class="text-sm md:text-base">
          Next: Outcomes & Impact
        </Button>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="outcomes" :slide-in-direction="1" css-class="lg:h-[90svh]">
      <div
        class="lg:w-2/3 grid grid-cols-1 h-full pt-4 text-lg md:text-xl mx-auto my-auto lg:pb-32"
      >
        <div class="col-span-2 text-center md:pb-8 mt-auto">
          <ToolkitHeading text="Outcomes & Impact"></ToolkitHeading>
        </div>
        <div class="col-span-2 md:col-span-1 mx-4">
          <ul class="list-disc pl-4">
            <li>
              All data and summary reports are open access and made freely and openly available to
              all interested parties via:
              <a href="https://www.fba.org.uk/bws-results" target="_blank">
                BWS Results | Freshwater Biological Association </a
              >, and interactive maps on
              <a
                href="https://app.cartographer.io/embed/map?map=FbaWindermere&workspace=windermere&project=windermere"
                target="_blank"
              >
                Cartographer</a
              >.
            </li>
            <li>
              The BWS project team continues to engage with many partners in the catchment,
              including as the Love Windermere Partnership, to ensure BWS data influence policy and
              practice related to water quality in Windermere
            </li>
          </ul>
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
