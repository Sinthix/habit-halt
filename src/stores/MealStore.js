import { defineStore } from 'pinia'

export const mealStore = defineStore('MealStore', {
  state: () => ({ 
    meals: [
      {
        mealName: 'Wakeup water',
        mealTime: '07:00'
      },
      {
        mealName: 'Breakfast',
        mealTime: '07:30'
      },
      {
        mealName: '2nd Breakfast',
        mealTime: '09:30'
      },
      {
        mealName: 'Lunch',
        mealTime: '12:00'
      },
      {
        mealName: 'Mid Lunch',
        mealTime: '15:00'
      },
      {
        mealName: 'Dinner',
        mealTime: '19:00'
      }
    ]
  }),
  getters: {
   
  },
  actions: {
    
  },
})
