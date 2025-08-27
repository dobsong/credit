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
    class="w-full bg-[url('@/assets/inclusion.svg')] dark:bg-[url('@/assets/dark/inclusion.svg')] bg-no-repeat bg-top-left bg-size-[50%] md:bg-size-[25%] bg-fixed flex flex-col"
  >
    <ToolkitSection section-id="background" css-class="" :slide-in-direction="1">
      <div class="grid grid-cols-3 h-full pt-4">
        <div class="col-span-3 md:col-span-2 my-auto">
          <h2 class="font-[MuseoSans] font-extrabold md:mb-6 text-center">
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">D</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">avy </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">N</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">otebooks</span>
          </h2>
          <p class="md:mb-4 text-base md:text-xl lg:mx-24">
            The
            <a href="https://www.rigb.org/about-us/our-history" target="_blank"
              >Royal Institution of Great Britain</a
            >
            (RI) holds a large collection of notebooks and collections of lecture notes belonging to
            Humphry Davy. Additionally, five of Davy's notebooks, containing geological notes, are
            held at <a href="https://kresenkernow.org/" target="_blank">Kresen Kernow</a>, Cornwall.
            Sir Humphry Davy was a famous chemist of the early nineteenth century. Davy's notebooks
            are generically mixed, containing details of his scientific experiments, poetry,
            geological observations, travel accounts, personal philosophy, and more.
          </p>
          <div class="font-[MuseoSans] md:mb-6 text-center text-sm md:text-base lg:text-xl">
            Research Contact:
            <a href="https://www.lancaster.ac.uk/arts/people/sharon-ruston" target="_blank"
              >Prof. Sharon Rushton</a
            >
          </div>
          <div class="col-span-2 text-center mt-1 mb-2 lg:mt-16">
            <Button @click="scrollToSection('about-davy')" class="text-sm md:text-base">
              Next: About Davy
            </Button>
          </div>
        </div>
        <div
          class="text-center lg:p-8 lg: col-span-3 md:col-span-1 mb-auto md:mt-auto md:pt-8 flex-1"
        >
          <img
            src="@/assets/notebook.jpg"
            class="rounded-2xl mx-auto object-cover w-full h-64 md:h-auto"
            alt="One of Davy's Notebooks"
          />
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="about-davy" css-class="md:w-9/10 lg:w-5/6" :slide-in-direction="-1">
      <div class="flex flex-col-reverse md:flex-row items-center gap-0 lg:gap-8 lg:h-svh">
        <div class="w-full md:w-1/3 text-center">
          <img
            src="@/assets/humphry-davy.jpg"
            class="rounded-2xl mb-3 p-1"
            alt="Humphry Davy (portrait by Henry Howard)"
          />
        </div>
        <div class="my-auto md:w-2/3 md:p-8 text-lg md:text-xl">
          <h2
            class="md:w-full font-[MuseoSans] font-extrabold mb-6 text-center text-slate-800 dark:text-slate-200"
          >
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">A</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">bout </span>
            <span class="text-6xl md:text-7xl lg:text-9xl align-middle">D</span>
            <span class="text-3xl md:text-4xl lg:text-6xl align-middle">avy</span>
          </h2>
          <p class="pb-2">
            Davy’s scientific accomplishments include: researching nitrous oxide (often called
            ‘laughing gas’); isolating seven chemical elements (magnesium, calcium, potassium,
            sodium, strontium, barium, and boron) and establishing the elemental status of chlorine
            and iodine; inventing a miners’ safety lamp. Davy was also a poet, moving in the same
            literary circles as Lord Byron, Samuel Taylor Coleridge, Robert Southey, and William
            Wordsworth.
          </p>
          <div class="text-center md:pt-8">
            <Button @click="scrollToSection('funding')" class="text-sm md:text-base"
              >Next: Funding & Support</Button
            >
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="funding" :slide-in-direction="1" css-class="">
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
            The
            <a href="https://www.ukri.org/councils/ahrc/" target="_blank"
              >Arts and Humanities Research Council</a
            >
            (AHRC) funded the pilot project (2019) and the full project (2021-24). Additional
            funding came from the
            <a href="https://www.ucl.ac.uk/sts/science-and-technology-studies" target="_blank"
              >UCL STS</a
            >
            Summer Studentship scheme and the
            <a href="https://ambix.org/" target="_blank"
              >Society for the History of Alchemy and Chemistry</a
            >'s Subject Development Awards scheme. The Royal Institution provided access to, and
            scanned images of, the Davy Notebooks in its
            <a
              href="https://discovery.nationalarchives.gov.uk/browse/r/h/e2707ad4-aad2-4b09-aefc-6e6e96eae1ec"
              target="_blank"
              >collection</a
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

    <ToolkitSection section-id="approach" :slide-in-direction="-1" css-class="">
      <div class="flex flex-col-reverse md:flex-row items-center gap-0 md:gap-8">
        <div class="w-full md:w-1/3 p-1 text-center">
          <img
            src="@/assets/zooniverse-logo-teal.svg"
            class="rounded-2xl mb-3 lg:p-12 lg:max-w-4/5 ml-auto"
            alt="Zooniverse Emblem"
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
            The Davy Notebooks Project (2019-24) used crowd sourcing transcription via the
            Zooniverse platform (over 3,800 volunteer transcribers), to learn more about Davy, his
            work, and the relationship between poetry and science. The project Zooniverse page can
            be accessed by the following link:
            <a
              href="https://www.zooniverse.org/projects/humphrydavy/davy-notebooks-project"
              target="_blank"
            >
              Davy Notebooks Project
            </a>
            .
          </p>
          <div
            class="bg-amber-200 text-gray-900 w-64 rounded-xl drop-shadow-xl drop-shadow-slate-500 dark:drop-shadow-gray-950 text-center mx-auto my-4"
          >
            <span class="pi pi-exclamation-circle float-right p-2"></span>
            <h3 class="font-bold pt-4">Challenges</h3>
            <p class="px-4 pb-8 pt-4">Missing Notebooks.</p>
          </div>
          <div class="text-center md:pt-8">
            <Button @click="scrollToSection('partners')" class="text-sm md:text-base"
              >Next: Partners</Button
            >
          </div>
        </div>
      </div>
    </ToolkitSection>

    <ToolkitSection section-id="partners" css-class="lg:h-[90svh]" :slide-in-direction="1">
      <div class="lg:w-5/6 grid grid-cols-2 h-full pt-4 text-lg md:text-xl mx-auto">
        <div class="col-span-2 md:col-span-1 pb-6 my-auto">
          <h2 class="font-[MuseoSans] font-extrabold md:mb-6 text-center">
            <span class="text-6xl md:text-7xl lg:text-8xl align-middle">P</span>
            <span class="text-3xl md:text-4xl lg:text-5xl align-middle">artners</span>
          </h2>
          <ul class="list-disc pl-6">
            <li><a href="https://www.lancaster.ac.uk/" target="_blank">Lancaster University</a></li>
            <li><a href="https://www.rigb.org/" target="_blank">Royal Institution</a></li>
            <li><a href="https://www.zooniverse.org/" target="_blank">Zooniverse</a></li>
            <li>Zooniverse participants</li>
            <li><a href="https://www.u3a.org.uk/" target="_blank">U3A</a></li>
            <li>
              <a href="https://www.lancaster.ac.uk/library/" target="_blank"
                >Lancaster University Library</a
              >
            </li>
          </ul>
        </div>
        <div class="col-span-2 md:col-span-1 my-auto">
          <h2 class="font-[MuseoSans] font-extrabold md:mb-6 text-center">
            <span class="text-6xl md:text-7xl lg:text-8xl align-middle">E</span>
            <span class="text-3xl md:text-4xl lg:text-5xl align-middle">ngagement with </span>
            <span class="text-6xl md:text-7xl lg:text-8xl align-middle">P</span>
            <span class="text-3xl md:text-4xl lg:text-5xl align-middle">articipants</span>
          </h2>
          <p>
            Website (Davy Notebooks Project), dedicated webpage and resources for U3A volunteers,
            Transcribe-a-thons, Zooniverse (talk boards, emails), social media.
          </p>
          <div class="col-span-3 text-center mt-1 lg:mt-16">
            <Button @click="scrollToSection('outcomes')" class="text-sm md:text-base mb-auto">
              Next: Outcomes & Impact
            </Button>
          </div>
        </div>
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
        <div class="col-span-2 md:col-span-1">
          <h3 class="font-bold mb-2">Digital Collection</h3>
          <ul class="list-disc pl-6 mb-8">
            <li>
              <ToolkitReference
                title="Lancaster Digital Collections, Davy Notebooks Project, Davy Notebooks"
                citation="Lancaster Digital Collections, Davy Notebooks Project, Davy Notebooks"
                url="https://digitalcollections.lancaster.ac.uk/collections/davy/1"
              ></ToolkitReference>
            </li>
          </ul>
          <h3 class="font-bold mb-2">Public Engagement</h3>
          <ul class="list-disc pl-6 mb-8 ml-4">
            <li>Library @ Campus in the City, “Davy's Discovery Lab”, 2025</li>
          </ul>
          <h3 class="font-bold mb-2">Education</h3>
          <ul class="list-disc pl-6 mb-8 ml-4">
            <li>
              Updated MOOC, “Humphry Davy: Laughing Gas, Literature, and the Lamp”, Future Learn,
              <ToolkitReference
                title="Humphry Davy: Laughing Gas, Literature, and the Lamp"
                short-description="Humphry Davy - Online Course"
                citation="Humphry Davy: Laughing Gas, Literature, and the Lamp, Future Learn Online Course"
                url="https://www.futurelearn.com/courses/humphry-davy"
              ></ToolkitReference>
            </li>
            <li>
              STEM Learning resources,
              <ToolkitReference
                title="Humphry Davy - Crossing the arts/science divide in schools"
                short-description="Humphry Davy - Crossing the arts/science divide in schools"
                citation="STEM Learning resources, “Humphry Davy - Crossing the arts/science divide in schools”, https://www.stem.org.uk/rxjknf"
                url="https://www.stem.org.uk/rxjknf"
              ></ToolkitReference>
            </li>
            <li>
              STEM Learning resources,
              <ToolkitReference
                title="Student-designed learning resources, Learning Resources | Davy Notebooks Project"
                short-description="Student-designed learning resources"
                citation="Student-designed learning resources, Learning Resources | Davy Notebooks Project"
                url="https://wp.lancs.ac.uk/davynotebooks/learning-resources/"
              ></ToolkitReference>
            </li>
          </ul>
        </div>
        <div class="col-span-2 md:col-span-1 mb-auto">
          <h3 class="font-bold mb-2">Academic publications</h3>
          <p>
            <ToolkitReference
              title="‘The Notebooks of Sir Humphry Davy’, Special Edition, Notes and Records (The Royal Society Journal of the History of Science), Royal Society"
              citation="‘The Notebooks of Sir Humphry Davy’, Special Edition, Notes and Records (The Royal Society Journal of the History of Science), Royal Society, 78(4), 2024, organized and guest edited by Sharon Ruston"
              url="https://royalsocietypublishing.org/toc/rsnr/2024/78/4"
            ></ToolkitReference>
          </p>
          <ul class="list-disc pl-6 mb-8 ml-4">
            <li><span class="font-bold">Editorial: </span></li>
            <li class="ml-4">
              <ToolkitReference
                authors="Sharon Ruston, Eleanor Lucy Bird, Andrew Lacey, Frank James, Jo Taylor and Samantha Blickhan"
                title="Humphry Davy's Notebooks"
                citation="Sharon Ruston, Eleanor Lucy Bird, Andrew Lacey, Frank James, Jo Taylor and Samantha Blickhan, “Humphry Davy's Notebooks”, Editorial, https://doi.org/10.1098/rsnr.2024.0002"
                url="https://doi.org/10.1098/rsnr.2024.0002"
              ></ToolkitReference>
            </li>
            <li class="mt-4"><span class="font-bold">Research Articles: </span></li>
            <li class="ml-4">
              <ToolkitReference
                authors="Andrew Lacey"
                title="“Davy’s Notemaking”"
                citation="Andrew Lacey, “Davy’s Notemaking”, https://doi.org/10.1098/rsnr.2023.0094"
                url="https://doi.org/10.1098/rsnr.2023.0094"
              ></ToolkitReference>
            </li>
            <li class="ml-4">
              <ToolkitReference
                authors="Frank A. J. L. James"
                title="Moving scientific knowledge from the laboratory to the theatre: Humphry Davy's Lecture practice at the Royal Institution, 1801-1812"
                citation="Frank A. J. L. James, “Moving scientific knowledge from the laboratory to the theatre: Humphry Davy's Lecture practice at the Royal Institution, 1801-1812”, https://doi.org/10.1098/rsnr.2023.0086"
                url="https://doi.org/10.1098/rsnr.2023.0086"
              ></ToolkitReference>
            </li>
            <li class="ml-4">
              <ToolkitReference
                authors="Eleanor Lucy Bird"
                title="Humphry Davy, transatlantic slavery and his constructions of racial difference in an early notebook"
                citation="Eleanor Lucy Bird, “Humphry Davy, transatlantic slavery and his constructions of racial difference in an early notebook”, https://doi.org/10.1098/rsnr.2023.0089"
                url="https://doi.org/10.1098/rsnr.2023.0089"
              ></ToolkitReference>
            </li>
            <li class="ml-4">
              <ToolkitReference
                authors="Sharon Ruston"
                title="Protean Forms in Humphry Davy's Notebooks"
                citation="Sharon Ruston, “Protean Forms in Humphry Davy's Notebooks”, https://doi.org/10.1098/rsnr.2023.0090"
                url="https://doi.org/10.1098/rsnr.2023.0090"
              ></ToolkitReference>
            </li>
            <li class="ml-4">
              <ToolkitReference
                authors="Samantha Blickhan, Eleanor Bird, Andrew Lacey and Alexis Wolf"
                title="The benefits of ‘slow’ development: towards a best practice for sustainable technical infrastructure through the Davy Notebooks Project"
                citation="Samantha Blickhan, Eleanor Bird, Andrew Lacey and Alexis Wolf, “The benefits of ‘slow’ development: towards a best practice for sustainable technical infrastructure through the Davy Notebooks Project”, https://doi.org/10.1098/rsnr.2024.0003"
                url="https://doi.org/10.1098/rsnr.2024.0003"
              ></ToolkitReference>
            </li>
          </ul>
        </div>
      </div>
    </ToolkitSection>
  </div>
</template>
