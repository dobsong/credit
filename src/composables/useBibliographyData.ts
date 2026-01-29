import type { AuthProvider } from '@/types/authProvider'
import type { Reference } from '@/types/reference'
import { onMounted, type Ref } from 'vue'

interface BibliographyStore {
  items: Reference[]
  isLoading: boolean
  error: string | null
  setAuth: (provider: AuthProvider) => void
  load: (token?: string) => Promise<void>
}

export function useBibliographyData(
  bibliography: BibliographyStore,
  authenticated: Readonly<Ref<boolean>>,
  getToken: () => Promise<string | null>,
) {
  onMounted(async () => {
    // Provide auth provider to store so store can handle tokens
    bibliography.setAuth({ authenticated, getToken })

    // Load data from server if authenticated
    if (authenticated.value) {
      try {
        const token: string | null = await getToken()
        if (token) {
          await bibliography.load(token)
        }
      } catch (error) {
        console.error('Failed to get token:', error)
      }
    }
  })
}
