import { defineStore } from 'pinia';
import { ref } from 'vue'
import axios from 'axios';

export const useUser = defineStore('userStore', {
    state: () => ({
        axiosInfo: {"id": 1, "name": "Guest", "priems": 3, "max": 3000, "info": ["0",[],[],[]]}
    }
    ),
    getters: {
        getAxiosInfo: (state) => state.axiosInfo,
        getAxiosUser: (state) => state.axiosUser,
    },
    actions: {

    },
    persist: true
}
);