<template>
  <div class="dashboard">
    <div class="tabs">
      <button :class="{active: tab==='overview'}" @click="tab='overview'">Overview</button>
      <button :class="{active: tab==='metrics'}" @click="tab='metrics'">Health Metrics</button>
      <button :class="{active: tab==='risk'}" @click="tab='risk'">Risk Assessment</button>
    </div>
    <div class="cards">
      <HealthCard
        title="Heart Rate"
        :value="72"
        unit="bpm"
        :chart-data="heartRateData"
        color="#2196f3"
      />
      <HealthCard
        title="Blood Pressure"
        :value="'120/80'"
        unit="mmHg"
        :chart-data="bloodPressureData"
        color="#e53935"
      />
      <HealthCard
        title="Blood Glucose"
        :value="90"
        unit="mg/dL"
        :chart-data="bloodGlucoseData"
        color="#43a047"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HealthCard from '../components/HealthCard.vue'

const tab = ref('overview')

// サンプルデータ
const heartRateData = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Today'],
  datasets: [
    {
      label: 'Heart Rate (bpm)',
      data: [70, 68, 66, 66, 68, 70],
      borderColor: '#2196f3',
      backgroundColor: 'rgba(33,150,243,0.1)',
      fill: true,
      tension: 0.4
    }
  ]
}

const bloodPressureData = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Today'],
  datasets: [
    {
      label: 'Systolic (mmHg)',
      data: [125, 124, 123, 122, 121, 120],
      borderColor: '#e53935',
      backgroundColor: 'rgba(229,57,53,0.1)',
      fill: false,
      tension: 0.4
    },
    {
      label: 'Diastolic (mmHg)',
      data: [80, 81, 80, 79, 80, 80],
      borderColor: '#607d8b',
      backgroundColor: 'rgba(96,125,139,0.1)',
      fill: false,
      tension: 0.4
    }
  ]
}

const bloodGlucoseData = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Today'],
  datasets: [
    {
      label: 'Blood Glucose (mg/dL)',
      data: [95, 92, 88, 87, 90, 90],
      borderColor: '#43a047',
      backgroundColor: 'rgba(67,160,71,0.1)',
      fill: true,
      tension: 0.4
    }
  ]
}
</script>

<style scoped>
.dashboard {
  padding: 32px;
}
.tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}
.tabs button {
  background: none;
  border: none;
  font-size: 1.1em;
  padding: 8px 16px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.tabs button.active {
  border-bottom: 2px solid #2196f3;
  color: #2196f3;
}
.cards {
  display: flex;
  gap: 24px;
}
</style>
