<template>
    <div class="main-cards">
      <card-component cardText="card 1"/>
      <card-component cardText="card 2"/>  
      <card-component cardText="card 3"/>  
      <card-component cardText="card 4"/>  
    </div>
</template>

<script>
import CardComponent from "./CardComponent.vue"
export default {
  components : {
    CardComponent
  }
}
</script>

<style>

.main-cards {
  column-count: 1;
  column-gap: 20px;
  margin: 20px;
}


</style>