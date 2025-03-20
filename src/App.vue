<script setup lang="ts">
import CrestFooter from './components/CrestFooter.vue'
import CrestHeader from './components/CrestHeader.vue'
import CrestLandingPage from './components/CrestLandingPage.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
</script>

<template>
  <CrestHeader></CrestHeader>
  <main role="main" class="flex relative items-center overflow-hidden">
    <CrestLandingPage></CrestLandingPage>
  </main>
  <CrestFooter :theme="theme"></CrestFooter>
</template>

<style scoped></style>
