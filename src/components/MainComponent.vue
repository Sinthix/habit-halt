<template>
    <main class="main">
      <main-header/>
      <main-overview/>
      <main-cards/>
    </main>
</template>

<script>
import MainHeader from "./MainHeader.vue"
import MainOverview from "./MainOverview.vue"
import MainCards from "./MainCards.vue"

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
  background-color: #8fd4d9;
}

</style>