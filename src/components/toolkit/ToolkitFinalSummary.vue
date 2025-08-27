<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '@/volt/Card.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto px-8 flex">
    <div class="w-full">
      <ToolkitHeading text="Summary & Next Steps"></ToolkitHeading>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Next Steps</h1>
          </template>
          <template #content>
            <p>
              Work with your team to develop your project plan, ethics plan, team roles tables, and
              data management plan. Copies of blank templates are available from the resources
              section.
            </p>
          </template>
        </Card>
        <Card>
          <template #title>
            <h1 class="font-black text-xl">Your Resources</h1>
          </template>
          <template #content>
            <p>
              <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span> - links to
              reading list project plan, notes, etc.
            </p>
          </template>
        </Card>
      </div>
      <p class="mt-4 w-full">
        <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span> TODO - signpost to
        give feedback
      </p>
    </div>
  </div>
</template>

<style scoped></style>
