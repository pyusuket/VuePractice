<template>
  <div>
    <h1>ref()</h1>
    <p>カウント: {{ count }}</p>
    <button @click="increment">CountUp</button>
  </div>

  <div>
    <h1>reactive()</h1>
    <p>名前: {{ user.name }}</p>
    <p>年齢: {{ user.age }}</p>
    <button @click="changeName">名前変更</button>
  </div>

  <div>
    <h1>v-model()</h1>
    <h3>好きなフルーツを選んでください:</h3>
    <label><input type="checkbox" value="りんご" v-model="fruits" /> りんご</label>
    <label><input type="checkbox" value="バナナ" v-model="fruits" /> バナナ</label>
    <label><input type="checkbox" value="ぶどう" v-model="fruits" /> ぶどう</label>

    <p>選んだフルーツ: {{ fruits.join(', ') }}</p>
  </div>

  <div>
    <h1>computed()</h1>
    <p>身長（cm）: <input v-model.number="height" /></p>
    <p>体重（kg）: <input v-model.number="weight" /></p>
    <p>BMI:<span v-if="bmi !== null">{{ bmi }}</span></p>
  </div>

  <div>
     <h1>watch()</h1>
    <p>身長（cm）: <input v-model.number="height_w" /></p>
    <p>体重（kg）: <input v-model.number="weight_w" /></p>

    <p>
      BMI:
      <span v-if="bmi !== null">{{ bmi_w }}</span>
    </p>

    <p v-if="bmiCategory" style="color: blue;">
      肥満度: {{ bmiCategory }}
    </p>
  </div>
</template>

<script setup>
import { ref , reactive ,computed , watch } from 'vue'

// ref()の例
const count = ref(0)
const increment = () => {
  count.value++
}

// reactive()の例
const user = reactive({
  name: '山田',
  age: 25
})
const changeName = () => {
  user.name = '田中'
  user.age = 30
}

// v-model()の例
const fruits = ref([])

// computed()の例
const height = ref('')
const weight = ref('')
const bmi = computed(() => {
  if (!height.value || !weight.value || height.value === 0) return null
  const heightInMeters = height.value / 100
  return (weight.value / (heightInMeters ** 2)).toFixed(2)
})

// watch()の例
const height_w = ref('')
const weight_w = ref('')
const bmi_w = computed(() => {
  if (!height_w.value || !weight_w.value || height_w.value === 0) return null

  const heightInMeters = height.value / 100
  return (weight_w.value / (heightInMeters ** 2)).toFixed(2)
})
const bmiCategory = ref('')

// BMI を watch（computed の結果を監視）
watch(bmi_w, (newBmi) => {
  if (!newBmi) {
    bmiCategory.value = ''
    return
  }

  const numericBmi = parseFloat(newBmi)

  if (numericBmi < 18.5) {
    bmiCategory.value = '低体重（やせ）'
  } else if (numericBmi < 25) {
    bmiCategory.value = '普通体重'
  } else if (numericBmi < 30) {
    bmiCategory.value = '肥満（1度）'
  } else if (numericBmi < 35) {
    bmiCategory.value = '肥満（2度）'
  } else if (numericBmi < 40) {
    bmiCategory.value = '肥満（3度）'
  } else {
    bmiCategory.value = '肥満（4度）'
  }
})
</script>
