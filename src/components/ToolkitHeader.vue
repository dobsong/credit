<script setup lang="ts">
import Menu from '@/volt/Menu.vue'
import SecondaryButton from '@/volt/SecondaryButton.vue'
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
      {
        label: 'About',
        route: '/about',
      },
    ],
  },
])
const toggle = (event: MouseEvent) => {
  menu.value.toggle(event)
}
</script>

<template>
  <header class="h-24 sm:h-32 flex">
    <div class="container mx-auto px-6 flex items-center text-lg">
      <img
        alt="CREDIT logo"
        class="size-16 md:size-24 mr-6"
        src="/src/assets/logo_placeholder.svg"
      />
      <span class="my-auto text-2xl font-[MuseoSans]">CREDIT</span>

      <nav class="uppercase lg:flex hidden font-semibold ml-auto">
        <RouterLink to="/" class="py-2 px-4 flex">Home</RouterLink>
        <RouterLink to="/proposal/phase/01" class="py-2 px-4 flex">Develop a Proposal</RouterLink>
        <RouterLink to="/case-studies" class="py-2 px-4 flex">Case Studies</RouterLink>
        <RouterLink to="/resources" class="py-2 px-4 flex">Resources</RouterLink>
        <RouterLink to="/glossary" class="py-2 px-4 flex">Glossary</RouterLink>
        <RouterLink to="/about" class="py-2 px-4 flex">About</RouterLink>
      </nav>
    </div>
    <SecondaryButton
      type="button"
      plain
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      class="lg:hidden flex flex-col ml-2"
      >&#x2630;</SecondaryButton
    >
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
      <template #item="{ item }">
        <RouterLink :to="item.route" class="text-lg uppercase px-2">
          {{ item.label }}
        </RouterLink>
      </template>
    </Menu>
    <div class="flex flex-row">
      <SecondaryButton
        icon="pi pi-bookmark-fill"
        class="mr-2"
        text
        @click="$router.push('/bibliography')"
        title="Your Bibliography"
      />
      <SecondaryButton icon="pi pi-pen-to-square" class="mr-2" text />
      <SecondaryButton icon="pi pi-clipboard" severity="secondary" text />
    </div>
  </header>
</template>

<style scoped></style>
