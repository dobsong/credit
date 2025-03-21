import CrestInitialEvaluation from '@/components/CrestInitialEvaluation.vue'
import CrestLandingPage from '@/components/CrestLandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CrestLandingPage,
    },
    {
      path: '/createProposal/step/01',
      component: CrestInitialEvaluation,
    },
  ],
})
