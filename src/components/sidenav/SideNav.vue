<template>
    <aside class="sidenav">
      <ul class="sidenav__list">
        <list-item listText="Meals"/>
        <list-item listText="Smoke"/>
        <list-item listText="Studies"/>
        <list-item listText="Code"/>
      </ul>
    </aside>
</template>

<script>
import ListItem from "./ListItem.vue"

export default{
  components:{
    ListItem
  }
}
</script>

<style>

.sidenav {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  overflow-y: auto;
  transform: translateX(-245px);
  transition: all 0.6s ease-in-out;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #394263;
}


.sidenav__list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}


</style>