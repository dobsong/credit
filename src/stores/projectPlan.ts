import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useProjectPlanStore = defineStore('projectPlan', () => {
  /* state */
  const hasStarted: Ref<boolean> = ref(false)
  const projectSize: Ref<'Large' | 'Small' | 'Unknown'> = ref('Unknown')
  const country: Ref<'United Kingdom' | 'Other' | 'Unknown'> = ref('Unknown')
  const projectTitle: Ref<string> = ref('')
  const projectDescription: Ref<string> = ref('')

  /* getters */
  //const doubleCount = computed(() => count.value * 2)

  /* actions */
  function enable() {
    if (!hasStarted.value) {
      hasStarted.value = true
    }
  }

  return { projectSize, country, hasStarted, projectTitle, projectDescription, enable }
})
