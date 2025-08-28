import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useComponents = defineStore('hiddenStore', {
  state: () => ({
    add: false,
    registrationSteps: false,
  }),
  actions: {
    showAdd() {
      this.add = !this.add
    },
  },
})
