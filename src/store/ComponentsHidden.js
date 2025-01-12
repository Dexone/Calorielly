import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'

export const useComponents = defineStore('hiddenStore', {
    state: () => ({ login: false, add: false, scales: false, settings: false, registrationSteps: false }),
    actions: {
        showLogin() {
            this.login = !this.login
            this.add = false
            this.scales = false
            this.settings = false
        },
        showAdd() {
            this.add = !this.add
            this.login = false
            this.scales = false
            this.settings = false
        },
        showScales(){
            this.scales = !this.scales
            this.login = false
            this.add = false
            this.settings = false
        },
        showSettings(){
            this.settings = !this.settings
            this.scales = false
            this.login = false
            this.add = false
        }
    }
}
)