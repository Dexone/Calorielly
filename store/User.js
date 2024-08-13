import { defineStore } from 'pinia';
import { ref } from 'vue'
import axios from 'axios';

export const useUser = defineStore('userStore', {
    state: () => ({
        axiosInfo: {"id": 2, "max": "0", "time": 0, "info": ["0",[],[],[]]}
    }
    ),
    getters: {
        getAxiosInfo: (state) => state.axiosInfo,
    },
    actions: {
        downFromServer() {
            axios.get(`https://dexone.ru/backend_calorie/data/${this.axiosInfo.id}`).then((res) => {
                this.axiosInfo = res.data
                console.log('скачано с сервера')
            })
        },

        upToServer() {
            axios.patch(`https://dexone.ru/backend_calorie/data/${this.axiosInfo.id}`, { max: this.axiosInfo.max, time: this.axiosInfo.time, info: this.axiosInfo.info })
            console.log('загружено на сервер') 
        },

    },
    persist: true
}
);