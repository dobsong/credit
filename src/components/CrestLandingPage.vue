<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mx-auto px-6 flex relative py-8 md:py-16">
    <div class="w-full sm:w-3/5 flex flex-col relative">
      <h1 class="uppercase text-3xl md:text-6xl font-[MuseoSans] flex flex-col mb-4">
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
        consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec tempor odio nec suscipit semper. Donec neque erat, semper nec
        urna mollis, placerat fringilla urna.
      </p>
      <div class="flex mt-8 justify-center sm:justify-start">
        <RouterLink
          to="/createProposal/step/01"
          class="uppercase py-2 px-4 rounded-lg bg-highlight border-2 border-transparent text-white dark:text-gray-800 text-md hover:bg-highlight-hover"
        >
          Create Proposal
        </RouterLink>
      </div>
    </div>
    <div class="hidden sm:block">
      <img
        src="https://unsplash.it/400/400"
        class="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg my-auto mx-6"
      />
    </div>
  </div>
</template>

<style scoped></style>
