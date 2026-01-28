<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import Button from '@/volt/Button.vue'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const { authenticated, login } = useKeycloak()

onMounted(async () => {
  // Keycloak is already initialized in main.ts, so just handle post-init logic if needed
  if (!authenticated.value) {
    console.log('User is not authenticated')
  }
})

function handleLogin() {
  login()
}
</script>

<template>
  <Button label="Login" @click="handleLogin" v-if="!authenticated" />
  <span v-else class="text-lg uppercase px-2 text-white">
    <RouterLink to="/profile"><span class="pi pi-user"></span></RouterLink>
  </span>
</template>
