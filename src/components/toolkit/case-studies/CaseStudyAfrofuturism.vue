<script setup lang="ts">
import ToolkitReference from '@/components/ui/ToolkitReference.vue'
import ToolkitSection from '@/components/ui/ToolkitSection.vue'
import Button from '@/volt/Button.vue'
import ToolkitHeading from '../../ui/ToolkitHeading.vue'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="container mx-auto px-4 flex flex-col">
    <ToolkitHeading text="Afrofuturism" class="w-full" />

    <ToolkitSection
      section-id="reporting"
      css-class="bg-[var(--color-data-management)] dark:bg-slate-900"
      next-section-id="approach"
      next-section-name="Approach"
      :slide-in-direction="1"
    >
      <div class="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
        <div class="my-auto w-2/3 lg:w-1/2 p-4 md:p-8">
          <h2 class="md:w-full font-[MuseoSans] font-extrabold md:mb-6 text-center">
            <span class="text-6xl lg:text-9xl align-middle">B</span>
            <span class="text-3xl lg:text-6xl align-middle">ackground</span>
          </h2>
          <p class="mb-1 md:mb-4 text-lg md:text-xl">
            Afrofuturism as “both an artistic aesthetic and a framework for critical theory” is
            concerned with racial equity and technological agency to create emergent liberatory
            (social) systems. Using Afrofuturism as a research method encourages the imagination of
            new possibilities for Black liberation in a world where racial inequalities persist.
            Afrofuturism centres Black communities’ knowledge, subjectivities and experiences, and
            learns from lived experiences of racism and corresponding solutions.
          </p>
          <Button @click="scrollToSection('approach')">Next: Approach</Button>
        </div>
        <div class="w-1/3 lg:w-1/2 text-center md:pb-8">
          <img
            src="@/assets/temidayo_eseonu.jpg"
            class="hidden md:inline-block lg:max-w-2/3 rounded-2xl"
            alt="Temidayao Eseonu"
          />
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection
      section-id="approach"
      css-class="bg-[var(--color-launch)] dark:bg-cyan-900 md:w-5/6"
      next-section-id="outcomes"
      next-section-name="Outcomes"
      :slide-in-direction="-1"
    >
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div class="w-1/3 p-8">
          <img
            src="@/assets/youth_views.jpg"
            class="hidden md:inline-block rounded-2xl"
            alt="Concentric Circles used during workshop as part of the Youth Views project"
          />
        </div>
        <div class="my-auto md:w-2/3 p-4 md:p-8 text-lg md:text-xl">
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold mb-6 text-center text-slate-800 dark:text-slate-200"
          >
            <span class="text-6xl md:text-9xl align-middle">A</span>
            <span class="text-3xl md:text-6xl align-middle">pproach</span>
          </h2>
          <p>
            Afrofuturism can be used as a critical qualitative inquiry method. As a research method
            for gathering empirical and imaginary evidence it can be used for projects such as
            public service design.
          </p>
          <Button @click="scrollToSection('outcomes')" class="text-lg"
            >Next: Outcomes & Impact</Button
          >
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection
      section-id="outcomes"
      :slide-in-direction="1"
      css-class="bg-[#aaddff] dark:bg-slate-950"
    >
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div class="md:w-1/2 text-center md:pb-8">
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold md:mb-6 text-center dark:text-[var(--color-analysis)]"
          >
            <span class="text-6xl md:text-9xl align-middle">O</span>
            <span class="text-3xl md:text-6xl align-middle">utcomes & </span>
            <span class="text-6xl md:text-9xl align-middle">I</span>
            <span class="text-3xl md:text-6xl align-middle">mpact</span>
          </h2>
        </div>
        <div class="my-auto md:w-1/2 p-4 lg:p-8">
          <h3 class="font-bold mb-2">Academic Publications</h3>
          <ul class="list-disc pl-6 mb-8">
            <li>
              <ToolkitReference
                authors="Eseonu, T., Okoye, F."
                title="Making a Case for Afrofuturism as a Critical Qualitative Inquiry Method for Liberation"
                url="http://www.research.lancs.ac.uk/portal/en/publications/-(e0121eeb-b559-49e1-b54c-13a43cd8276d).html"
                :year="2024"
                citation="Eseonu, T., Okoye, F. 30/11/2024 In: Public Integrity. 26, 6, p. 674-685."
              />
            </li>
            <li>
              <ToolkitReference
                authors="Eseonu, T., Okoye, F."
                title="Video Summary: Making a case for Afrofuturism as a critical qualitative inquiry method for liberation"
                url="http://www.research.lancs.ac.uk/portal/en/publications/-(71067983-061e-420e-97ef-0766dce07af7).html"
                :year="2024"
                citation="Eseonu, T. 2024"
              />
            </li>
            <li>
              <ToolkitReference
                authors="Eseonu, T., Okoye, F."
                title="Co-creation as social innovation: including ‘hard-to-reach’ groups in public service delivery"
                url="http://www.research.lancs.ac.uk/portal/en/publications/-(b2c1bb49-cb34-4dec-84d5-708b7ae1d643).html"
                :year="2024"
                citation="Eseonu, T. 4/07/2022 In: Public Money and Management. 42, 5, p. 306-313"
              />
            </li>
            <li>
              <ToolkitReference
                authors="Eseonu, T., Duggan, J."
                title="Negotiating cultural appropriation while re-imagining co-production via Afrofuturism"
                url="http://www.research.lancs.ac.uk/portal/en/publications/-(044709b3-e8af-44a1-a6ed-fd1d61f5662c).html"
                :year="2022"
                citation="Eseonu, T., Duggan, J. 7/02/2022 In: Qualitative Research Journal. 22, 1, p. 96-107."
              />
            </li>
          </ul>
          <h3 class="font-bold mb-2">Toolkit</h3>
          <ul class="list-disc pl-6 mb-8">
            <li>
              <ToolkitReference
                authors="Eseonu, T."
                title="Designs for Addressing Racial inEqualities (DARE) - Aspect"
                url="https://aspect.ac.uk/resources/designs-for-addressing-racial-inequalities-dare/"
                citation="Designs for Addressing Racial inEqualities (DARE) - Aspect"
              />
            </li>
          </ul>
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
