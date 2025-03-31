<script setup lang="ts">
import CrestFooter from './components/CrestFooter.vue'
import CrestHeader from './components/CrestHeader.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
</script>

<template>
  <CrestHeader></CrestHeader>
  <main role="main" class="flex relative items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-8 md:py-16">
      <RouterView></RouterView>
    </div>
  </main>
  <CrestFooter :theme="theme"></CrestFooter>
</template>

<style scoped></style>
