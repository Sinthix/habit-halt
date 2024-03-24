<template>
   <div class="main-overview">
        <overview-card :overviewText="nextMeal.meal_name" :cardText="nextMeal.meal_time"/>
        <overview-card overviewText="Next Smoke" :cardText="nextSmoke"/>
        <overview-card overviewText="Next Study" cardText="x min"/>
        <overview-card overviewText="Next Code" cardText="x min"/>
      </div>
</template>

<style>
.main-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-auto-rows: 94px;
  grid-gap: 20px;
  margin: 20px;
}

</style>

<script setup>
import OverviewCard from "./OverviewCard.vue"

import { onMounted, computed } from "vue";
import { mealStore } from "@/stores/MealStore.js";
import { smokeStore } from "@/stores/SmokeStore.js";
const mealstore = mealStore();
const smokestore = smokeStore();

const nextMeal = computed(() => {
  if(!mealstore.nextMeal) return 'problem'
  return mealstore.nextMeal[0];
});

const nextSmoke = computed(() => {
  if(!smokestore.nextSmoke) return 'problem'
  return smokestore.nextSmoke[0];
});
onMounted(() => {
  mealstore.fetchNextMeal();
  smokestore.fetchNextSmoke();
});
</script>