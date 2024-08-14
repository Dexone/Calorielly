<template>
<div class="relative flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3 mx-3 mt-3">
  <div class="p-6">
    <div class="block overflow-visible">
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
                Уже есть аккаунт? Войти
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
  </div>
</div>
{{ userStore.axiosInfo.id }}
</template>


<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useUser } from '../../store/User';
const userStore = useUser();

const RegOrLogin = ref()




const regLogin = ref("")
const regPassword = ref("")
function registration(value) {
    axios.get(`https://dexone.ru/backend_calorie/users`).then((res) => {
        let lastId = Number(res.data[res.data.length - 1].id) //последний зарегистрированный id

        let logins = [] //массив логинов
        for (let i = 0; i < res.data.length; i++) {
            logins.push(res.data[i].login)
        }
        console.log(logins)
        if (logins.includes(regLogin.value) == false) { //если логин не найден в бд допускается регистрация
            axios.post(`https://dexone.ru/backend_calorie/users`, { id: lastId + 1, login: regLogin.value, password: regPassword.value }) //создание пользователя
            axios.post(`https://dexone.ru/backend_calorie/data`, { id: lastId + 1, max: "0", time: "0", info:  ["0",[],[],[]]}) //создание data

            userStore.axiosInfo = { id: lastId + 1, max: "0", time: "0", info:  ["0",[],[],[]]} //обновляет стор
        }
        else {
            alert("Такой пользователь существует")
        }
    })

}
</script>