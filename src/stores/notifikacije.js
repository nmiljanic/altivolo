import { defineStore } from 'pinia'

let counter = 1

export const useNotifStore = defineStore('notifikacije', {
  state: () => ({ items: [] }),
  actions: {
    push({ type = 'info', message }) {
      this.items.unshift({ id: counter++, type, message, time: Date.now() })
      if (this.items.length > 10) this.items.pop()
    }
  }
})
