<template>
  <div>
    <select v-model="selectedCategory">
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const categories = ref([]);
const selectedCategory = ref(null);

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/categories/');
    categories.value = response.data;
  } catch (error) {
    console.error('There was an error fetching categories:', error);
  }
};

onMounted(() => {
  fetchCategories();
});
</script>
