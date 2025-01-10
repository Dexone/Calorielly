import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'

export const useComponents = defineStore('hiddenStore', {
    state: () => ({ login: false, add: false }),
    actions: {
        showLogin() {
            this.login = !this.login
            this.add = false
            // this.adjustment = true
            // this.obsl = true
        },
        showAdd() {
            this.add = !this.add
            this.login = false
            // this. adjustment = true
            // this.obsl = true
        },
        showAdjustment(){
            // this.adjustment = !this.adjustment
            // this.login = true
            // this.add = true
            // this.obsl = true
        },
        showObsl(){
            // this.obsl = !this.obsl
            // this.login = true
            // this.add = true
            // this.adjustment = true
        }
    }
}
)