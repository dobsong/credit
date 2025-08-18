<script setup lang="ts">
import { Motion } from 'motion-v'

const props = defineProps<{
  sectionId: string
  cssClass?: string
  slideInDirection: -1 | 1
}>()
</script>

<template>
  <Motion
    :initial="{ x: 300 * slideInDirection, opacity: 0, rotate: 5 * slideInDirection }"
    :animate="{
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 22 },
      rotate: 0,
    }"
    :visible="true"
    :once="true"
    class="w-full"
  >
    <section :id="props.sectionId" class="flex items-center justify-center">
      <div class="px-4 rounded-2xl mb-4" :class="props.cssClass">
        <slot></slot>
      </div>
    </section>
  </Motion>
</template>
