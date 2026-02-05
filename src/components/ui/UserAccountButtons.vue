<script setup lang="ts">
import { useKeycloak } from '@/composables/keycloak'
import { useBibliographyStore } from '@/stores/bibliography'
import { useProjectPlanStore } from '@/stores/projectPlan'
import Button from '@/volt/Button.vue'
import Card from '@/volt/Card.vue'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const { authenticated, login } = useKeycloak()
const projectPlan = useProjectPlanStore()
const bibliography = useBibliographyStore()
const showConsent = ref(false)

onMounted(async () => {
  // Keycloak is already initialized in main.ts, so just handle post-init logic if needed
  if (!authenticated.value) {
    console.log('User is not authenticated')
  }
})

// Check cookie consent cookie
function getCookie(name: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()!.split(';').shift()
  return null
}

// Set cookie consent cookie
function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`
}

function proceedToLogin() {
  // Save current project plan data to localStorage before redirect
  projectPlan.saveToLocalStorage()
  // Also save bibliography items if any (store may optionally expose this). Awkward syntax is trying to avoid type checker complaining about "any"!
  const maybeSave = (bibliography as unknown as { saveToLocalStorage?: () => void })
    .saveToLocalStorage
  if (maybeSave) maybeSave()
  login()
}

function handleLogin() {
  // Only show consent if not already given
  if (!getCookie('cookie_consent')) {
    showConsent.value = true
    return
  }
  proceedToLogin()
}

function acceptCookiesAndLogin() {
  setCookie('cookie_consent', 'accepted', 365)
  showConsent.value = false
  proceedToLogin()
}

function declineCookies() {
  // Do not set cookie, just hide dialog and do not proceed to login
  showConsent.value = false
}
</script>

<template>
  <a
    label="Login"
    @click="handleLogin"
    v-if="!authenticated"
    class="uppercase font-semibold ml-8 text-base lg:text-lg text-white cursor-pointer"
    >Login</a
  >
  <span v-else class="text-lg uppercase px-2 text-white hov">
    <RouterLink to="/profile"><span class="pi pi-user"></span></RouterLink>
  </span>
  <Card v-if="showConsent" class="fixed bottom-6 right-6 w-80 z-50">
    <template #content>
      <div>
        <h4 class="font-bold mb-2">Cookie consent</h4>
        <p class="text-sm mb-4">
          We use cookies only for authentication when you login. No tracking, or other cookies are
          used. Do you accept this?
        </p>
        <div class="flex gap-2 justify-end">
          <Button @click="declineCookies" variant="outlined" class="px-3 py-1">Decline</Button>
          <Button @click="acceptCookiesAndLogin" class="px-3 py-1">Accept & Login</Button>
        </div>
      </div>
    </template>
  </Card>
</template>
