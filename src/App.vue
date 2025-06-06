<script setup lang="ts">
import Toast from '@/volt/Toast.vue'
import ToolkitFooter from './components/ToolkitFooter.vue'
import ToolkitHeader from './components/ToolkitHeader.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
</script>

<template>
  <ToolkitHeader></ToolkitHeader>
  <main role="main" class="flex relative">
    <div class="container flex relative px-6 pt-4 pb-8 md:pb-16 md:pt-8">
      <RouterView></RouterView>
    </div>
  </main>
  <ToolkitFooter :theme="theme"></ToolkitFooter>
  <Toast />
</template>

<style scoped></style>
