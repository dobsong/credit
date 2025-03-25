<script setup lang="ts"></script>

<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <div class="text-4xl flex items-start py-1 md:py-2">
        <img
          alt="CREST logo"
          class="size-16 md:size-24 mr-6"
          src="/src/assets/logo_placeholder.svg"
        />
        <span class="my-auto font-[MuseoSans]">CREST</span>
      </div>
      <div class="flex items-center">
        <nav class="uppercase text-lg lg:flex items-center hidden font-semibold">
          <RouterLink to="/" class="py-2 px-4 flex">Home</RouterLink>
          <RouterLink to="/proposal/phase/01" class="py-2 px-4 flex">Develop a Proposal</RouterLink>
          <a href="#" class="py-2 px-4 flex">Case Studies</a>
          <a href="#" class="py-2 px-4 flex">Resources</a>
          <a href="#" class="py-2 px-4 flex">Glossary</a>
        </nav>
        <button class="lg:hidden flex flex-col ml-4">
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
