import './assets/main.css'

import { createPinia } from 'pinia'
import { ToastService } from 'primevue'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
  .use(router)
  .use(createPinia())
  .use(PrimeVue, {
    unstyled: true,
  })
  .use(ToastService)
  .mount('#app')
