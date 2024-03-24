import { defineStore } from 'pinia'
import axios from "axios"

export const smokeStore = defineStore('SmokeStore', {
  state: () => ({ 
    smokes: []
  }),
  getters: {
   
  },
  actions: {
    async fetchNextSmoke() {
      try {
        const res = await axios.get('http://127.0.0.1:5000/getNextSmoke')
  
        console.log(res.data[0])
        // this.nextMeal = res.data
      } catch(error) {
        return error
      }
    }
  },
})
