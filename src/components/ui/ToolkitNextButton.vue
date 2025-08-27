<script setup lang="ts">
import Button from '@/volt/Button.vue'
import { RouterLink } from 'vue-router'
import ToolkitPhaseNavigation from './ToolkitPhaseNavigation.vue'

interface Props {
  text: string
  currentPhase: number
  showNavigation?: boolean
}
withDefaults(defineProps<Props>(), {
  showNavigation: () => true,
})
</script>

<template>
  <ToolkitPhaseNavigation v-if="showNavigation" :phase="currentPhase"></ToolkitPhaseNavigation>
  <div class="mt-4">
    <RouterLink
      v-slot="{ navigate }"
      :to="`/proposal/phase/${String(currentPhase + 3).padStart(2, '0')}`"
      custom
    >
      <Button @click="navigate" icon="pi pi-arrow-right" iconPos="right" :label="text"></Button>
    </RouterLink>
  </div>
</template>
