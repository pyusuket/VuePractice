<template>
  <div>
    <h1>Vue + Django + PostgreSQL</h1>
    <h2>セレクトボックスにDBの内容を表示させる</h2>
    <el-select v-model="selectedCategory" placeholder="カテゴリを選択" style="width: 240px">
      <el-option
        v-for="category in categories"
        :key="category.id"
        :label="category.name"
        :value="category.id"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref([])
const selectedCategory = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/categories/')
    categories.value = response.data
  } catch (error) {
    console.error('カテゴリ取得エラー:', error)
  }
})
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
