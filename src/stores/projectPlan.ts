import axios from 'axios'
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
  const dirty: Ref<boolean> = ref(false)

  /* actions */
  function enable() {
    if (!hasStarted.value) {
      hasStarted.value = true
    }
  }

  function setPreviousEngagement(newValue: 'Yes' | 'No' | 'Unknown') {
    previousEngagement.value = newValue
  }

  // Save project plan to backend
  async function save(token: string) {
    const payload = {
      title: title.value,
      vision: vision.value,
      laymans_summary: laymansSummary.value,
      stakeholder_analysis: stakeholderAnalysis.value,
      approach: approach.value,
      data: data.value,
      ethics: ethics.value,
      platform: platform.value,
      costings: costings.value,
    }
    try {
      await axios.put('http://localhost:3000/project_plan', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dirty.value = false
    } catch (error) {
      console.error('Failed to save project plan:', error)
    }
  }

  // Load project plan from backend
  async function load(token: string) {
    try {
      const response = await axios.get('http://localhost:3000/project_plan', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.data) {
        title.value = response.data.title || ''
        vision.value = response.data.vision || ''
        laymansSummary.value = response.data.laymans_summary || ''
        stakeholderAnalysis.value = response.data.stakeholder_analysis || ''
        approach.value = response.data.approach || ''
        data.value = response.data.data || ''
        ethics.value = response.data.ethics || ''
        platform.value = response.data.platform || ''
        costings.value = response.data.costings || ''
      }
    } catch (error) {
      console.error('Failed to load project plan:', error)
    }
  }

  return {
    enable,
    setPreviousEngagement,
    save,
    load,
    previousEngagement,
    projectSize,
    country,
    hasStarted,
    title,
    vision,
    laymansSummary,
    stakeholderAnalysis,
    approach,
    data,
    ethics,
    platform,
    supportMaterials,
    costings,
    dirty,
  }
})
