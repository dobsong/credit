<script setup lang="ts">
import Button from '@/volt/Button.vue'
import { RouterLink } from 'vue-router'

defineProps<{
  text: string
  phase: number
}>()
</script>

<template>
  <RouterLink
    v-slot="{ navigate }"
    :to="`/proposal/phase/${String(phase).padStart(2, '0')}`"
    custom
  >
    <Button @click="navigate">{{ text }}</Button>
  </RouterLink>
</template>
