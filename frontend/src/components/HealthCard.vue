<template>
  <div class="health-card">
    <div class="header">
      <div class="title">{{ title }}</div>
      <div class="value" :style="{color: color}">{{ value }} <span class="unit">{{ unit }}</span></div>
    </div>
    <LineChart :chart-data="chartData" :color="color" />
  </div>
</template>

<script setup>
import LineChart from './LineChart.vue'
defineProps(['title', 'value', 'unit', 'chartData', 'color'])
</script>

<style scoped>
.health-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 24px;
  width: 300px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.title {
  font-size: 1.1em;
  color: #888;
}
.value {
  font-size: 2em;
  font-weight: bold;
}
.unit {
  font-size: 0.7em;
  color: #aaa;
}
</style>
