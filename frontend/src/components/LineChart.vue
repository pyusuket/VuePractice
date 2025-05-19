<template>
  <div>
    <Line :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js'

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale)

const props = defineProps(['chartData', 'color'])

const options = {
  responsive: true,
  plugins: {
    legend: { display: true }
  },
  scales: {
    y: { beginAtZero: false }
  }
}
</script>
