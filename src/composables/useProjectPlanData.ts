import type { AuthProvider } from '@/types/authProvider'
import { onMounted, type Ref } from 'vue'

interface ProjectPlanStore {
  setAuth: (provider: AuthProvider) => void
  load: (token: string) => Promise<void>
  restoreFromLocalStorage: () => void
}

export function useProjectPlanData(
  projectPlan: ProjectPlanStore,
  authenticated: Readonly<Ref<boolean>>,
  getToken: () => Promise<string | null>,
) {
  onMounted(async () => {
    // Restore any data that was saved before login redirect
    projectPlan.restoreFromLocalStorage()

    // Provide auth provider to store so store can handle tokens
    projectPlan.setAuth({ authenticated, getToken })

    // Load data from server if authenticated
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
  })
}
