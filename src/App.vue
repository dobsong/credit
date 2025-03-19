<script setup lang="ts">
import CrestFooter from './components/CrestFooter.vue'

const theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
</script>

<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <div class="font-black text-3xl flex items-start py-2">
        <img alt="CREST logo" class="size-16 mr-6" src="./assets/logo_placeholder.svg" />
        <span class="my-auto">CREST</span>
      </div>
      <div class="flex items-center">
        <nav class="font-sen uppercase text-lg lg:flex items-center hidden">
          <a href="#" class="py-2 px-6 flex"> Home </a>
          <a href="#" class="py-2 px-6 flex"> Create Proposal </a>
          <a href="#" class="py-2 px-6 flex"> Case Studies </a>
          <a href="#" class="py-2 px-6 flex"> Catalogue </a>
          <a href="#" class="py-2 px-6 flex"> Glossary </a>
          <a href="#" class="py-2 px-6 flex"> About </a>
        </nav>
        <button class="lg:hidden flex flex-col ml-4">
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        </button>
      </div>
    </div>
  </header>
  <main role="main" class="flex relative items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-8 md:py-16">
      <div class="w-full sm:w-3/5 flex flex-col relative">
        <h1 class="font-bebas-neue uppercase text-3xl md:text-6xl font-black flex flex-col mb-4">
          Community Research Toolkit
        </h1>
        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-8"> </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis purus id felis
          imperdiet consectetur et sed quam. Aenean quis commodo justo. Cras quis sapien nec odio
          faucibus dignissim tempor ac libero. Donec ut risus ultrices, venenatis augue non, dapibus
          eros. Nullam in cursus enim. Sed ante tellus, viverra ut pretium mollis, finibus maximus
          mauris. Aenean tincidunt elit in venenatis consequat. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Nullam sed mauris sed libero lacinia imperdiet non aliquam erat.
          In id metus at ipsum interdum cursus ut sed lacus. Integer porta auctor leo, vitae iaculis
          risus vestibulum at. Nam posuere sit amet lorem in facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec tempor odio nec suscipit semper. Donec neque erat,
          semper nec urna mollis, placerat fringilla urna.
        </p>
        <div class="flex mt-8 justify-center md:justify-start">
          <a
            href="#"
            class="uppercase py-2 px-4 rounded-lg bg-[#F15D5C] border-2 border-transparent text-white dark:text-gray-800 text-md hover:bg-[#FF8D8C]"
          >
            Create Proposal
          </a>
        </div>
      </div>
      <div class="hidden sm:block w-2/5 relative">
        <img
          src="https://unsplash.it/400/400"
          class="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg my-auto mx-6"
        />
      </div>
    </div>
  </main>
  <CrestFooter :theme="theme"></CrestFooter>
</template>

<style scoped></style>
