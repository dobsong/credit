<script setup lang="ts">
import Button from '@/volt/Button.vue'
import Dialog from '@/volt/Dialog.vue'
import { ref } from 'vue'

const dialogVisible = ref(false)
const selectedRole = ref('')

const leftRoles = [
  'Project Leader',
  'Data Manager',
  'Ethics Champion',
  'Technologist',
  'Researchers/Scientists',
  'Participant Coordinator/Community Manager',
  'Communicator',
  'Educator/Trainer',
]
const rightRoles = [
  'Community Partner',
  'Participants/Volunteers',
  'Testers',
  'Moderators',
  'Ambassadors',
  'Educators',
]
function handleClick(role: string) {
  selectedRole.value = role
  dialogVisible.value = true
}

const roleDescriptions: Record<string, string> = {
  'Project Leader':
    'Chairs meetings. Could be an opportunity for someone on the team to gain leadership skills with the PI as a mentor.',
  'Data Manager': 'Oversees Data Management Plan development and implementation.',
  'Ethics Champion':
    'Champions ethical considerations in meetings to ensure considered at early stage of project.',
  Technologist: 'Develops supporting digital objects such as website and app design.',
  'Researchers/Scientists':
    'Design methodology for collection and analysis of data. Evaluate project data.',
  'Participant Coordinator/Community Manager': 'Point of contact for participants.',
  Communicator: 'Promotion and engagement with participants and more broadly.',
  'Educator/Trainer':
    'Identify training needs of participants and develop resources (e.g., tutorials, guides).',
  'Community Partner': 'This could be a community group that you are working directly with.',
  'Participants/Volunteers':
    'These maybe targeted or more general, depending on the role your participants are taking.',
  Testers: 'Test project resources (e.g., apps).',
  Moderators: 'Participants who take on additional role to monitor and report content.',
  Ambassadors: 'Participants who take on additional role to promote project.',
  Educators:
    'Support participation and legacy. Use project participation or data for educational purposes.',
}
</script>

<template>
  <div class="flex items-center">
    <!-- Left side boxes -->
    <div class="flex flex-col gap-3">
      <Button
        v-for="(role, i) in leftRoles"
        :key="role"
        :label="role"
        :id="`left-${i}`"
        @click="handleClick(role)"
      />
    </div>
    <!-- Center icon -->
    <div class="flex flex-col items-center mx-8">
      <img src="@/assets/users.svg" alt="Users" class="w-20 h-20" />
    </div>
    <!-- Right side boxes -->
    <div class="flex flex-col gap-3">
      <Button
        v-for="(role, i) in rightRoles"
        :key="role"
        :label="role"
        :id="`right-${i}`"
        @click="handleClick(role)"
      />
    </div>
  </div>
  <Dialog v-model:visible="dialogVisible" modal :header="selectedRole" class="sm:w-100 w-9/10">
    <div>{{ roleDescriptions[selectedRole] }}</div>
  </Dialog>
  <p class="mt-4">
    <span class="pi pi-exclamation-triangle text-orange-500 mr-2"></span>TODO - Need a more compact
    small-screen version!
  </p>
</template>
