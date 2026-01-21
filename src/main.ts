import './assets/main.css'

import { createPinia } from 'pinia'
import { ToastService } from 'primevue'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import { useKeycloak } from './composables/keycloak'
import router from './router/router'

const app = createApp(App)

// Initialize Keycloak before router setup
const { init } = useKeycloak()

init()
  .then(() => {
    app
      .use(router)
      .use(createPinia())
      .use(PrimeVue, {
        unstyled: true,
      })
      .use(ToastService)
      .mount('#app')
  })
  .catch((error: string) => {
    console.error('Keycloak init failed:', error)
  })
