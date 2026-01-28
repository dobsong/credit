import { onMounted } from 'vue'

export function useProjectPlanData(projectPlan: any, authenticated: any, getToken: any) {
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
