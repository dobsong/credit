<script setup lang="ts">
import { useProjectPlanStore } from '@/stores/projectPlan'
import Card from '@/volt/Card.vue'
import RadioButton from '@/volt/RadioButton.vue'
import ToolkitHeading from '../ui/ToolkitHeading.vue'
import ToolkitNextButton from '../ui/ToolkitNextButton.vue'

const projectPlan = useProjectPlanStore()
projectPlan.enable()
</script>

<template>
  <div class="container mx-auto w-full flex flex-col">
    <ToolkitHeading text="About Your Project"></ToolkitHeading>
    <p>
      Please select from the choices below. These choices will affect the content you see as you
      progress through the toolkit. Select &quot;unknown&quot; if you are unsure or want to see all
      content.
    </p>
    <div class="grid grid-cols-2 gap-2 mb-4">
      <Card>
        <template #title>Project Size</template>
        <template #content>
          <div class="flex justify-center">
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.projectSize"
                  inputId="projectSizeSmall"
                  name="small"
                  value="Small"
                />
                <label for="projectSizeSmall">Small</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.projectSize"
                  inputId="projectSizeMedium"
                  name="medium"
                  value="Medium"
                />
                <label for="projectSizeMedium">Medium</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.projectSize"
                  inputId="projectSizeLarge"
                  name="large"
                  value="Large"
                />
                <label for="projectSizeLarge">Large</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.projectSize"
                  inputId="projectSizeUnknown"
                  name="unknown"
                  value="Unknown"
                />
                <label for="projectSizeUnknown">Unknown</label>
              </div>
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>Location</template>
        <template #content>
          <div class="flex justify-center">
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.country"
                  inputId="projectLocationOther"
                  name="other"
                  value="Other"
                />
                <label for="projectLocationOther">Non-UK</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.country"
                  inputId="projectLocationUk"
                  name="uk"
                  value="UK"
                />
                <label for="projectLocationUk">UK</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="projectPlan.country"
                  inputId="projectLocationUnknown"
                  name="locationUnkown"
                  value="Unknown"
                />
                <label for="projectLocationUnknown">Unkown</label>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div>
      <ToolkitNextButton :currentPhase="3" text="Get Started"></ToolkitNextButton>
    </div>
  </div>
</template>
