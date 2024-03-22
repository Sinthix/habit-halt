<template>
  <DashBoard />
</template>

<script>
import DashBoard from './components/DashBoard.vue'

export default {
  name: 'App',
  components: {
    DashBoard
  }
}
</script>

<style>

body{
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: "Open Sans", Helvetica, sans-serif;
  box-sizing: border-box;
  background-color: rgba(31,41,55);
}
</style>
