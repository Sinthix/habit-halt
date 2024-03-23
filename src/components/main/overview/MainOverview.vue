<template>
   <div class="main-overview">
        <overview-card overviewText="Next Meal" cardText="x min"/>
        <overview-card overviewText="Next Smoke" cardText="x min"/>
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

<script>
import OverviewCard from "./OverviewCard.vue"

export default {
    components: {
      OverviewCard
    }
}
</script>