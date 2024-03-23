<template>
  <div class="grid-container">
    <header-component />
    <side-nav/>
    <main-component />
    <the-footer />
  </div>
</template>

<script>
import SideNav from './sidenav/SideNav.vue'
import HeaderComponent from './header/HeaderComponent.vue'
import MainComponent from './main/MainComponent.vue'
import TheFooter from './footer/TheFooter.vue'

export default {
  components: {
    TheFooter,
    MainComponent,
    HeaderComponent,
    SideNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
}

/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  /* Show the sidenav */
  .grid-container {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }

  .header__search {
    margin-left: 0;
  }

  .sidenav {
    position: relative;
    transform: translateX(0);
  }

  .sidenav__close-icon {
    visibility: hidden;
  }
}

/* Medium screens breakpoint (1050px) */
@media only screen and (min-width: 65.625em) {
  /* Break out main cards into two columns */
  .main-cards {
    column-count: 2;
  }
}


</style>
