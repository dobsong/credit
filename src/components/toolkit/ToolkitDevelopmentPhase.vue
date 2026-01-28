<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import { useProjectPlanStore } from '@/stores/projectPlan'
import { scrollToSection } from '@/utility'
import Button from '@/volt/Button.vue'
import Card from '@/volt/Card.vue'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import ToolkitExportButtons from '../ui/ToolkitExportButtons.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitPhaseNavigation from '../ui/ToolkitPhaseNavigation.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
import ToolkitSection from '../ui/ToolkitSection.vue'
import ToolkitOverallPlan from './ToolkitOverallPlan.vue'

const { authenticated, getToken } = useKeycloak()

const projectPlan = useProjectPlanStore()
projectPlan.enable()
const phase = 3
const loaded = ref(false)
const copySuccess = ref(false)

const {
  title,
  vision,
  laymansSummary,
  stakeholderAnalysis,
  approach,
  data,
  ethics,
  platform,
  costings,
  dirty,
  isLoading,
  error,
  retrying,
  previousData,
} = storeToRefs(projectPlan)

// provide auth provider to store so store can handle tokens
projectPlan.setAuth({ authenticated, getToken })

// Copy previous data to clipboard as plain text
async function copyPreviousDataToClipboard() {
  if (!previousData.value) return
  try {
    const fields = [
      { label: 'Project Title', key: 'title' },
      { label: 'Vision', key: 'vision' },
      { label: "Layman's Summary", key: 'laymansSummary' },
      { label: 'Stakeholder Analysis', key: 'stakeholderAnalysis' },
      { label: 'Approach', key: 'approach' },
      { label: 'Data', key: 'data' },
      { label: 'Ethics', key: 'ethics' },
      { label: 'Platform', key: 'platform' },
      { label: 'Support Materials', key: 'supportMaterials' },
      { label: 'Costings', key: 'costings' },
    ]

    const lines = fields
      .map((field) => {
        const value = previousData.value?.[field.key as keyof typeof previousData.value]
        if (!value) return null
        return `${field.label}:\n${value}`
      })
      .filter(Boolean)
      .join('\n\n')

    await navigator.clipboard.writeText(lines)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
  }
}

// Simple debounce function
function debounce(func: Function, delay: number) {
  let timeoutId: any
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

// Debounced save
const debouncedSave = debounce(async () => {
  try {
    await projectPlan.save()
  } catch (err) {
    console.error('Failed to save:', err)
  }
}, 2000)

// Watch fields and set dirty, trigger save
watch(
  [title, vision, laymansSummary, stakeholderAnalysis, approach, data, ethics, platform, costings],
  () => {
    if (loaded.value) {
      projectPlan.dirty = true
      debouncedSave()
    }
  },
)

// Navigation guard
const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  if (projectPlan.dirty) {
    event.preventDefault()
    event.returnValue = ''
  }
}

onMounted(async () => {
  window.addEventListener('beforeunload', handleBeforeUnload)

  // Restore any data that was saved before login redirect
  projectPlan.restoreFromLocalStorage()

  if (authenticated.value) {
    try {
      const token: string | null = await getToken()
      if (token) {
        await projectPlan.load(token)
      }
    } catch (error) {
      console.error('Failed to get token:', error)
    }
  }
  loaded.value = true
})

