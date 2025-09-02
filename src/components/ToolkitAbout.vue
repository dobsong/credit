<script setup lang="ts">
import ToolkitHeading from './ui/ToolkitHeading.vue'
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8">
    <ToolkitHeading text="About" class="mt-4"></ToolkitHeading>
    <p class="mb-4">
      This toolkit has been designed by members of the “Reimagining research practices: towards a
      sustainable, ethical and inclusive future” project team at Lancaster University, which brought
      together various departments and services within Lancaster University, including LICA, the
      Library, LEC, Psychology, and Research Services. Research staff who have previous experience
      in undertaking citizen science and community participatory research were interviewed to
      provide case studies and input into the content. The Reimagining Research Practices project
      was funded from 2024 to 2026 by the Wellcome Trust.
    </p>
    <h3 class="font-bold">Beta Version</h3>
    <p>
      We'd value any feedback you have to provide on this beta version. You can do so using our
      <a href="https://forms.office.com/e/xrv5N2XtvA" target="blank">feedback form</a>. In this
      early version of the toolkit we have not yet added the ability to login and save your project
      plan. Please be aware that refreshing your browser or navigating away will lose any unsaved
      data. We are working on this functionality for the full release. You can however export your
      plan as a PDF using the export button at the bottom of the
      <RouterLink to="/proposal/phase/05">Development phase</RouterLink> page.
    </p>
    <h3 class="font-bold">Contact</h3>
    <p>
      If you have any questions or further input please contact our Education Fellow
      <a href="mailto:v.seymour@lancaster.ac.uk">v.seymour@lancaster.ac.uk</a>
    </p>
    <h3 class="font-bold">Privacy</h3>
    <p>The beta version of the toolkit does not store or transmit any of your data.</p>
    <h3 class="font-bold">Accessibility</h3>
    <p class="mb-12">
      We are making every effort to make CREDIT accessible to as many people as possible. If you
      have difficulty accessing it we'd like to hear from you.
    </p>
  </div>
</template>
