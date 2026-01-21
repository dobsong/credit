<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import Button from '@/volt/Button.vue'
import { onMounted, ref } from 'vue'
import ToolkitHeading from './ToolkitHeading.vue'

const { authenticated, logout, loadUserInfo } = useKeycloak()

function handleLogout() {
  logout()
}

const userInfo = ref<Keycloak.KeycloakUserInfo | null>(null)

onMounted(async () => {
  if (authenticated.value && userInfo.value === null) {
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
    <div>Username: {{ userInfo?.preferred_username }}</div>
    <div>Email: {{ userInfo?.email }}</div>
    <Button label="Logout" @click="handleLogout" />
  </div>
  <div v-else class="mx-auto">You are not logged in</div>
</template>
