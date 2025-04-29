<script setup lang="ts">
import Button from '@/volt/Button.vue'
import Menu from '@/volt/Menu.vue'
import { ref } from 'vue'
const menu = ref()
const items = ref([
  {
    items: [
      {
        label: 'Home',
        route: '/',
      },
      {
        label: 'Develop a Proposal',
        route: '/proposal/phase/01',
      },
      {
        label: 'Case Studies',
        route: '/case-studies',
      },
      {
        label: 'Resources',
        route: '/resources',
      },
      {
        label: 'Glossary',
        route: '/glossary',
      },
    ],
  },
])
const toggle = (event: MouseEvent) => {
  menu.value.toggle(event)
}
</script>

<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <div class="text-4xl flex items-start py-1 md:py-2">
        <img
          alt="CREDIT logo"
          class="size-16 md:size-24 mr-6"
          src="/src/assets/logo_placeholder.svg"
        />
        <span class="my-auto font-[MuseoSans]">CREDIT</span>
      </div>
      <div class="flex items-center">
        <nav class="uppercase text-lg lg:flex items-center hidden font-semibold">
          <RouterLink to="/" class="py-2 px-4 flex">Home</RouterLink>
          <RouterLink to="/proposal/phase/01" class="py-2 px-4 flex">Develop a Proposal</RouterLink>
          <RouterLink to="/case-studies" class="py-2 px-4 flex">Case Studies</RouterLink>
          <RouterLink to="/resources" class="py-2 px-4 flex">Resources</RouterLink>
          <RouterLink to="/glossary" class="py-2 px-4 flex">Glossary</RouterLink>
        </nav>

        <Button
          type="button"
          plain
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="lg:hidden flex flex-col ml-2 bg-gray-800 dark:bg-white"
          >&#x2630;</Button
        >
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="pb-4">
          <template #item="{ item }">
            <RouterLink :to="item.route" class="text-lg uppercase px-2">
              {{ item.label }}
            </RouterLink>
          </template>
        </Menu>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
