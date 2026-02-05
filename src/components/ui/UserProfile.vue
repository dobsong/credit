<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import Button from '@/volt/Button.vue'
import { onMounted, ref } from 'vue'
import ToolkitHeading from './ToolkitHeading.vue'

const { authenticated, logout, loadUserInfo, getToken } = useKeycloak()

function handleLogout() {
  logout()
}

const userInfo = ref<Keycloak.KeycloakUserInfo | null>(null)

onMounted(async () => {
  if (authenticated.value && userInfo.value === null) {
    await getToken() // Ensure token is fresh when loadUserInfo is called
    try {
      userInfo.value = await loadUserInfo()
    } catch (error) {
      console.error('Failed to load user info:', error)
    }
  }
})
</script>
<template>
  <ToolkitHeading text="Your Account" class="py-4"></ToolkitHeading>
  <div v-if="authenticated" class="mx-auto">
    <div><b>Username</b>: {{ userInfo?.preferred_username }}</div>
    <div><b>Email</b>: {{ userInfo?.email }}</div>
    <div class="px-auto py-8 text-center"><Button label="Logout" @click="handleLogout" /></div>
  </div>
  <div v-else class="mx-auto">You are not logged in</div>
</template>
