<template>
    <header class="header">
      <div class="header__search">Habit Halt</div>
      <div class="header__avatar">Change your habits</div>
    </header>
</template>

<style>

/* Give every child element its grid name */
.header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: #394263;
  padding: 0 16px;
}

/* Make room for the menu icon on mobile */
.header__search {
  margin-left: 42px;
}

</style>