onUnmounted(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<template>
  <div class="container mx-auto px-2 flex">
    <div class="w-full grid">
      <ToolkitPhaseNavigation :phase="phase"></ToolkitPhaseNavigation>

      <ToolkitSection section-id="intro" css-class="" :slide-in-direction="1">
        <div class="flex flex-wrap lg:min-h-[65svh] lg:mb-[11svh]">
          <div class="lg:mt-auto w-full">
            <ToolkitHeading text="Development Phase" class="mx-auto"></ToolkitHeading>
          </div>
          <div class="w-full mx-auto lg:w-4/5">
            <div
              class="md:float-right bg-amber-200 text-gray-900 w-64 rounded-xl drop-shadow-xl drop-shadow-slate-500 dark:drop-shadow-gray-950 text-center mx-auto my-4"
            >
              <span class="pi pi-exclamation-circle float-right p-2"></span>
              <h3 class="font-bold pt-4">Beta Version</h3>
              <p class="px-4 pb-8 pt-4">
                Your input is not saved in this beta version. For now, you can use the export button
                at the bottom of this section or download templates in the
                <RouterLink to="/resources">resources</RouterLink> section for offline use.
              </p>
            </div>
            <p class="md:mb-4 text-base md:text-xl">
              This phase defines the space to develop the different plans required to deliver the
              project.
            </p>

            <ul class="list-disc ml-12 mb-4 text-base md:text-xl">
              <li>Overall Plan</li>
              <li>Ethics Plan (introduced previously in toolkit)</li>
              <li>Data Management Plan (introduced later in toolkit)</li>
            </ul>
            <div class="text-center mt-1 mb-2 lg:mt-16">
              <Button
                @click="scrollToSection('planning')"
                class="text-sm md:text-base mr-1 md:mr-4"
              >
                Next: Planning
              </Button>
              <Button
                @click="scrollToSection('further-guidance')"
                outlined
                class="text-sm md:text-base mr-1 md:mr-4"
              >
                Further Guidance...
              </Button>
            </div>
          </div>
        </div>
      </ToolkitSection>

      <section id="planning">
        <ToolkitHeading text="Planning"></ToolkitHeading>
        <Card v-if="!authenticated" class="mb-4">
          <template #content>
            <div>
              <span class="pi pi-info-circle"></span> You can login using the button at the top if
              you want your plan to be saved to revisit later
            </div>
          </template>
        </Card>
        <Card v-if="previousData" class="mb-4">
          <template #content>
            <div class="flex items-start gap-3">
              <span class="text-lg pi pi-info-circle text-amber-500 mt-1"></span>
              <div>
                <h4 class="font-bold mb-2">Previous Data Detected</h4>
                <p class="mb-3">
                  We found data you were working on before logging in. The server has now loaded
                  your saved project plan, which may differ from what you were editing. You can copy
                  this data to your clipboard to inspect it.
                </p>
                <div class="flex gap-2">
                  <Button
                    @click="copyPreviousDataToClipboard()"
                    class="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-2"
                  >
                    <span class="pi" :class="copySuccess ? 'pi-check' : 'pi-copy'"></span>
                    {{ copySuccess ? 'Copied!' : 'Copy Data' }}
                  </Button>
                  <Button
                    @click="projectPlan.clearPreviousData()"
                    variant="outlined"
                    class="text-sm px-3 py-1 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors"
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </template>
        </Card>
        <Card class="mb-4">
          <template #content>
            <ToolkitOverallPlan></ToolkitOverallPlan>
            <ToolkitExportButtons></ToolkitExportButtons>
          </template>
        </Card>
      </section>

      <ToolkitSection section-id="further-guidance" :slide-in-direction="-1">
        <ToolkitHeading text="Further Guidance"></ToolkitHeading>
        <h3 class="font-bold text-xl md:text-2xl pb-4 pt-4">Funding</h3>
        <ul class="list-disc pl-6 mb-4">
          <li>
            <ToolkitReference
              title="Funding Applications UKRI core question guidance: Core section questions and how they will
          be assessed -UKRI"
              short-description="Funding Applications UKRI core question guidance: Core section questions and how they will
          be assessed -UKRI"
              citation=""
              url="https://www.ukri.org/apply-for-funding/develop-your-application/responsive-mode-opportunities-funding-service-core-application-section-questions-and-assessment/core-section-questions-and-how-they-will-be-assessed/#contents-list"
            ></ToolkitReference>
          </li>
        </ul>
        <h3 class="font-bold text-xl md:text-2xl pb-4">Guides & Toolkits</h3>
        <ul class="list-disc pl-6">
          <li>
            <ToolkitReference
              authors="Tweddle, J.C., Robinson, L.D., Pocock, M.J.O. & Roy, H.E"
              :year="2012"
              title="Guide to citizen science: developing, implementing and evaluating citizen science to study biodiversity and the environment in the UK."
              short-description="Guide to citizen science (Natural History Museum and NERC Centre for Ecology & Hydrology for UK-EOF)"
              citation="Tweddle, J.C., Robinson, L.D., Pocock, M.J.O. & Roy, H.E (2012). Guide to citizen science: developing, implementing and evaluating citizen science to study biodiversity and the environment in the UK. Natural History Museum and NERC Centre for Ecology & Hydrology for UK-EOF. Available online: www.ukeof.org.uk, Citizen Science Best Practice Guide | UK Centre for Ecology & Hydrology"
              url="https://www.ceh.ac.uk/sites/default/files/citizenscienceguide.pdf"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              authors="L. Pettibone et al."
              :year="2016"
              title="Citizen science for all: A guide for citizen science practitioners (Bürger schaffen Wissen)"
              citation="L. Pettibone et al., Citizen science for all - a guide for citizen science practitioners. Bürger Schaffen Wissen (GEWISS) publication, 2016."
              url="https://www.mitforschen.org/sites/default/files/grid/2017/11/20/handreichunga5_engl_web.pdf"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              authors="Veeckman, C., Van den Bogaert, L., Keersmaekers, F., Verbrugge, K., & Livémont, E."
              :year="2023"
              title="Citizen Science Starter Kit (Online Citizen Science Training Materials) (Zenodo)"
              citation="Veeckman, C., Van den Bogaert, L., Keersmaekers, F., Verbrugge, K., & Livémont, E. (2023). D3.3 Citizen Science Starter Kit (Online Citizen Science Training Materials) (Version 3). Zenodo. https://doi.org/10.5281/zenodo.10119036"
              url="https://doi.org/10.5281/zenodo.10119036"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              authors="G. Thuermer (Ed.), N. Reeves, et al."
              :year="2022"
              title="Participatory Science Toolkit Against Pollution (ACTION Project)"
              citation="G. Thuermer (Ed.), N. Reeves, et al., Participatory Science Toolkit Against Pollution, 2022, https://actionproject.eu/wp-content/uploads/2022/04/TOOLKIT-9_.pdf"
              url="https://actionproject.eu/wp-content/uploads/2022/04/TOOLKIT-9_.pdf"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              :year="2025"
              title="Community Dialogue Toolkit (Lancaster District Community Dialogue Project, Lancaster University)"
              citation="Community Dialogue Toolkit, Lancaster District Community Dialogue Project, Lancaster University, 2025, Community Dialogue Project and Toolkit - Lancaster University - https://www.lancaster.ac.uk/connect/connected-to-our-communities/community-dialogue-project-and-toolkit/index.php"
              url="https://www.lancaster.ac.uk/connect/connected-to-our-communities/community-dialogue-project-and-toolkit/index.php"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              :year="2024"
              title="Communities & Crowds: a toolkit for hybrid volunteering with cultural heritage collections"
              citation="G. Belknap et al., Communities & Crowds: a toolkit for hybrid volunteering with cultural heritage collections, Science Museum Group Journal, 2024, https://dx.doi.org/10.15180/242209"
              url="https://dx.doi.org/10.15180/242209"
            ></ToolkitReference>
          </li>
          <li>
            <ToolkitReference
              title="National Centre for Research Methods (NCRM) (quantitative, qualitative, digital, creative, visual, mixed and multimodal methods)"
              citation="National Centre for Research Methods (NCRM) (quantitative, qualitative, digital, creative, visual, mixed and multimodal methods)"
              url="https://www.ncrm.ac.uk/"
            ></ToolkitReference>
          </li>
        </ul>
      </ToolkitSection>

      <div class="text-center my-4 text-4xl">
        <Button @click="scrollToSection('header')" class="z-50">
          <span class="pi pi-arrow-up" titl="Return to Top"></span>
        </Button>
      </div>

      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :currentPhase="phase" text="Launch and Sustain"></ToolkitNextButton>
      </p>
    </div>

    <!-- Floating save indicator -->
    <div
      v-if="authenticated && (isLoading || dirty || error)"
      class="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-4xl transition-opacity duration-300 opacity-80 bg-primary-500 text-white"
    >
      <div v-if="error || retrying" class="text-center">
        <div class="pi pi-exclamation-triangle"></div>
        <div>{{ error }}</div>
        <div v-if="retrying">Retrying...</div>
      </div>
      <span v-else-if="isLoading" class="pi pi-spin pi-spinner"></span>
      <span v-else-if="dirty" class="pi pi-save"></span>
    </div>
  </div>

  <img
    src="@/assets/ribbon_development.svg"
    class="w-full h-32 object-cover object-left sm:h-auto sm:object-contain"
    alt="Development Phase Image"
  />
</template>
