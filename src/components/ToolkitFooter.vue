<script setup lang="ts">
defineProps<{
  theme: string
}>()
</script>

<template>
  <div class="w-full bg-[var(--color-base-highlight)] -z-50">
    <footer
      class="flex flex-wrap gap-y-4 justify-between container mx-auto px-8 pb-6 pt-4 sm:pt-10"
    >
      <div class="w-full md:w-1/3">
        <img
          id="lu-logo"
          alt="Lancaster University logo"
          src="../assets/dark/lu-logo.svg"
          class="h-[60px] lg:h-25 xl:h-25 w-auto mx-auto md:ml-2"
        />
      </div>
      <div class="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end gap-y-4">
        <img
          id="rrp-logo"
          src="../assets/dark/rrp-logo.svg"
          alt="Reimagining Research Culture Logo"
          class="h-[50px] lg:h-25 w-full sm:w-auto md:max-w-1/2"
        />
        <img
          id="rrp-inclusion-logo"
          src="./../assets/rrp-inclusion.svg"
          alt="Inclusion Logo"
          class="size-[70px] lg:size-25 xl:size-30 ml-[7px] lg:ml-5 xl:ml-6 w-auto"
        />
        <img
          id="wellcome-logo"
          alt="Wellcome logo"
          src="./../assets/wellcome_logo_red_20_web.svg"
          class="size-[70px] lg:size-25 xl:size-30 mx-[7px] lg:mx-5 xl:mx-6 w-auto"
        />
      </div>
    </footer>
  </div>
  <p class="text-center text-sm py-2 w-full">
    Funded by Wellcome. Email:
    <a href="mailto:openaccess@lancaster.ac.uk">openaccess@lancaster.ac.uk</a>
    <!-- Licence details under consideration
    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
      <img src="./../assets/cc_by.png" alt="Creative Commons Licence" class="mx-auto h-10 p-1" />
    </a>
    -->
  </p>
</template>

<style scoped></style>
