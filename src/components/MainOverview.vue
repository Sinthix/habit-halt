<template>
   <div class="main-overview">
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
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

.overviewcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #d3d3;
}
</style>