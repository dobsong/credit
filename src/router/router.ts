import CrestLandingPage from '@/components/CrestLandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ToolkitInitialEvaluation from '@/components/toolkit/ToolkitInitialEvaluation.vue'
import ToolkitIntroduction from '@/components/toolkit/ToolkitIntroduction.vue'
import ToolkitConsiderationPhase from '@/components/toolkit/ToolkitConsiderationPhase.vue'
import ToolkitPreparationPhase from '@/components/toolkit/ToolkitPreparationPhase.vue'
import ToolkitDevelopmentPhase from '@/components/toolkit/ToolkitDevelopmentPhase.vue'
import ToolkitLivePhase from '@/components/toolkit/ToolkitLivePhase.vue'
import ToolkitAnalysisPhase from '@/components/toolkit/ToolkitAnalysisPhase.vue'
import ToolkitLegacyPhase from '@/components/toolkit/ToolkitLegacyPhase.vue'
import ToolkitFinalSummary from '@/components/toolkit/ToolkitFinalSummary.vue'
import ToolkitFinalEvaluation from '@/components/toolkit/ToolkitFinalEvaluation.vue'
import ToolkitDataManagement from '@/components/toolkit/ToolkitDataManagement.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CrestLandingPage,
    },
    {
      path: '/proposal/phase/01',
      component: ToolkitIntroduction,
      alias: '/proposal/phase/1',
    },
    {
      path: '/proposal/phase/02',
      component: ToolkitInitialEvaluation,
      alias: '/proposal/phase/2',
    },
    {
      path: '/proposal/phase/03',
      component: ToolkitConsiderationPhase,
      alias: '/proposal/phase/3',
    },
    {
      path: '/proposal/phase/04',
      component: ToolkitPreparationPhase,
      alias: '/proposal/phase/4',
    },
    {
      path: '/proposal/phase/05',
      component: ToolkitDevelopmentPhase,
      alias: '/proposal/phase/5',
    },
    {
      path: '/proposal/phase/06',
      component: ToolkitLivePhase,
      alias: '/proposal/phase/6',
    },
    {
      path: '/proposal/phase/07',
      component: ToolkitAnalysisPhase,
      alias: '/proposal/phase/7',
    },
    {
      path: '/proposal/phase/08',
      component: ToolkitLegacyPhase,
      alias: '/proposal/phase/8',
    },
    {
      path: '/proposal/phase/09',
      component: ToolkitDataManagement,
      alias: '/proposal/phase/9',
    },
    {
      path: '/proposal/phase/10',
      component: ToolkitFinalSummary,
    },
    {
      path: '/proposal/phase/11',
      component: ToolkitFinalEvaluation,
    },
  ],
})
