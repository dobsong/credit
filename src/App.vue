<script setup lang="ts">
import Toast from '@/volt/Toast.vue'
import ToolkitFooter from './components/ToolkitFooter.vue'
import ToolkitHeader from './components/ToolkitHeader.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
</script>

<template>
  <ToolkitHeader :theme="theme"></ToolkitHeader>
  <main role="main">
    <div class="flex flex-col pt-4 md:pt-8 w-full">
      <RouterView></RouterView>
    </div>
  </main>
  <ToolkitFooter :theme="theme"></ToolkitFooter>
  <Toast />
</template>

<style scoped></style>
