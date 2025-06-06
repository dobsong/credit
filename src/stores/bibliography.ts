import type { Reference } from '@/types/reference'
import { defineStore } from 'pinia'

export const useBibliographyStore = defineStore('bibliography', {
  state: () => ({
    items: [] as Reference[],
  }),
  actions: {
    add(ref: Reference) {
      if (!this.items.find((item) => item.citation === ref.citation)) {
        this.items.push(ref)
      }
    },
    remove(ref: Reference) {
      this.items = this.items.filter((item) => item.citation !== ref.citation)
    },
    clear() {
      this.items = []
    },
  },
})
