<template>
  <div class="lifecycle-example">
    <h2>ライフサイクルフックの例</h2>

    <div class="counter-section">
      <h3>カウンター: {{ count }}</h3>
      <button @click="incrementCount">カウントを増やす</button>
    </div>

    <div class="timer-section">
      <h3>タイマー: {{ timer }}秒</h3>
    </div>

    <div class="message-section">
      <h3>メッセージ: {{ message }}</h3>
      <button @click="updateMessage">メッセージを更新</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

// 状態の定義
const count = ref(0)
const timer = ref(0)
const message = ref('初期メッセージ')
let timerInterval = null

// メソッドの定義
const incrementCount = () => {
  count.value++
}

const updateMessage = () => {
  message.value = 'メッセージが更新されました！'
}

// ライフサイクルフック
onMounted(() => {
  console.log('コンポーネントがマウントされました')
  // タイマーの開始
  timerInterval = setInterval(() => {
    timer.value++
  }, 1000)
})

onUnmounted(() => {
  console.log('コンポーネントがアンマウントされました')
  // タイマーのクリーンアップ
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})

onUpdated(() => {
  console.log('コンポーネントが更新されました')
})
</script>

<style scoped>
.lifecycle-example {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.counter-section,
.timer-section,
.message-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px 0;
}

button:hover {
  background-color: #45a049;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #666;
  margin: 10px 0;
}
</style>
