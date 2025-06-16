<script setup lang="ts">
import Button from '@/volt/Button.vue'
import Menu from '@/volt/Menu.vue'
import { ref } from 'vue'

defineProps<{
  theme: string
}>()

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
  <header class="h-24 sm:h-32 md:pb-4 pt-2">
    <div class="flex container mx-auto px-8">
      <RouterLink to="/">
        <img
          v-if="theme === 'dark'"
          alt="CREDIT logo"
          class="h-16 md:h-24 sm:mx-0"
          src="/src/assets/dark/credit-logo.svg"
        />
        <img
          v-else
          alt="CREDIT logo"
          class="h-16 md:h-24 sm:mx-0"
          src="/src/assets/credit-logo.svg"
        />
      </RouterLink>
      <nav
        class="uppercase lg:flex hidden font-semibold mt-auto ml-auto text-base lg:text-xl text-(--color-base-highlight) dark:text-white"
      >
        <RouterLink to="/" class="py-2 px-4 flex">Home</RouterLink>
        <RouterLink to="/proposal/phase/01" class="py-2 px-4 flex">Develop a Proposal</RouterLink>
        <RouterLink to="/case-studies" class="py-2 px-4 flex">Case Studies</RouterLink>
        <RouterLink to="/resources" class="py-2 px-4 flex">Resources</RouterLink>
        <RouterLink to="/glossary" class="py-2 px-4 flex">Glossary</RouterLink>
        <RouterLink to="/about" class="py-2 px-4 flex">About</RouterLink>
      </nav>

      <div class="flex flex-row items-baseline mt-auto ml-auto mr-6">
        <Button
          icon="pi pi-bookmark text-black dark:text-white"
          variant="text"
          @click="$router.push('/bibliography')"
          title="Your Bibliography"
          class="ml-2 enabled:hover:p-text:bg-primary-400"
        />
        <Button
          icon="pi pi-pen-to-square text-black dark:text-white"
          variant="text"
          class="enabled:hover:p-text:bg-primary-400"
          disabled
        />
        <Button icon="pi pi-clipboard text-black dark:text-white" variant="text" disabled />
        <Button
          variant="text"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          icon="pi pi-bars text-black dark:text-white"
          class="lg:hidden enabled:hover:p-text:bg-primary-400"
        ></Button>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
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
