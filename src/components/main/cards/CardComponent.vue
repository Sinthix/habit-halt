<template>
    <div class="card">{{cardText}}</div>
</template>

<script>
export default {
    props: ['cardText']
}
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #82bef6;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;
}

</style>