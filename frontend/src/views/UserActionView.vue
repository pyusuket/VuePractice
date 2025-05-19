<template>
 <div>
   <h1>Methods</h1>
    <button @click="sayHello">あいさつ</button>
    <p v-if="message">{{ message }}</p>
  </div>

  <div>
    <h1>v-on/@</h1>
    <p>在庫: {{ stock }}</p>
    <button @click="stock--">購入</button>
  </div>

  <div>
    <h1>emit()</h1>

    <Child @customEvent="handleCustomEvent" />
    <p>子から受け取ったメッセージ: {{ messageFromChild }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// methodsの例
  const message = ref('')
  function sayHello() {
    message.value = 'こんにちは！'
  }

// v-on/@の例
const stock = ref(5)

// emit()の例
import Child from '../components/UserActionChild.vue'

const messageFromChild = ref('')

function handleCustomEvent(message) {
  messageFromChild.value = message
}
</script>

<style scoped>

</style>
