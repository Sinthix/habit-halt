<template>
    <div class="overviewcard">
        <div class="overviewcard__icon">{{overviewText}}</div>
        <div class="overviewcard__info">{{cardText}}</div>
    </div>
</template>

<script>
export default {
    props: ['overviewText', 'cardText']
}

</script>

<style>

.overviewcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #d3d3;
}
</style>