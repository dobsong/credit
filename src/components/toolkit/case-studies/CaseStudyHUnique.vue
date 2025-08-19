<script setup lang="ts">
import ToolkitReference from '@/components/ui/ToolkitReference.vue'
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
            <a href="https://www.lancaster.ac.uk/scc/research/h-unique/" target="_blank"
              >H-Unique</a
            >
            is an interdisciplinary project driven by anatomists, anthropologists, mathematicians,
            bioinformaticians, image analysists and computer scientists. It is investigating the
            uniqueness of visible hand anatomy and building revolutionary new technologies to
            automatically extract and compare key anatomical detail, including vein patterns,
            pigmentation, knuckle creases and scars. The project combines Professor Lady Sue Black’s
            ground-breaking research in the forensic identification of individuals from images of
            their anatomy in child abuse cases with Dr Bryan M. Williams’ world-leading research in
            Computer Vision. A €2.5 million grant was received from the European Research Council.
          </p>
          <div class="font-[MuseoSans] md:mb-6 text-center text-sm md:text-base lg:text-xl">
            Research Contact:
            <a href="https://www.lancaster.ac.uk/lira/people/bryan-williams" target="_blank"
              >Dr. Brian Williams</a
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
            src="@/assets/h-unique_logo.png"
            class="rounded-2xl mx-auto object-cover w-full h-64 md:h-auto"
            alt="H-Unique Logo"
          />
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="approach" css-class="md:w-9/10 lg:w-5/6" :slide-in-direction="-1">
      <div class="flex flex-col-reverse md:flex-row items-center gap-0 lg:gap-8 lg:h-svh">
        <div class="w-full md:w-1/3 text-center">
          <img src="@/assets/hands2.jpg" class="rounded-2xl mb-3 p-1" alt="Hands (Illustrative)" />
        </div>
        <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold mb-6 text-center text-slate-800 dark:text-slate-200"
          >
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">A</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">pproach</span>
          </h2>
          <p class="pb-2">
            Volunteers submitted images of their hands using a dedicated secure web-based app, which
            was developed to make it easy for people to contribute their images to the project. The
            app was designed with clear instructions on how to take images from the angles and in
            the poses that the researchers needed. The images were anonymously used as part of a
            research database for developing and testing hand feature extraction and comparison
            algorithms.
          </p>
          <div class="text-center md:pt-8">
            <Button @click="scrollToSection('challenges')" class="text-sm md:text-base"
              >Next: Challenges</Button
            >
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="challenges" :slide-in-direction="1" css-class="">
      <div class="grid grid-cols-2">
        <div class="col-span-2">
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold md:mb-6 text-center dark:text-[var(--color-analysis)]"
          >
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">C</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">hallenges</span>
          </h2>
        </div>
        <div class="col-span-2 md:col-span-1">
          <p class="mb-1 md:mb-4 text-base md:text-xl">
            This project involves the development of 3 datasets, including (i) a set of 5000
            peoples’ hand images captured by their smartphones, (ii) a set of 500 peoples’ hand
            images captured by high-quality colour, infrared and smartphone cameras in controlled
            conditions, and (iii) a high-resolution 3-dimensional set of 50 peoples’ hand images. A
            strong media push and presence were important throughout. This was maintained through
            press releases, newspaper articles, radio and television appearances, as well as high
            impact research talks and articles.
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li>
              <a
                href="https://www.bigissuenorth.com/news/2020/02/give-abuse-research-a-hand/"
                target="_blank"
              >
                Give abuse research a hand
              </a>
            </li>
            <li>
              <a href="https://www.bbc.co.uk/news/uk-51647973" target="_blank">
                Scientists aim to spot abusers from their hands
              </a>
            </li>
            <li>
              <a
                href="https://www.itv.com/news/2020-02-27/researchers-aim-to-identify-child-abusers-by-hands"
                target="_blank"
              >
                Researchers aim to identify child abusers by hands
              </a>
            </li>
            <li>
              <a
                href="https://www.thetimes.com/uk/crime/article/meet-the-baroness-catching-paedophiles-red-handed-c0lt5lwnk"
                target="_blank"
              >
                Meet the baroness catching paedophiles red-handed
              </a>
            </li>
            <li>
              <a
                href="https://www.rigb.org/explore-science/explore/video/christmas-lectures-2022-3-living-body-sue-black"
                target="_blank"
              >
                Christmas Lectures 2022: 3. Living Body - with Sue Black
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-2 md:col-span-1">
          <img
            src="@/assets/phones.jpg"
            class="rounded-2xl mb-3 mx-auto"
            alt="Mobile Phones (Illustrative)"
          />
        </div>
      </div>
      <div class="w-full text-center md:pt-8">
        <Button @click="scrollToSection('outcomes')" class="text-sm md:text-base"
          >Next: Outcomes & Impact</Button
        >
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="outcomes" :slide-in-direction="-1" css-class="lg:h-[90svh]">
      <div
        class="lg:w-5/6 grid grid-cols-2 h-full pt-4 text-lg md:text-xl mx-auto my-auto lg:pb-32"
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
          <p>
            As a result, the project team have built the largest hand image dataset in existence by
            a considerable margin. This data has been essential in developing the world-leading
            research achieved in this project, which has in turn contributed to the investigation of
            child abuse cases. For Press/Media and Research outputs see the Lancaster University
            <a
              href="https://www.research.lancs.ac.uk/portal/en/upmprojects/hunique-in-search-of-uniqueness--harnessing-anatomical-hand-variation(b0c82f62-3f22-47ce-8bcf-377c3354338c).html"
              target="_blank"
              >Research Portal project page </a
            >.
          </p>
        </div>
        <div class="col-span-2 md:col-span-1 mb-auto mx-0 md:mx-4">
          <h3 class="font-bold mb-2">Selected Academic publications</h3>
          <ul class="list-disc pl-6 mb-8 ml-4">
            <li>
              <ToolkitReference
                authors="Jiang, Z.; Rahmani, H.; Angelov, P.; Vyas, R.; Zhou, H.; Black, S.; Williams, B. Deep"
                title="Deep orientated distance-transform network for geometric-aware centerline detection"
                :year="2024"
                citation="Jiang, Z.; Rahmani, H.; Angelov, P.; Vyas, R.; Zhou, H.; Black, S.; Williams, B. Deep orientated distance-transform network for geometric-aware centerline detection. Pattern Recognit. 2024, 146, 110028"
                url="https://www.sciencedirect.com/science/article/abs/pii/S0031320323007252"
              >
              </ToolkitReference>
            </li>
            <li>
              <ToolkitReference
                authors="JZheheng Jiang, Hossein Rahmani, Sue Black, Bryan M. Williams"
                title="A Probabilistic Attention Model With Occlusion-Aware Texture Regression for 3D Hand Reconstruction From a Single RGB Image"
                :year="2023"
                citation="Zheheng Jiang, Hossein Rahmani, Sue Black, Bryan M. Williams; Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2023, pp. 758-767"
                url="https://openaccess.thecvf.com/content/CVPR2023/html/Jiang_A_Probabilistic_Attention_Model_With_Occlusion-Aware_Texture_Regression_for_3D_CVPR_2023_paper.html"
              >
              </ToolkitReference>
            </li>
          </ul>
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
