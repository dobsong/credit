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
  <section id="header">
    <header class="pt-2 pb-4 md:pt-3 md:pb-6 lg:pt-4 lg:pb-8 bg-cyan-900">
      <div class="flex container mx-auto pl-4">
        <RouterLink to="/">
          <img
            alt="CREDIT logo"
            class="h-10 md:h-14 lg:h-16"
            src="/src/assets/dark/credit-logo.svg"
          />
        </RouterLink>
        <nav
          class="uppercase lg:flex hidden font-semibold mt-auto ml-auto text-base lg:text-xl text-white"
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
            icon="pi pi-bookmark text-white"
            variant="text"
            @click="$router.push('/bibliography')"
            title="Your Bibliography"
            class="ml-2 enabled:hover:p-text:bg-primary-400"
          />
          <Button
            icon="pi pi-pen-to-square text-white"
            variant="text"
            class="enabled:hover:p-text:bg-primary-400"
            disabled
          />
          <Button icon="pi pi-clipboard text-white" variant="text" disabled />
          <Button
            variant="text"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            icon="pi pi-bars text-white"
            class="lg:hidden enabled:hover:p-text:bg-primary-400"
          ></Button>
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="pb-6">
            <template #item="{ item }">
              <RouterLink :to="item.route" class="text-lg uppercase px-2">
                {{ item.label }}
              </RouterLink>
            </template>
          </Menu>
        </div>
      </div>
    </header>
  </section>
</template>
