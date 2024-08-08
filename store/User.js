import { defineStore } from 'pinia';
import { ref } from 'vue'
import axios from 'axios';

export const useUser = defineStore('userStore', {
    state: () => ({
        userID: 2, userLogin: "dima", max: 2450
    }
    ),
    getters: {
    },
    actions: {

    },
    persist: true
}
);