import { onMounted, ref, watch, type Ref } from 'vue'

export function useProjectPlanAutoSave(
  projectPlan: any,
  fieldRefs: Ref[],
  authenticated: Readonly<Ref<boolean>>,
  debounceMs: number = 2000,
) {
  const loaded = ref(false)

  // Helper: debounce function
  function debounce(func: Function, delay: number) {
    let timeoutId: any
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(null, args), delay)
    }
  }

  // Debounced save - only save if authenticated
  const debouncedSave = debounce(async () => {
    if (!authenticated.value) {
      // silently skip trying to save to backend if user not logged in
      return
    }
    try {
      await projectPlan.save()
    } catch (err) {
      console.error('Failed to save:', err)
    }
  }, debounceMs)

  // Watch all field refs and trigger save
  watch(
    () => fieldRefs.map((ref) => ref.value),
    () => {
      if (loaded.value) {
        projectPlan.dirty = true
        debouncedSave()
      }
    },
  )

  onMounted(() => {
    loaded.value = true
  })

  return {
    loaded,
  }
}
