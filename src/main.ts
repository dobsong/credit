import './assets/main.css'

import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
  .use(router)
  .use(createPinia())
  .use(PrimeVue, {
    unstyled: true,
  })
  .mount('#app')
