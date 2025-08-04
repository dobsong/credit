<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full flex flex-wrap">
      <ToolkitHeading text="Data Management" class="w-full"></ToolkitHeading>
      <p>
        Any project that produces data, has responsibilities in how that data is collected, stored,
        and used.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>
          How accessible will the final data set be? Will participants and other researchers be able
          to access and use the data?
        </li>
        <li>Is any of the data you collected sensitive data?</li>
        <li>Are you GDPR compliant? If working in another overseas what are the data rules?</li>
      </ul>
      <p>
        A Data Management Plan encourages consideration before the project starts and for
        participatory project may link to the project Ethics plan. Lancaster University Template
        [TODO - Check link for updated template].
      </p>
      <p>TODO - [case study links - Windermere, Davy Notebooks]</p>
      <p>There are 7 key areas of data management to consider:</p>
      <ol class="pl-6 mb-4">
        <li>Data Collection</li>
        <li>Documentation and Metadata</li>
        <li>Storage, Backup and Security</li>
        <li>Ethics and Legal Compliance</li>
        <li>Data Selection and Preservation</li>
        <li>Data Sharing and Archiving</li>
        <li>Responsibilities and Resources</li>
      </ol>
      <p class="w-full mt-4 text-right">
        <ToolkitNextButton :phase="10" text="Final Summary"></ToolkitNextButton>
      </p>
    </div>
  </div>
  <img
    src="@/assets/ribbon_data.svg"
    class="w-full h-32 object-cover object-left sm:h-auto sm:object-contain"
    alt="Legacy Phase Image"
  />
</template>

<style scoped></style>
