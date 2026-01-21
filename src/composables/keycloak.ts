import Keycloak from 'keycloak-js'
import { readonly, ref } from 'vue'

// todo move Keycloak config to env vars
const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'credit',
  clientId: 'credit',
})

const authenticated = ref(false)
const isInitialized = ref(false)

export function useKeycloak() {
  return {
    keycloak: readonly(keycloak), // Read-only to prevent external mutations
    authenticated: readonly(authenticated),
    isInitialized: readonly(isInitialized),
    async init(options?: Keycloak.KeycloakInitOptions) {
      if (isInitialized.value) return authenticated.value
      try {
        authenticated.value = await keycloak.init({
          onLoad: 'check-sso',
          checkLoginIframe: false, // Disabled to avoid potential issues in some browsers
          responseMode: 'query', // This avoids problems because I am using hash routing to make the github pages versions of the app work
          ...options, // Allows provision of other custom init options in main.ts initialisation
        })
        isInitialized.value = true
        return authenticated.value
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error)
        throw error
      }
    },
    login(options?: Keycloak.KeycloakLoginOptions) {
      keycloak.login(options)
    },
    logout(options?: Keycloak.KeycloakLogoutOptions) {
      keycloak.logout(options)
    },
    async loadUserInfo(): Promise<Keycloak.KeycloakUserInfo> {
      return await keycloak.loadUserInfo()
    },
    // Add other methods as needed, e.g., loadUserProfile
  }
}
