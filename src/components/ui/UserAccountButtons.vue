<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import { useProjectPlanStore } from '@/stores/projectPlan'
import Button from '@/volt/Button.vue'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const { authenticated, login } = useKeycloak()
const projectPlan = useProjectPlanStore()

onMounted(async () => {
  // Keycloak is already initialized in main.ts, so just handle post-init logic if needed
  if (!authenticated.value) {
    console.log('User is not authenticated')
  }
})

function handleLogin() {
  // Save current project plan data to localStorage before redirect
  projectPlan.saveToLocalStorage()
  login()
}
</script>

<template>
  <Button label="Login" @click="handleLogin" v-if="!authenticated" />
  <span v-else class="text-lg uppercase px-2 text-white">
    <RouterLink to="/profile"><span class="pi pi-user"></span></RouterLink>
  </span>
</template>
