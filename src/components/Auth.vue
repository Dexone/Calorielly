<template>


<div class=" fixed top-0 right-0  z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-w-3xl mx-auto mt-3 " :class="{ 'hidden': hiddenAuth }">
    <div class="relative flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3 mx-3 mt-3">



      <div class="flex items-center justify-between p-3 p-4 border-b rounded-t">
                    <h4 class="ml-2 text-center align-middle font-sans text-sm font-bold ">
                        Аккаунт
                    </h4>
                    <button @click="hiddenAuth = true"
                        class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>




  <div class="p-6" v-if="userStore.axiosInfo.id === 1">
    <div class="block overflow-visible" v-if="RegOrLogin === true">
      <nav>
        Регистрация
      </nav>
      <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
        <div role="tabpanel"
          class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="card">


          <form class="flex flex-col gap-4 mt-6" >
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Логин
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input placeholder="Логин" v-model="regLogin"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>

            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Пароль
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input  placeholder="Пароль" v-model="regPassword"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>
            
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Уже есть аккаунт? <button @click="RegOrLogin = false">Войти</button>
              </p>

            </div>

            <button @click="registration()"
              class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Зарегистрироваться
            </button>

          </form>

        </div>
      </div>
    </div>








    <div class="block overflow-visible" v-if="RegOrLogin === false">
      <nav>
       Вход
      </nav>
      <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
        <div role="tabpanel"
          class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="card">


          <form class="flex flex-col gap-4 mt-6" >
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Логин
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input placeholder="Логин" v-model="enterLogin"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>

            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Пароль
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input  placeholder="Пароль" v-model="enterPassword"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>
            
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Нет аккаунта? <button @click="RegOrLogin = true">Зарегистрироваться</button>
              </p>

            </div>

            <button @click="enter()"
              class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Войти
            </button>

          </form>

        </div>
      </div>
    </div>




  </div>




















  <div class="p-6" v-if="userStore.axiosInfo.id != 1">
    <div class="block overflow-visible">
      <nav>
        Аккаунт
      </nav>
      <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
        <div role="tabpanel"
          class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="card">


          <form class="flex flex-col gap-4 mt-6" >
            <div>
              <p class="block w-full mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900 text-center">
                {{ userStore.axiosInfo.name}}
              </p>

            </div>

            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900 text-center">
                ID: {{ userStore.axiosInfo.id }}
              </p>

            </div>
            
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900" @click="deleteAccount()">
                Удалить аккаунт
              </p>

            </div>

            <button @click="exit()"
              class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Выход
            </button>

          </form>

        </div>
      </div>
    </div>

  </div>




</div>








</div>
</template>


<script setup>
import axios from 'axios';
import { ref, inject } from 'vue';
import { useUser } from '../../store/User';
const userStore = useUser();

const RegOrLogin = ref(true)

const hiddenAuth = inject("hiddenAuth")



const regLogin = ref("")
const regPassword = ref("")
function registration() {
    axios.get(`https://dexone.ru/backend_calorie/users`).then((res) => {
        let lastId = Number(res.data[res.data.length - 1].id) //последний зарегистрированный id

        let logins = [] //массив логинов
        for (let i = 0; i < res.data.length; i++) {
            logins.push(res.data[i].login)
        }
        console.log(logins)
        if (logins.includes(regLogin.value) == false) { //если логин не найден в бд допускается регистрация
            axios.post(`https://dexone.ru/backend_calorie/users`, { id: lastId + 1, login: regLogin.value, password: regPassword.value }) //создание пользователя
            axios.post(`https://dexone.ru/backend_calorie/data`, { id: lastId + 1, name: regLogin.value[0].toUpperCase() + regLogin.value.slice(1), max: "0", timeStart: "0", timeEnd: "0", info:  ["0",[],[],[]]}) //создание data

            userStore.axiosInfo = { id: lastId + 1, name: regLogin.value[0].toUpperCase() + regLogin.value.slice(1), max: 0, timeStart: 0, timeEnd: 0, info:  ["0",[],[],[]]} //обновляет стор
        }
        else {
            alert("Такой пользователь существует")
        }
    })

}






const enterLogin = ref("")
const enterPassword = ref("")
function enter() {
    axios.get(`https://dexone.ru/backend_calorie/users`).then((res) => {
        let logins = []
        let passwords = []
        for (let i = 0; i < res.data.length; i++) {
            logins.push(res.data[i].login) //массив логинов в дб
            passwords.push(res.data[i].password) //массив паролей в дб
        }
        let search = logins.indexOf(enterLogin.value); //возврат индекса введенного логина в базе данных или -1 если нет
        if (search > 0 && res.data[search].password == enterPassword.value) { //если найден логин и пароль по этому индексу равен введенному value то

          axios.get(`https://dexone.ru/backend_calorie/data/${res.data[search].id}`).then((res) => {
                userStore.axiosInfo = res.data
                console.log('вход по паролю')
            })


            // userStore.axiosInfo.id = res.data[search].id //задается id пользователя в сторе
        }
        else {
            alert("Неверный логин или пароль")
        }
    })
}






function exit() {
  axios.get(`https://dexone.ru/backend_calorie/data/1`).then((res) => {
                userStore.axiosInfo = res.data
            })
}




function deleteAccount() {

    axios.delete(`https://dexone.ru/backend_calorie/users/${userStore.axiosInfo.id}`) //удаление user
    axios.delete(`https://dexone.ru/backend_calorie/data/${userStore.axiosInfo.id}`) //удаление data

    axios.get(`https://dexone.ru/backend_calorie/data/1`).then((res) => {
                userStore.axiosInfo = res.data
            })
}



</script>