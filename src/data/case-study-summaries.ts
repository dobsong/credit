import imgHUnique from '@/assets/h-unique_logo.png'
import imgDavy from '@/assets/humphry-davy.jpg'
import imgSudan from '@/assets/sudan_road_1.jpg'
import imgWinderemere from '@/assets/trine_windermere_2.jpg'
import imgYouthViews from '@/assets/youth_views.jpg'

import type { CaseStudySummary } from '@/types/caseStudySummary'

export const caseStudySummaries: CaseStudySummary[] = [
  {
    id: 1,
    summary:
      'Using Afrofuturism as a research method to encourage new possibilities for Black liberation in a world where racial inequalities persist.',
    title: 'Afrofuturism',
    imageSrc: imgYouthViews,
    route: 'afrofuturism',
    keywords: [
      'Co-creation',
      'Co-production',
      'Racial Justice',
      'Hard to Reach Communities',
      'Racially Minoritised Communities',
    ],
  },
  {
    id: 2,
    summary:
      "Crowd sourcing transcription of Sir Humphry Davy's nineteenth century notebooks to learn more about Davy, his work, and the relationship between poetry and science.",
    title: 'Davy Notebooks',
    imageSrc: imgDavy,
    route: 'davy-notebooks',
    keywords: [
      'Crowd sourcing',
      'Transcription',
      'Zooniverse',
      'Cultural Heritage',
      'Library',
      'Digital Collection',
    ],
  },
  {
    id: 3,
    summary:
      'Investigating the uniqueness of visible hand anatomy; building a large dataset with the help of volunteers; and revolutionary new technologies to automatically extract and compare key anatomical detail.',
    title: 'H-Unique',
    imageSrc: imgHUnique,
    route: 'h-unique',
    keywords: ['Computer Vision', 'Forensic Investigation', 'Dataset Building'],
  },
  {
    id: 4,
    summary:
      'Aiding the humanitarian supply chain in Sudan using data analysis via the Zooniverse platform to mark the location of where wadis (dry riverbeds) cross roads, and other pertinent information.',
    title: 'Sudan Road Access',
    imageSrc: imgSudan,
    route: 'sudan-road-access',
    keywords: [
      'Data analysis',
      'Zooniverse',
      'Dataset Building',
      'Disaster Relief and Resilience',
      'Astrophysics',
    ],
  },
  {
    id: 5,
    summary:
      'Working with citizen scientists to help assess the environmental health of Windermere by collecting and analysing water samples.',
    title: 'The Big Windermere Survey',
    imageSrc: imgWinderemere,
    route: 'big-windermere-survey',
    keywords: ['Citizen science', 'Data Collection', 'In Person', 'Environment'],
  },
]
