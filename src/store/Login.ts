import axios from 'axios'
import { defineStore } from 'pinia'

type EatingEntry = [unknown, unknown, number[]]
type EatingList = EatingEntry[]

type WeightEntry = [number, number]
type WeightList = WeightEntry[]

type UserResponse = { login: string }

type DataResponse = {
  limitCcal: number
  desiredWeight: number
  eatingList: EatingList
  weightList: WeightList
}

type State = {
  id: number
  login: string
  limitCcal: number | 'loading'
  desiredWeight: number | 'loading'
  eatingList: EatingList | 'loading'
  weightList: WeightList | 'loading'
}

export const useLogin = defineStore('loginStore', {
  state: (): State => ({
    id: 1,
    login: 'guest',
    limitCcal: 'loading',
    desiredWeight: 'loading',
    eatingList: 'loading',
    weightList: 'loading',
  }),

  actions: {
    async getInfo() {
      axios
        .get<UserResponse>(`https://dexone.pw/backend_new/users/${this.id}`)
        .then((res) => {
          this.login = res.data.login
        })
      axios
        .get<DataResponse>(`https://dexone.pw/backend_new/data/${this.id}`)
        .then((res) => {
          this.limitCcal = res.data.limitCcal
          this.desiredWeight = res.data.desiredWeight
          this.eatingList = res.data.eatingList
          this.weightList = res.data.weightList
        })
    },
  },
  persist: {
    pick: ['id'], //в localstorage только id
  },
})
