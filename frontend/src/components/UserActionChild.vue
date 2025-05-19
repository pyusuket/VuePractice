<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['customEvent'])

function sendEvent() {
  emit('customEvent', '子コンポーネントからのメッセージです')
}
</script>

<template>
  <button @click="sendEvent">親に通知する</button>
</template>
