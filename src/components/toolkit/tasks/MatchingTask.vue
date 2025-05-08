<script setup lang="ts">
import type { GlossaryDefinition } from '@/types/glossary-definition'
import Chip from '@/volt/Chip.vue'
import { ref } from 'vue'

const props = defineProps<{
  items: GlossaryDefinition[]
}>()

// note that the component works on a copy of the items array to avoid mutating the original
const itemsLocal = ref<GlossaryDefinition[]>(Object.assign([], props.items))

// shuffle the definitions
const definitions = ref(
  itemsLocal.value.map((item) => item.definition).sort(() => Math.random() - 0.5),
)

// remove the definitions from the initially shown items
itemsLocal.value.forEach((item) => {
  item.definition = ''
})

const startDrag = (event: DragEvent, definition: string) => {
  console.log('startDrag', event)
  console.log('definition', definition)
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('definition', definition)
  }
}

const onDrop = (event: DragEvent, itemId: number) => {
  console.log('onDrop', event)
  if (event.dataTransfer) {
    const definition = event.dataTransfer?.getData('definition')
    const item = itemsLocal.value.find((item) => item.id === itemId)
    console.log('item', item)
    console.log('definition', definition)
    if (item) {
      item.definition = definition
      definitions.value = definitions.value.filter((def) => def !== definition)
    }
  }
  if (event.target && event.target instanceof HTMLElement) {
    event.target.classList.remove('drag-hover')
  }
}

const onEnter = (event: DragEvent) => {
  event.preventDefault()
  if (event.target && event.target instanceof HTMLElement) {
    event.target.classList.add('drag-hover')
  }
}

const onLeave = (event: DragEvent) => {
  event.preventDefault()
  if (event.target && event.target instanceof HTMLElement) {
    event.target.classList.remove('drag-hover')
  }
}
</script>

<template>
  <div class="pt-4 flex">
    <table class="w-full md:w-1/2 table-fixed text-left border-collapse">
      <thead>
        <tr>
          <th class="w-32 p-2">Term</th>
          <th class="p-2">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itemsLocal" :key="item.id">
          <td class="p-2">{{ item.term }}</td>
          <td
            @drop="onDrop($event, item.id)"
            @dragover="onEnter($event)"
            @dragleave="onLeave($event)"
            class="justify-center items-center flex flex-wrap border-1 border-dashed border-gray-300 p-2 text-neutral-500"
          >
            <Chip
              v-if="item.definition"
              :label="item.definition"
              class="m-1 definition w-full h-full"
            ></Chip>
            <template v-else>Choose a definition...</template>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full md:w-1/2 ml-2">
      <h3 class="mb-2">Drag these definitions to the matching term in the list</h3>
      <ul>
        <li v-for="item in definitions" :key="item">
          <Chip
            :label="item"
            class="m-1 cursor-grab term translate-x-0"
            draggable="true"
            @dragstart="startDrag($event, item)"
          ></Chip>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.drag-hover {
  background-color: gray;
}
</style>
