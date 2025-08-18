<script setup lang="ts">
import ToolkitHeading from './ui/ToolkitHeading.vue'
</script>

<template>
  <div class="w-full flex flex-col container mx-auto px-8">
    <ToolkitHeading text="Case Studies"></ToolkitHeading>
    <ul>
      <li>
        <RouterLink to="case-studies/afrofuturism"> Afrofuturism </RouterLink>
      </li>
      <li>
        <RouterLink to="case-studies/davy-notebooks"> Davy Notebooks </RouterLink>
      </li>
    </ul>
  </div>
</template>
