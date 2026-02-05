<script setup lang="ts">
import Card from '@/volt/Card.vue'
import ToolkitOverallPlan from './toolkit/ToolkitOverallPlan.vue'
import ToolkitHeading from './ui/ToolkitHeading.vue'
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8 pb-8 md:pb-16">
    <ToolkitHeading text="Your Project Plan" class="pt-4"></ToolkitHeading>
    <Card class="mb-4">
      <template #content>
        <div class="flex flex-col md:flex-row">
          <div>
            <p class="text-sm md:text-lg">
              <span class="pi pi-info-circle"></span> This section provides an overview of your
              project plan. Check out the
              <RouterLink to="/proposal/phase/05">Development Phase</RouterLink>
              in the toolkit for more details and guidance.
            </p>
          </div>
        </div></template
      >
    </Card>
    <ToolkitOverallPlan></ToolkitOverallPlan>
  </div>
</template>
