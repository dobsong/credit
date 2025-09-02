import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useProjectPlanStore = defineStore('projectPlan', () => {
  /* state */
  const previousEngagement: Ref<'Yes' | 'No' | 'Unknown'> = ref('Unknown')
  const hasStarted: Ref<boolean> = ref(false)
  const projectSize: Ref<'Large' | 'Small' | 'Unknown'> = ref('Unknown')
  const country: Ref<'United Kingdom' | 'Other' | 'Unknown'> = ref('Unknown')
  const title: Ref<string> = ref('')
  const vision: Ref<string> = ref('')
  const laymansSummary: Ref<string> = ref('')
  const stakeholderAnalysis: Ref<string> = ref('')
  const approach: Ref<string> = ref('')
  const data: Ref<string> = ref('')
  const ethics: Ref<string> = ref('')
  const platform: Ref<string> = ref('')
  const supportMaterials: Ref<string> = ref('')
  const costings: Ref<string> = ref('')

  /* actions */
  function enable() {
    if (!hasStarted.value) {
      hasStarted.value = true
    }
  }

  function setPreviousEngagement(newValue: 'Yes' | 'No' | 'Unknown') {
    previousEngagement.value = newValue
  }

  return {
    enable,
    setPreviousEngagement,
    previousEngagement,
    projectSize,
    country,
    hasStarted,
    title: title,
    vision: vision,
    laymansSummary: laymansSummary,
    stakeholderAnalysis: stakeholderAnalysis,
    approach: approach,
    data: data,
    ethics: ethics,
    platform: platform,
    supportMaterials: supportMaterials,
    costings: costings,
  }
})
