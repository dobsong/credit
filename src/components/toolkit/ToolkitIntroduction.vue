<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Button from '@/volt/Button.vue'
import Card from '@/volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="w-full flex flex-col">
    <ToolkitHeading text="Introduction"></ToolkitHeading>
    <p>
      This introductory task encourages you to experience participatory research from the
      perspective of the participant. Insight from existing projects can be used to inform the
      development of your own project. For example, typology, good practice, and potential barriers
      to engagement methods.
    </p>
    <div class="w-full flex flex-wrap mb-4">
      <Card class="w-full md:w-23/48 overflow-hidden mb-2">
        <template #header>
          <img
            alt="Illustrative image showing a lightbulb"
            class="w-full"
            src="../../assets/lightbulb.png"
          />
        </template>
        <template #title>
          Have you ever participated in community research, such as a Citizen Science project as a
          non-expert?
        </template>
        <template #subtitle>
          <p class="m-0">
            Click on the button that displays your own previous engagement to reveal reflection
            points.
          </p>
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
      <div class="hidden md:block w-1/24"></div>
      <Card
        class="w-full md:w-23/48 overflow-hidden mb-2"
        v-if="projectPlan.previousEngagement === 'Yes'"
      >
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
        <template #footer> </template>
      </Card>
      <Card
        class="w-full md:w-23/48 overflow-hidden mb-2"
        v-if="projectPlan.previousEngagement === 'No'"
      >
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
      <Card class="w-full overflow-hidden">
        <template #title
          >Links to Participatory Research opportunities Lancaster University research
          projects</template
        >
        <template #content>
          <ul>
            <li>
              Lancaster University research projects
              <a
                href="https://www.lancaster.ac.uk/research/participate-in-research/"
                target="_blank"
                >Participate in Research - Lancaster University</a
              >
            </li>
            <li>
              SciStarter platform SciStarter -
              <a href="https://scistarter.org/" target="_blank">SciStarter</a>
            </li>
            <li>
              Zooniverse platform
              <a href="https://www.zooniverse.org/" target="_blank">Zooniverse</a>
            </li>
            <li>
              nQuire platform
              <a href="https://nquire.org.uk/" target="_blank">Home | nQuire</a>
            </li>
            <li>
              UK Centre for Ecology & Hydrology Citizen Science Apps
              <a
                href="https://www.ceh.ac.uk/our-science/citizen-science/citizen-science-apps"
                target="_blank"
                >Citizen science apps and projects | UK Centre for Ecology & Hydrology</a
              >
            </li>
          </ul></template
        >
      </Card>
    </div>
    <p>
      <ToolkitNextButton :phase="2" text="Initial Evaluation"> </ToolkitNextButton>
    </p>
  </div>
</template>

<style scoped></style>
