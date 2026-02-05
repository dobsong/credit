import { onMounted, onUnmounted } from 'vue'

export function useUnsavedChangesGuard(projectPlan: any) {
  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (projectPlan.dirty) {
      event.preventDefault()
      event.returnValue = ''
    }
  }

  onMounted(() => {
    window.addEventListener('beforeunload', handleBeforeUnload)
  })

  onUnmounted(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
  })
}
