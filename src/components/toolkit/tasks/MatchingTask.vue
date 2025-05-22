<script setup lang="ts">
import type { GlossaryDefinition } from '@/types/glossary-definition'
import Button from '@/volt/Button.vue'
import Chip from '@/volt/Chip.vue'
import { CheckIcon, TimesIcon } from '@primevue/icons'
import { ref, type Ref } from 'vue'

const props = defineProps<{
  items: GlossaryDefinition[]
}>()

// todo - make drag and drop work with touch events as well
// todo - add a "show answers" button
// todo - add some customisation around the text used

// note that the component works on a copy of the items array to avoid mutating the original
const itemsLocal: Ref<GlossaryDefinition[]> = ref([])
const definitions: Ref<string[]> = ref([])
const correct: Ref<(boolean | null)[]> = ref([])
let dropSucceeded = false

const initialiseAnswers = () => {
  // reset the local copy of the array based upon the items supplied in props
  itemsLocal.value = structuredClone(props.items)
  // initialise and shuffle the definitions to be assigned
  definitions.value = itemsLocal.value
    .map((item) => item.definition)
    .sort(() => Math.random() - 0.5)
  // remove the definitions from the initially shown items
  itemsLocal.value.forEach((item) => {
    item.definition = ''
  })
}

initialiseAnswers()

const resetMarks = () => {
  itemsLocal.value.forEach((item) => {
    correct.value[item.id] = null
  })
}

resetMarks()

const startDrag = (event: DragEvent, definition: string) => {
  resetMarks()
  dropSucceeded = false
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('definition', definition)
  }
}

const onDrop = (event: DragEvent, itemId: number) => {
  if (event.dataTransfer) {
    dropSucceeded = true
    const definition = event.dataTransfer?.getData('definition')

    // item that currently has this definition assigned
    const existingItem = itemsLocal.value.find((item) => item.definition === definition)

    const item = itemsLocal.value.find((item) => item.id === itemId)
    if (item && item !== existingItem) {
      if (item.definition) {
        // dropping over the top of an existing definition will swap them
        if (existingItem) {
          existingItem.definition = item.definition
        } else {
          // fall back to pop it out to the unassigned list if somethign unexpected happens
          definitions.value.push(item.definition)
        }
      } else if (existingItem) {
        existingItem.definition = ''
      }

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

// this is called when a drag operation from the table ends. So we can push the item back to the definitions list if not dropped to a valid drop zones
const onDragEnd = (event: DragEvent, definition: string) => {
  event.preventDefault()

  if (!dropSucceeded && event.dataTransfer) {
    event.dataTransfer.dropEffect = 'none'
    event.dataTransfer.effectAllowed = 'none'

    const existingItem = itemsLocal.value.find((item) => item.definition === definition)
    if (existingItem) {
      existingItem.definition = ''
      definitions.value.push(definition)
    }
  }
}

const checkAnswers = () => {
  props.items.forEach((actual) => {
    const answered = itemsLocal.value.find((item) => item.id === actual.id)

    if (!answered || !answered.definition) {
      correct.value[actual.id] = null
    } else {
      if (answered.definition === actual.definition) {
        correct.value[actual.id] = true
      } else {
        correct.value[actual.id] = false
      }
    }
  })
}
</script>

<template>
  <div class="pt-4 flex flex-wrap">
    <table
      class="w-full sm:w-1/2 table-fixed text-left border-collapse mb-4 border-1 border-solid border-gray-300"
    >
      <thead>
        <tr>
          <th class="w-32 p-2">Term</th>
          <th class="p-2">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in itemsLocal"
          :key="item.id"
          class="border-1 border-dashed border-gray-300"
        >
          <td class="p-2">{{ item.term }}</td>
          <td
            @drop="onDrop($event, item.id)"
            @dragover="onEnter($event)"
            @dragleave="onLeave($event)"
            @dragend="onDragEnd($event, item.definition)"
            class="justify-center items-center flex flex-wrap p-4 text-neutral-500 border-1 border-dashed border-gray-300"
          >
            <template v-if="item.definition">
              <Chip
                v-if="item.definition"
                :label="item.definition"
                class="m-1 definition w-full h-full cursor-move translate-x-0"
                draggable="true"
                @dragstart="startDrag($event, item.definition)"
              ></Chip>
              <Transition name="fade">
                <CheckIcon v-if="correct[item.id] === true" class="text-green-500"></CheckIcon>
              </Transition>
              <Transition name="fade">
                <TimesIcon v-if="correct[item.id] === false" class="text-red-500"></TimesIcon>
              </Transition>
            </template>
            <template v-else>Drag a definition here...</template>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full sm:w-2/5 ml-2">
      <h3 class="mb-2 font-bold">Drag these definitions to the matching term in the list</h3>
      <ul>
        <li v-for="defn in definitions" :key="defn">
          <Chip
            :label="defn"
            class="m-1 cursor-move term translate-x-0"
            draggable="true"
            @dragstart="startDrag($event, defn)"
          ></Chip>
        </li>
      </ul>
    </div>
    <Button label="Check Your Answers" class="mt-4 mr-4" @click="checkAnswers()"></Button>
    <Button label="Reset" class="mt-4" @click="initialiseAnswers()"></Button>
  </div>
</template>

<style scoped>
.drag-hover {
  background-color: var(--color-surface-500);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
