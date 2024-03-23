import { defineStore } from 'pinia'
import axios from "axios"

export const mealStore = defineStore('MealStore', {
  state: () => ({ 
    nextMeal: null
  }),
  getters: {
   
  },
  actions: {
    async fetchNextMeal() {
      try {
        const today = new Date();
        const currTime = today.getHours() + ":" + today.getMinutes()
        const res = await axios.get('http://127.0.0.1:5000/getNextMeal', { params: { currentTime: currTime } })
        this.nextMeal = res.data
      } catch(error) {
        return error
      }
    }
  },
})
