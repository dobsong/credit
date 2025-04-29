<script setup lang="ts">
import ToolkitFooter from './components/ToolkitFooter.vue'
import ToolkitHeader from './components/ToolkitHeader.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
</script>

<template>
  <ToolkitHeader></ToolkitHeader>
  <main role="main" class="flex relative items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-8 md:py-16">
      <RouterView></RouterView>
    </div>
  </main>
  <ToolkitFooter :theme="theme"></ToolkitFooter>
</template>

<style scoped></style>
