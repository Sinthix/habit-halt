<template>
  <div class="main-header">
    <div class="main-header__heading">Time Now: {{ formattedTime }}</div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';

export default {
  setup() {
    const hours = ref(new Date().getHours());
    const minutes = ref(new Date().getMinutes());

    // Update the time every second
    const updateTime = () => {
      const now = new Date();
      hours.value = now.getHours();
      minutes.value = now.getMinutes();
    };

    // Call updateTime initially and every second thereafter
    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000);
    });

    // Computed property to format the time
    const formattedTime = computed(() => {
      const paddedHours = String(hours.value).padStart(2, '0');
      const paddedMinutes = String(minutes.value).padStart(2, '0');
      return `${paddedHours}:${paddedMinutes}`;
    });

    return {
      formattedTime
    };
  }
};
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