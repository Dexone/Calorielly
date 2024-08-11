import { defineStore } from 'pinia';
import { ref } from 'vue'
import axios from 'axios';

export const useUser = defineStore('userStore', {
    state: () => ({
        axiosInfo: {"id": 2, "max": "0", "time": 0, "info": ["0",[],[],[]]}, estCalories: 0, actualCalories: 0, timeCalories: 0}
    ),
    getters: {
    },
    actions: {
        downFromServer() {
            axios.get(`https://dexone.ru/backend_calorie/data/${this.axiosInfo.id}`).then((res) => {
                this.axiosInfo = res.data
                this.updateData()
                console.log('скачано с сервера')
            })
        },

        upToServer() {
            axios.patch(`https://dexone.ru/backend_calorie/data/${this.axiosInfo.id}`, { max: this.axiosInfo.max, time: this.axiosInfo.time, info: this.axiosInfo.info })
            console.log('загружено на сервер') 
        },

        updateData() {
            let dateToday = (new Date()).getDate() + "." + ((new Date()).getMonth() + 1) + "." + (new Date()).getFullYear()
            if (this.axiosInfo.info[0][0] != dateToday) {
                this.axiosInfo.info.unshift([dateToday, [], [], []])
            } //создание нового дня, если в последнем массиве остался вчерашний день

            // this.downFromServer()
            this.estCalories = 0
            for (let i = 0; i < this.axiosInfo.info[0][2].length; i++) [
                this.estCalories = this.estCalories + Number(this.axiosInfo.info[0][2][i])
            ] //сумма всех калорий из массива

            this.actualCalories = (this.estCalories - (((Date.now() - (new Date).setHours(Number(this.axiosInfo.time), 0, 0, 0)) / 1000 / 60) * (Number(this.axiosInfo.max) / 960))).toFixed() //актуальные калории = съедено калорий - ((время сейчас - время начала дня в минутах) * (максимально калорий / количество минут в дне)

            this.upToServer()


            this.timeCalories = String(new Date((Date.now()) + Number(((this.actualCalories / (Number(this.axiosInfo.max) / 960)) * 60 * 1000).toFixed()))).slice(15).slice(1, 6)//время, когда будет 0 калорий = (время сейчас + (актальные калории / кол-во калорий в минуту >> преобразованное в милисекунды))
            console.log('отработала аптейтдата')

        }
    },
    persist: true
}
);