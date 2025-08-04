<script setup lang="ts">
import { typologyDefinitions } from '@/data/typology-definitions'
import { useProjectPlanStore } from '@/stores/projectPlan'
import Button from '@/volt/Button.vue'
import Card from '@/volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'
import ToolkitReference from '../ui/ToolkitReference.vue'
import MatchingTask from './tasks/MatchingTask.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8">
    <ToolkitHeading text="Introduction"></ToolkitHeading>
    <p>
      This introductory task encourages you to experience participatory research from the
      perspective of the participant. Insight from existing projects can be used to inform the
      development of your own project. For example, typology, good practice, and potential barriers
      to engagement methods.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card class="overflow-hidden">
        <template #header>
          <img
            alt="Illustrative image showing a lightbulb"
            class="w-full"
            src="../../assets/lightbulb.png"
          />
        </template>
        <template #title>
          Before you start designing your community research, have you ever been a participant in
          community research, such as a citizen science project?
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button
              label="Yes"
              :variant="projectPlan.previousEngagement === 'Yes' ? '' : 'outlined'"
              class="w-full"
              @click="projectPlan.setPreviousEngagement('Yes')"
            />
            <Button
              label="No"
              :variant="projectPlan.previousEngagement === 'No' ? '' : 'outlined'"
              class="w-full"
              @click="projectPlan.setPreviousEngagement('No')"
            />
            <Button
              label="Not Sure"
              :variant="projectPlan.previousEngagement === 'Unknown' ? '' : 'outlined'"
              class="w-full"
              @click="projectPlan.setPreviousEngagement('Unknown')"
            />
          </div>
        </template>
      </Card>
      <Card v-if="projectPlan.previousEngagement === 'Unknown'">
        <template #subtitle>
          <p>
            Click on the button that displays your own previous engagement to reveal reflection
            points.
          </p>
        </template></Card
      >
      <Card class="overflow-hidden" v-if="projectPlan.previousEngagement === 'Yes'">
        <template #header>
          <img
            alt="Illustrative image showing a notepad"
            class="w-full"
            src="../../assets/notepad.png"
          />
        </template>
        <template #title>Reflections on your experience</template>
        <template #subtitle>
          <p class="m-0">Was it connected to your discipline or something different?</p>
          <p class="m-0">What did you particularly enjoy?</p>
          <p class="m-0">What challenges did you face as a participant?</p>
        </template>
      </Card>
      <Card class="overflow-hidden" v-if="projectPlan.previousEngagement === 'No'">
        <template #header>
          <img
            alt="Illustrative image showing users collaboarting on a laptop"
            class="w-full"
            src="../../assets/participate.png"
          />
        </template>
        <template #title>Participating on Zooniverse</template>
        <template #subtitle>
          <p class="m-0">
            Try the Zooniverse platform to find an online activity that you can contribute to at a
            time to suit you.
          </p>
          <p class="m-0">
            The Zooniverse platform can be accessed using the following link
            <a href="https://www.zooniverse.org/" target="_blank">Zooniverse</a>.
          </p>
          <p class="m-0">Reflect on your experience as a community user.</p>
        </template>
      </Card>
      <Card class="md:col-span-2">
        <template #title>Links to Participatory Research opportunities</template>
        <template #content>
          <ul class="list-disc pl-5">
            <li>
              <a
                href="https://www.lancaster.ac.uk/research/participate-in-research/"
                target="_blank"
                >Participate in Research - Lancaster University</a
              >
            </li>
            <li>
              <a href="https://scistarter.org/" target="_blank">SciStarter platform</a>
            </li>
            <li>
              <a href="https://www.zooniverse.org/" target="_blank">Zooniverse platform</a>
            </li>
            <li>
              <a href="https://nquire.org.uk/" target="_blank">nQuire platform</a>
            </li>
            <li>
              <a
                href="https://www.ceh.ac.uk/our-science/citizen-science/citizen-science-apps"
                target="_blank"
                >UK Centre for Ecology & Hydrology Citizen Science Apps</a
              >
            </li>
          </ul></template
        >
      </Card>
      <Card class="md:col-span-2">
        <template #title>Participatory research is a broad field</template>
        <template #content>
          <p>
            Match the activity focus to the definition to explore some approaches defined by
            <ToolkitReference
              shortDescription="Wiggins and Crowston (2015)"
              title="From conservation to crowdsourcing: A typology of citizen science"
              authors="Wiggins, A., & Crowston, K."
              citation="Wiggins, A., & Crowston, K. (2015). From conservation to crowdsourcing: A typology of citizen science. In Proceedings of the 44th Hawaii international conference on system sciences (pp. 1-10)."
              url="https://citsci.syr.edu/sites/crowston.syr.edu/files/hicss-44.pdf"
              :year="2015"
            ></ToolkitReference>
            in their typology study of citizen science.
          </p>
          <MatchingTask :items="typologyDefinitions"></MatchingTask>
        </template>
      </Card>
      <Card class="md:col-span-2">
        <template #title>Practitioner communities</template>
        <template #content>
          <p>
            Practitioner communities provide a range of information and opportunities, such as
            training, networking, and resources. Links are provided below for a couple of
            associations. You may like to browse these before continuing to the next phase of this
            toolkit.
          </p>

          <ul>
            <li>
              <a href="https://www.ecsa.ngo/" target="_blank"
                >European Citizen Science Association (ECSA)</a
              >
            </li>
            <li>
              <a href="https://eu-citizen.science/" target="_blank"
                >European Citizen Science Platform</a
              >
            </li>
            <li>
              <a href="https://participatorysciences.org/" target="_blank"
                >AAPS - Association for Advancing Participatory Sciences</a
              >
            </li>
          </ul>
        </template>
      </Card>
    </div>
    <p class="w-full mt-4 text-right">
      <ToolkitNextButton :phase="3" text="Get Started"></ToolkitNextButton>
      <!--<ToolkitNextButton :phase="2" text="Initial Evaluation"> </ToolkitNextButton>-->
    </p>
  </div>
</template>

<style scoped></style>
