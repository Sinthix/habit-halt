<template>
    <main class="main">
      <main-header/>
      <main-overview/>
      <main-cards/>
    </main>
</template>

<script>
import MainHeader from "./header/MainHeader.vue"
import MainOverview from "./overview/MainOverview.vue"
import MainCards from "./cards/MainCards.vue"

export default {
  components: {
    MainHeader,
    MainOverview,
    MainCards
  }
}

</script>

<style>

.main {
  grid-area: main;
  background-color: #394263;

  margin: 20px;
}

</style>