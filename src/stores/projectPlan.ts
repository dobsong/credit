import type { AuthProvider } from '@/types/authProvider'
import { getErrorMessage } from '@/utility'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

// Get API base URL from environment, fallback to localhost for development
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

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
  const previousData: Ref<Record<string, string> | null> = ref(null)

  // Auth provider set by component: { authenticated, getToken }
  let authProvider: AuthProvider = {}

  function setAuth(provider: AuthProvider) {
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

    let lastError: unknown = null

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

        await axios.put(`${apiBaseUrl}/project_plan`, payload, {
          headers: {
            Authorization: `Bearer ${t}`,
          },
        })

        dirty.value = false
        retrying.value = false
        isLoading.value = false
        return // Success
      } catch (err: unknown) {
        lastError = err

        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, 4s
          const delayMs = Math.pow(2, attempt) * 1000
          await sleep(delayMs)
        }
      }
    }

    // All retries exhausted
    error.value = getErrorMessage(lastError)
    retrying.value = false
    isLoading.value = false
    console.error('Failed to save project plan after retries:', lastError)
  }

  // Load project plan from backend
  async function load(token?: string): Promise<void> {
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
      const response = await axios.get(`${apiBaseUrl}/project_plan`, {
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
    } catch (err: unknown) {
      error.value = getErrorMessage(err)
      console.error('Failed to load project plan:', err)
    } finally {
      isLoading.value = false
    }
  }

  // Save current state to localStorage
  function saveToLocalStorage() {
    try {
      const state = {
        title: title.value,
        vision: vision.value,
        laymansSummary: laymansSummary.value,
        stakeholderAnalysis: stakeholderAnalysis.value,
        approach: approach.value,
        data: data.value,
        ethics: ethics.value,
        platform: platform.value,
        supportMaterials: supportMaterials.value,
        costings: costings.value,
      }

      // Check if all fields are empty
      const hasContent = Object.values(state).some((value) => value && value.trim() !== '')
      if (!hasContent) {
        return // Don't save if everything is empty
      }

      localStorage.setItem('projectPlan_backup', JSON.stringify(state))
    } catch (err) {
      console.error('Failed to save project plan to localStorage:', err)
    }
  }

  // Restore data from localStorage and clear it
  function restoreFromLocalStorage() {
    try {
      const saved = localStorage.getItem('projectPlan_backup')
      if (saved) {
        const state = JSON.parse(saved)
        previousData.value = state
        localStorage.removeItem('projectPlan_backup')
        return state
      }
    } catch (err) {
      console.error('Failed to restore project plan from localStorage:', err)
    }
    return null
  }

  // Clear previous data notification
  function clearPreviousData() {
    previousData.value = null
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
    previousData,
    saveToLocalStorage,
    restoreFromLocalStorage,
    clearPreviousData,
  }
})
