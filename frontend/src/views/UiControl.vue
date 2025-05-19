<template>
  <div class="container">
    <!-- v-if, v-elseの例 -->
    <div class="section">
      <h2>v-if, v-elseの例</h2>
      <button @click="toggleVisibility">表示/非表示を切り替え</button>
      <p v-if="isVisible">このテキストは表示されています</p>
      <p v-else>このテキストは非表示です</p>
    </div>

    <!-- v-showの例 -->
    <div class="section">
      <h2>v-showの例</h2>
      <button @click="toggleShow">表示/非表示を切り替え</button>
      <p v-show="isShown">このテキストはv-showで制御されています</p>
    </div>

    <!-- v-forの例 -->
    <div class="section">
      <h2>v-forの例</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item.name }} - {{ item.price }}円
        </li>
      </ul>
    </div>

    <!-- :classの例 -->
    <div class="section">
      <h2>:classの例</h2>
      <button
        @click="toggleActive"
        :class="{ active: isActive, 'btn': true }"
      >
        クリックして色を変更
      </button>
    </div>

    <!-- :styleの例 -->
    <div class="section">
      <h2>:styleの例</h2>
      <div
        class="color-box"
        :style="{
          backgroundColor: boxColor,
          width: '100px',
          height: '100px'
        }"
      ></div>
      <button @click="changeColor">色を変更</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// v-if, v-else用の状態
const isVisible = ref(true)
const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

// v-show用の状態
const isShown = ref(true)
const toggleShow = () => {
  isShown.value = !isShown.value
}

// v-for用のデータ
const items = ref([
  { name: '商品A', price: 1000 },
  { name: '商品B', price: 2000 },
  { name: '商品C', price: 3000 }
])

// :class用の状態
const isActive = ref(false)
const toggleActive = () => {
  isActive.value = !isActive.value
}

// :style用の状態
const colors = ['#ff0000', '#00ff00', '#0000ff']
const currentColorIndex = ref(0)
const boxColor = ref(colors[0])
const changeColor = () => {
  currentColorIndex.value = (currentColorIndex.value + 1) % colors.length
  boxColor.value = colors[currentColorIndex.value]
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f0f0f0;
  transition: all 0.3s ease;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.color-box {
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
