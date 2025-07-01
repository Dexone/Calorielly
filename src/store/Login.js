import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'


export const useLogin = defineStore('loginStore', {
    state: () => ({ id: 1, login: "guest", limitCcal: 'loading', desiredWeight: 'loading', eatingList: 'loading', weightList: 'loading' }),


    getters: {
        getSumCcalToday: (state) => { //сумма калорий за сегодня
            if (state.eatingList !== 'loading') {
                return state.eatingList[0][2].reduce(function (accumulator, item) {
                    accumulator = accumulator + Number(item)
                    return accumulator
                }, 0)
            }
        },
    },


    actions: {
        async registration(log, pass) {
            axios.get(`https://dexone.pw/backend_new/users`).then((res) => {
                let lastId = Number(res.data[res.data.length - 1].id) //последний зарегистрированный id
                console.log(lastId)
                let logins = [] //массив логинов на бд
                for (let i = 0; i < res.data.length; i++) {
                    logins.push(res.data[i].login)
                }

                if (logins.includes(log) == false) { //если логин не найден в бд допускается регистрация
                    axios.post(`https://dexone.pw/backend_new/users`, { id: lastId + 1, login: log, password: pass }) //создание пользователя
                    axios.post('https://dexone.pw/backend_new/data', { id: lastId + 1, limitCcal: 0, desiredWeight: 0, eatingList: [["0", [], [], []]], weightList: [["0", 0]] })
                        .then(response => {
                            this.getInfo()
                        })
                        .catch(err => {
                            console.error(err);
                        });
                    this.id = lastId + 1 //авторизация пользователя
                }

                else {
                    alert("Такой пользователь существует")
                }



            })

        },
        async enter(log, pass) {
            axios.get(`https://dexone.pw/backend_new/users`).then((res) => {
                let logins = []
                let passwords = []
                for (let i = 0; i < res.data.length; i++) {
                    logins.push(res.data[i].login) //массив логинов в дб
                    passwords.push(res.data[i].password) //массив паролей в дб
                }

                let search = logins.indexOf(log); //возврат индекса введенного логина в базе данных или -1 если нет
                if (search > 0 && res.data[search].password == pass) { //если найден логин и пароль по этому индексу равен введенному value то
                    this.id = res.data[search].id //задается id пользователя в сторе
                    this.getInfo()
                }
                else {
                    alert("Неверный логин или пароль")
                }
            })
        },

        async exit() {
            this.id = 1
            this.getInfo()
        },


        deleteAccount() {
            if(this.id !== 2){ //чтобы свой акк случайно не удалить)0))
            axios.delete(`https://dexone.pw/backend_new/users/${this.id}`)
            axios.delete(`https://dexone.pw/backend_new/data/${this.id}`)
            this.id = 1 //задается id пользователя в сторе
            this.getInfo()
        }
        },

        async getInfo() {
            axios.get(`https://dexone.pw/backend_new/users/${this.id}`).then((res) => {
                this.login = res.data.login
            })
            axios.get(`https://dexone.pw/backend_new/data/${this.id}`).then((res) => {
                this.limitCcal = res.data.limitCcal
                this.desiredWeight = res.data.desiredWeight
                this.eatingList = res.data.eatingList
                this.weightList = res.data.weightList
            })
        },


        addCcal(ccalValue, ccalName) {
            if(this.id !== 1){
                axios.get(`https://dexone.pw/backend_new/data/${this.id}`).then((res) => {
                    let eatingList = res.data.eatingList
    
                    let dateToday = (new Date()).getDate() + "." + ((new Date()).getMonth() + 1) + "." + (new Date()).getFullYear() //создание нового дня если последний вчерашний
                    if (this.eatingList[0][0] !== dateToday && this.id !== 1) {
                            eatingList.unshift([dateToday, [], [], []])
                    }
    
    
                    eatingList[0][1].push((String(new Date(Date.now()))).slice(15).slice(1, 6))
                    eatingList[0][2].push(ccalValue)
                    eatingList[0][3].push(ccalName)
    
                    axios.patch(`https://dexone.pw/backend_new/data/${this.id}`, { eatingList: eatingList })
                        .then(response => {
                            this.getInfo()
                        })
                })
            }
            else{
                alert('Вам необходимо создать аккаунт')
            }
         
        },


       async addWeight(weightValue) {
        if(this.id !== 1){
            axios.get(`https://dexone.pw/backend_new/data/${this.id}`).then((res) => {
                let weightList = res.data.weightList


                let dateToday = (new Date()).getDate() + "." + ((new Date()).getMonth() + 1) + "." + (new Date()).getFullYear() //создание нового дня если последний вчерашний
                if (this.weightList[0][0] !== dateToday && this.id !== 1) {
                        weightList.unshift([dateToday, 0])
                }


                weightList[0][1] = Number(weightValue)

                axios.patch(`https://dexone.pw/backend_new/data/${this.id}`, { weightList: weightList })
                    .then(response => {
                        this.getInfo()
                    })
            })
        }
        else{
            alert('Вам необходимо создать аккаунт')
        }

        
        },

        editDesiredWeight(value){
            if(this.id !== 1){
                axios.patch(`https://dexone.pw/backend_new/data/${this.id}`, { desiredWeight: Number(value) })
                .then(response => {
                    this.getInfo()
                })
            }
            else{
                alert('Вам необходимо создать аккаунт')
            }
          
        },


        editLimitCcal(value){
            if(this.id !== 1){
                axios.patch(`https://dexone.pw/backend_new/data/${this.id}`, { limitCcal: Number(value) })
                .then(response => {
                    this.getInfo()
                })
            }
            else{
                alert('Вам необходимо создать аккаунт')
            }
         
        },

        deleteCcalValue(index) {

            if(this.id !== 1){
                axios.get(`https://dexone.pw/backend_new/data/${this.id}`).then((res) => {
                    let eatingList = res.data.eatingList
    
    
                    eatingList[0][1].splice(index, 1)
                    eatingList[0][2].splice(index, 1)
                    eatingList[0][3].splice(index, 1)
    
                    axios.patch(`https://dexone.pw/backend_new/data/${this.id}`, { eatingList: eatingList })
                        .then(response => {
                            this.getInfo()
                        })
                })
            }
            else{
                alert('Вам необходимо создать аккаунт')
            }


        }

    },
    persist: {
        pick: ['id'], //в localstorage только id
    },
}
)