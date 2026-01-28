import { onMounted, ref, watch, type Ref } from 'vue'

export function useProjectPlanAutoSave(
  projectPlan: any,
  fieldRefs: Ref[],
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

  // Debounced save
  const debouncedSave = debounce(async () => {
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
