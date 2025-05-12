<script setup lang="ts">
import type { GlossaryDefinition } from '@/types/glossary-definition'
import Button from '@/volt/Button.vue'
import Chip from '@/volt/Chip.vue'
import { CheckIcon, TimesIcon } from '@primevue/icons'
import { ref, type Ref } from 'vue'

const props = defineProps<{
  items: GlossaryDefinition[]
}>()

// todo - add a "show answers" button
// todo - add some customisation around the text used

// note that the component works on a copy of the items array to avoid mutating the original
const itemsLocal = ref<GlossaryDefinition[]>(structuredClone(props.items))

// shuffle the definitions
const definitions = ref(
  itemsLocal.value.map((item) => item.definition).sort(() => Math.random() - 0.5),
)

const correct: Ref<(boolean | null)[]> = ref([])

itemsLocal.value.forEach((item) => {
  correct.value[item.id] = null
})

// remove the definitions from the initially shown items
itemsLocal.value.forEach((item) => {
  item.definition = ''
})

const startDrag = (event: DragEvent, definition: string) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('definition', definition)
  }
}

const onDrop = (event: DragEvent, itemId: number) => {
  if (event.dataTransfer) {
    const definition = event.dataTransfer?.getData('definition')

    const existingItem = itemsLocal.value.find((item) => item.definition === definition)

    const item = itemsLocal.value.find((item) => item.id === itemId)
    if (item && item !== existingItem) {
      if (item.definition) {
        // dropping over the top of an existing definition will swap them
        if (existingItem) {
          existingItem.definition = item.definition
        } else {
          // fall back to pop it out to the unassigned list if somethign unexpecetd happens
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
            <template v-if="item.definition">
              <Chip
                v-if="item.definition"
                :label="item.definition"
                class="m-1 definition w-full h-full cursor-grab translate-x-0"
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
    <div class="w-full md:w-2/5 ml-2">
      <h3 class="mb-2 font-bold">Drag these definitions to the matching term in the list</h3>
      <ul>
        <li v-for="defn in definitions" :key="defn">
          <Chip
            :label="defn"
            class="m-1 cursor-grab term translate-x-0"
            draggable="true"
            @dragstart="startDrag($event, defn)"
          ></Chip>
        </li>
      </ul>
    </div>
    <Button label="Check Your Answers" class="mt-4" @click="checkAnswers()"></Button>
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
