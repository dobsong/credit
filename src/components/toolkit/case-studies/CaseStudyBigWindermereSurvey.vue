<script setup lang="ts">
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
            <a href="https://www.fba.org.uk/the-big-windermere-survey" target="_blank"
              >The Big Windermere Survey</a
            >
            was launched jointly by the Freshwater Biological Association (FBA) and Lancaster
            University, using citizen scientists to help assess the environmental health of
            Windermere.
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
                href="https://lovewindermere.co.uk/latest-news/second-big-windermere-survey/"
                target="_blank"
                >Second Big Windermere Survey - Love Windermere
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
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold md:mb-6 text-center dark:text-[var(--color-analysis)]"
          >
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">F</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">unding & </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">S</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">upport</span>
          </h2>
        </div>
        <div class="my-auto md:w-1/2 lg:p-8">
          <p class="mb-1 md:mb-4 text-base md:text-xl">
            The project previously received funding from Lancaster University’s Vice-Chancellor’s
            Prize for Participatory Research (2021-2022), and from United Utilities through the
            <a href="https://lovewindermere.co.uk/about-us/" target="_blank">Love Windermere</a>
            Partnership.
            <a href="https://www.fba.org.uk/" target="_blank">
              The Freshwater Biological Association
            </a>
            has been a partner in the Love Windermere Partnership. The survey has also been
            supported by the
            <a href="https://www.ceh.ac.uk/" target="_blank">
              UK Centre for Ecology and Hydrology
            </a>
            ,
            <a href="https://www.lakedistrict.gov.uk/" target="_blank">
              Lake District National Park Authority
            </a>
            ,
            <a href="https://scrt.co.uk/" target="_blank">South Cumbria Rivers Trust</a>
            ,
            <a href="https://www.brathay.org.uk/" target="_blank">Brathay Trust</a>
            ,
            <a href="https://www.nationaltrust.org.uk/" target="_blank">National Trust</a>
            and the
            <a href="https://www.gov.uk/government/organisations/environment-agency" target="_blank"
              >Environment Agency</a
            >.
          </p>
        </div>
      </div>
      <div class="w-full text-center md:pt-8">
        <Button @click="scrollToSection('approach')" class="text-sm md:text-base"
          >Next: Approach</Button
        >
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
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold mb-6 text-center text-slate-800 dark:text-slate-200"
          >
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">A</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">pproach</span>
          </h2>
          <p class="`pb-2">
            The survey used citizen scientists to gather water samples to provide one-day snapshots
            of conditions in Windermere. Citizen scientists were trained to collect water samples
            from approximately 100 different locations on Windermere and in the rivers and lakes
            that flow into it. The samples were analysed for nutrient and bacterial concentrations
            at independent laboratories.
          </p>
          <p>
            <ToolkitReference
              authors="Harper, Lynsey R., Kelly, Emma, Bregstein, Trine, Johnson, Simon, Lavictoire, Louise & Surridge, Ben W. J."
              :year="2023"
              url="https://www.ceh.ac.uk/sites/default/files/2024-02/SFG109-Lynsey-Big-Windermere-Survey.pdf"
              title="The Big Windermere Survey - A Citizen
            Science Approach To Monitoring Water Quality"
              citation="Lynsey R. Harper, Emma Kelly, Trine Bregstein, Simon Johnson, Louise Lavictoire & Ben W. J. Surridge, The Big Windermere Survey - A Citizen Science Approach To Monitoring Water Quality, BWS Summary Report August 2023"
            ></ToolkitReference>
          </p>
          <div class="text-base">(Summary report - August 2023)</div>
          <div
            class="bg-amber-200 w-64 rounded-xl drop-shadow-xl drop-shadow-slate-500 text-center mx-auto my-4"
          >
            <span class="pi pi-exclamation-circle float-right p-2"></span>
            <h3 class="font-bold pt-4">Challenges</h3>
            <p class="px-4 pb-8 pt-4">Sourcing funding for continuation.</p>
          </div>
          <div class="text-center md:pt-8">
            <Button @click="scrollToSection('outcomes')" class="text-sm md:text-base">
              Next: Outcomes & Impact
            </Button>
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="outcomes" :slide-in-direction="-1" css-class="lg:h-[90svh]">
      <div
        class="lg:w-2/3 grid grid-cols-1 h-full pt-4 text-lg md:text-xl mx-auto my-auto lg:pb-32"
      >
        <div class="col-span-2 text-center md:pb-8 mt-auto">
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold lg:mb-6 text-center dark:text-[var(--color-analysis)]"
          >
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">O</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">utcomes & </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">I</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">mpact</span>
          </h2>
        </div>
        <div class="col-span-2 md:col-span-1 mx-4">
          <ul class="list-disc pl-4">
            <li>
              Open Access Data in the form of summary reports available at
              <a href="https://www.fba.org.uk/bws-results" target="_blank"
                >BWS Results | Freshwater Biological Association</a
              >, and interactive maps on
              <a
                href="https://app.cartographer.io/embed/map?map=FbaWindermere&workspace=windermere&project=windermere"
                target="_blank"
                >Cartographer</a
              >.
            </li>
            <li>Data feeds into decision making of the Love Windermere partnership.</li>
          </ul>
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
