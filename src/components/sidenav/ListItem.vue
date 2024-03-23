<template>
    <li class="sidenav__list-item">{{listText}}</li>
</template>

<script>
export default{
    props: ['listText']
}

</script>

<style>

.sidenav__list-item {
  padding: 20px 20px 20px 40px;
  color: #ddd;
}

.sidenav__list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>