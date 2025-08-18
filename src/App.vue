<script setup lang="ts">
import Toast from '@/volt/Toast.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ToolkitFooter from './components/ToolkitFooter.vue'
import ToolkitHeader from './components/ToolkitHeader.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const route = useRoute()
const showHeader = ref(true)

watch(
  () => route.path,
  (path) => {
    showHeader.value = path === '/' || path === '/about'
  },
)
</script>

<template>
  <ToolkitHeader :theme="theme"></ToolkitHeader>
  <main role="main">
    <div class="flex flex-col w-full md:">
      <RouterView></RouterView>
    </div>
  </main>
  <ToolkitFooter :theme="theme" v-if="showHeader"></ToolkitFooter>
  <Toast />
</template>

<style scoped></style>
