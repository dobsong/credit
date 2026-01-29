import { type Ref } from 'vue'

/* For convenience, auth provider can be passed to stores and composables. It is a cut-down version of what is exposed by our keycloak composable */
export interface AuthProvider {
  authenticated?: Ref<boolean>
  getToken?: () => Promise<string | null>
}
