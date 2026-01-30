import type { AuthProvider } from '@/types/authProvider'
import type { Reference } from '@/types/reference'
import { getErrorMessage } from '@/utility'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

// Get API base URL from environment, fallback to localhost for development
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export const useBibliographyStore = defineStore('bibliography', () => {
  /* state */
  const items: Ref<Reference[]> = ref([])
  const isLoading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)
  const previousItems: Ref<Reference[] | null> = ref(null)

  // Auth provider set by component: { authenticated, getToken }
  let authProvider: AuthProvider = {}

  function setAuth(provider: AuthProvider) {
    authProvider = provider
  }

  /* actions */
  function add(ref: Reference) {
    if (!items.value.find((item) => item.citation === ref.citation)) {
      items.value.push(ref)
    }
  }

  function remove(ref: Reference) {
    items.value = items.value.filter((item) => item.citation !== ref.citation)
  }

  function clear() {
    items.value = []
  }

  // Save current bibliography to localStorage before redirect/login
  function saveToLocalStorage() {
    try {
      if (!items.value || items.value.length === 0) return
      localStorage.setItem('bibliography_backup', JSON.stringify(items.value))
    } catch (err) {
      console.error('Failed to save bibliography to localStorage:', err)
    }
  }

  // Load bibliography from backend
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
      const response = await axios.get<Reference[]>(`${apiBaseUrl}/reading_lists`, {
        headers: {
          Authorization: `Bearer ${t}`,
        },
      })
      if (Array.isArray(response.data)) {
        items.value = response.data
      }
    } catch (err: unknown) {
      error.value = getErrorMessage(err)
      console.error('Failed to load bibliography:', err)
    } finally {
      isLoading.value = false
    }
  }

  // Save a reference to the backend
  async function save(ref: Reference, token?: string): Promise<number> {
    try {
      error.value = null
      let t: string | null | undefined = token ?? null
      if (!t && authProvider.getToken) {
        t = await authProvider.getToken()
      }
      if (!t) {
        throw new Error('No auth token available for save')
      }
      const payload = {
        reading_list: {
          title: ref.title,
          authors: ref.authors,
          year: ref.year,
          url: ref.url,
          citation: ref.citation,
        },
      }
      const response = await axios.post<{ id: number }>(`${apiBaseUrl}/reading_lists`, payload, {
        headers: {
          Authorization: `Bearer ${t}`,
        },
      })

      // If API returned an id, attach it to the passed reference object and return it
      const createdId = response?.data?.id
      if (createdId) {
        // mutate the passed object so it is added to the store with id present (simplifies later removal)
        ;(ref as Reference & { id?: number }).id = createdId
        return createdId
      }

      // Fallback: return -1 if no id provided
      return -1
    } catch (err: unknown) {
      error.value = getErrorMessage(err)
      console.error('Failed to save reference to bibliography:', err)
      throw err // Re-throw so the component can handle the error
    }
  }

  // Delete a reference from the backend
  async function deleteReference(ref: Reference, token?: string): Promise<void> {
    // If there's a valid id, try to delete from backend first
    if (ref.id && ref.id > 0) {
      try {
        error.value = null
        let t: string | null | undefined = token ?? null
        if (!t && authProvider.getToken) {
          t = await authProvider.getToken()
        }
        if (!t) {
          throw new Error('No auth token available for delete')
        }
        await axios.delete(`${apiBaseUrl}/reading_lists/${ref.id}`, {
          headers: {
            Authorization: `Bearer ${t}`,
          },
        })
      } catch (err: unknown) {
        error.value = getErrorMessage(err)
        console.error('Failed to delete reference from backend:', err)
        throw err // Re-throw so the component knows not to remove from store
      }
    }
  }

  // Restore bibliography backup from localStorage (and clear it)
  function restoreFromLocalStorage() {
    try {
      const saved = localStorage.getItem('bibliography_backup')
      if (saved) {
        const parsed = JSON.parse(saved) as Reference[]
        previousItems.value = parsed
        localStorage.removeItem('bibliography_backup')
        return parsed
      }
    } catch (err) {
      console.error('Failed to restore bibliography from localStorage:', err)
    }
    return null
  }

  function clearPreviousData() {
    previousItems.value = null
  }

  return {
    items,
    isLoading,
    error,
    setAuth,
    add,
    remove,
    clear,
    load,
    save,
    deleteReference,
    previousItems,
    saveToLocalStorage,
    restoreFromLocalStorage,
    clearPreviousData,
  }
})
