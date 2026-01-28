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
  const isLoading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)
  const retrying: Ref<boolean> = ref(false)

  // Auth provider set by component: { authenticated, getToken }
  let authProvider: { authenticated?: Ref<boolean>; getToken?: () => Promise<string | null> } = {}

  function setAuth(provider: {
    authenticated?: Ref<boolean>
    getToken?: () => Promise<string | null>
  }) {
    authProvider = provider
  }

  /* actions */
  function enable() {
    if (!hasStarted.value) {
      hasStarted.value = true
    }
  }

  function setPreviousEngagement(newValue: 'Yes' | 'No' | 'Unknown') {
    previousEngagement.value = newValue
  }

  // Helper function to sleep
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // Save project plan to backend with retry logic
  async function save(token?: string, maxRetries = 3) {
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

    let lastError: any = null

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        error.value = null
        retrying.value = attempt > 0
        isLoading.value = true

        let t: string | null | undefined = token ?? null
        if (!t && authProvider.getToken) {
          t = await authProvider.getToken()
        }
        if (!t) {
          throw new Error('No auth token available for save')
        }

        await axios.put('http://localhost:3000/project_plan', payload, {
          headers: {
            Authorization: `Bearer ${t}`,
          },
        })

        dirty.value = false
        retrying.value = false
        isLoading.value = false
        return // Success
      } catch (err: any) {
        lastError = err

        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, 4s
          const delayMs = Math.pow(2, attempt) * 1000
          await sleep(delayMs)
        }
      }
    }

    // All retries exhausted
    error.value = lastError?.message || String(lastError)
    retrying.value = false
    isLoading.value = false
    console.error('Failed to save project plan after retries:', lastError)
  }

  // Load project plan from backend
  async function load(token?: string) {
    try {
      error.value = null
      isLoading.value = true
      let t: string | null | undefined = token ?? null
      if (!t && authProvider.getToken) {
        t = await authProvider.getToken()
      }
      if (!t) {
        throw new Error('No auth token available for load')
      }
      const response = await axios.get('http://localhost:3000/project_plan', {
        headers: {
          Authorization: `Bearer ${t}`,
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
        dirty.value = false
      }
    } catch (err: any) {
      error.value = err?.message || String(err)
      console.error('Failed to load project plan:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    enable,
    setPreviousEngagement,
    save,
    load,
    setAuth,
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
    isLoading,
    error,
    retrying,
  }
})
