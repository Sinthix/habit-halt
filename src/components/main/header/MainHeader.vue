<template>
  <div class="main-header">
    <div class="main-header__heading">Time Now: {{ timeNow }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const timeNow = computed(() => {
  const today = new Date();
      return today.getHours() + ":" + today.getMinutes()
})
</script>

<style>
.main-header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  background-color: #d3d3;
}
</style>