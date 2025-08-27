import CaseStudyAfrofuturism from '@/components/toolkit/case-studies/CaseStudyAfrofuturism.vue'
import CaseStudyBigWindermereSurvey from '@/components/toolkit/case-studies/CaseStudyBigWindermereSurvey.vue'
import CaseStudyDavyNotebooks from '@/components/toolkit/case-studies/CaseStudyDavyNotebooks.vue'
import CaseStudyHUnique from '@/components/toolkit/case-studies/CaseStudyHUnique.vue'
import CaseStudySudanRoadAccess from '@/components/toolkit/case-studies/CaseStudySudanRoadAccess.vue'
import ToolkitAnalysisPhase from '@/components/toolkit/ToolkitAnalysisPhase.vue'
import ToolkitConsiderationPhase from '@/components/toolkit/ToolkitConsiderationPhase.vue'
import ToolkitDataManagement from '@/components/toolkit/ToolkitDataManagement.vue'
import ToolkitDevelopmentPhase from '@/components/toolkit/ToolkitDevelopmentPhase.vue'
import ToolkitFinalEvaluation from '@/components/toolkit/ToolkitFinalEvaluation.vue'
import ToolkitFinalSummary from '@/components/toolkit/ToolkitFinalSummary.vue'
import ToolkitInitialEvaluation from '@/components/toolkit/ToolkitInitialEvaluation.vue'
import ToolkitIntroduction from '@/components/toolkit/ToolkitIntroduction.vue'
import ToolkitLegacyPhase from '@/components/toolkit/ToolkitLegacyPhase.vue'
import ToolkitLivePhase from '@/components/toolkit/ToolkitLivePhase.vue'
import ToolkitPreparationPhase from '@/components/toolkit/ToolkitPreparationPhase.vue'
import ToolkitAbout from '@/components/ToolkitAbout.vue'
import ToolkitBibliography from '@/components/ToolkitBibliography.vue'
import ToolkitCaseStudies from '@/components/ToolkitCaseStudies.vue'
import ToolkitGlossary from '@/components/ToolkitGlossary.vue'
import ToolkitLandingPage from '@/components/ToolkitLandingPage.vue'
import ToolkitResources from '@/components/ToolkitResources.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ToolkitLandingPage,
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
    {
      path: '/case-studies',
      component: ToolkitCaseStudies,
    },
    {
      path: '/case-studies/afrofuturism',
      component: CaseStudyAfrofuturism,
    },
    {
      path: '/case-studies/davy-notebooks',
      component: CaseStudyDavyNotebooks,
    },
    {
      path: '/case-studies/h-unique',
      component: CaseStudyHUnique,
    },
    {
      path: '/case-studies/sudan-road-access',
      component: CaseStudySudanRoadAccess,
    },
    {
      path: '/case-studies/big-windermere-survey',
      component: CaseStudyBigWindermereSurvey,
    },
    {
      path: '/resources',
      component: ToolkitResources,
    },
    {
      path: '/glossary',
      component: ToolkitGlossary,
    },
    {
      path: '/about',
      component: ToolkitAbout,
    },
    {
      path: '/bibliography',
      component: ToolkitBibliography,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
