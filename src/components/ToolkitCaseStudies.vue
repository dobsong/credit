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
      <li>
        <RouterLink to="case-studies/h-unique"> H-Unique </RouterLink>
      </li>
      <li>
        <RouterLink to="case-studies/sudan-road-access"> Sudan Road Access </RouterLink>
      </li>
      <li>
        <RouterLink to="case-studies/big-windermere-survey"> The Big Windermere Survey </RouterLink>
      </li>
    </ul>
  </div>
</template>
