import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'

export const useComponents = defineStore('hiddenStore', {
    state: () => ({ login: false, add: false, scales: false }),
    actions: {
        showLogin() {
            this.login = !this.login
            this.add = false
            this.scales = false
            // this.adjustment = true
            // this.obsl = true
        },
        showAdd() {
            this.add = !this.add
            this.login = false
            this.scales = false
            // this. adjustment = true
            // this.obsl = true
        },
        showScales(){
            this.scales = !this.scales
            this.login = false
            this.add = false
        }
    }
}
)