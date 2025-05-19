import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface HealthMetric {
  id: string
  name: string
  value: number
  unit: string
  timestamp: Date
  category: string
}

export interface UserProfile {
  id: string
  name: string
  age: number
  gender: string
  height: number
  weight: number
  activityLevel: string
  medicalConditions: string[]
  goals: string[]
}

export interface HealthRisk {
  id: string
  name: string
  level: 'low' | 'moderate' | 'high'
  description: string
  recommendations: string[]
}

export interface Exercise {
  id: string
  name: string
  description: string
  durationMinutes: number
  difficultyLevel: string
  targetAreas: string[]
  imageUrl: string
  videoUrl?: string
}

// Mock data for demonstration purposes
const mockHealthMetrics: HealthMetric[] = [
  {
    id: '1',
    name: 'Heart Rate',
    value: 72,
    unit: 'bpm',
    timestamp: new Date(),
    category: 'cardiovascular'
  },
  {
    id: '2',
    name: 'Blood Pressure (Systolic)',
    value: 120,
    unit: 'mmHg',
    timestamp: new Date(),
    category: 'cardiovascular'
  },
  {
    id: '3',
    name: 'Blood Pressure (Diastolic)',
    value: 80,
    unit: 'mmHg',
    timestamp: new Date(),
    category: 'cardiovascular'
  },
  {
    id: '4',
    name: 'Blood Glucose',
    value: 90,
    unit: 'mg/dL',
    timestamp: new Date(),
    category: 'metabolic'
  },
  {
    id: '5',
    name: 'Body Temperature',
    value: 98.6,
    unit: '°F',
    timestamp: new Date(),
    category: 'general'
  }
]

const mockUserProfile: UserProfile = {
  id: 'user1',
  name: 'John Doe',
  age: 35,
  gender: 'Male',
  height: 180, // cm
  weight: 75, // kg
  activityLevel: 'Moderate',
  medicalConditions: ['None'],
  goals: ['Weight management', 'Increase energy levels', 'Improve cardiovascular health']
}

const mockHealthRisks: HealthRisk[] = [
  {
    id: 'risk1',
    name: 'Cardiovascular Disease',
    level: 'low',
    description: 'Your cardiovascular health metrics indicate a low risk for heart disease.',
    recommendations: [
      'Continue regular exercise',
      'Maintain a balanced diet low in saturated fats',
      'Stay hydrated and monitor blood pressure occasionally'
    ]
  },
  {
    id: 'risk2',
    name: 'Type 2 Diabetes',
    level: 'moderate',
    description: 'Your blood glucose levels and lifestyle factors suggest a moderate risk for developing type 2 diabetes.',
    recommendations: [
      'Monitor blood glucose levels regularly',
      'Reduce sugar intake',
      'Increase physical activity',
      'Consider consulting with a nutritionist'
    ]
  },
  {
    id: 'risk3',
    name: 'Stress-Related Disorders',
    level: 'moderate',
    description: 'Your activity patterns and self-reported stress levels indicate moderate risk for stress-related health issues.',
    recommendations: [
      'Practice relaxation techniques like meditation or deep breathing',
      'Ensure adequate sleep (7-8 hours nightly)',
      'Consider stress management activities like yoga or tai chi'
    ]
  }
]

const mockExercises: Exercise[] = [
  {
    id: 'ex1',
    name: 'Morning Brisk Walking',
    description: 'A 30-minute brisk walk in the morning to boost metabolism and cardiovascular health.',
    durationMinutes: 30,
    difficultyLevel: 'Beginner',
    targetAreas: ['Cardiovascular', 'Lower body'],
    imageUrl: 'https://images.pexels.com/photos/4149034/pexels-photo-4149034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ex2',
    name: 'Yoga for Flexibility',
    description: 'A gentle yoga routine focusing on stretching and flexibility to reduce stress and improve joint mobility.',
    durationMinutes: 20,
    difficultyLevel: 'Beginner',
    targetAreas: ['Flexibility', 'Stress reduction', 'Core'],
    imageUrl: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ex3',
    name: 'Bodyweight Circuit',
    description: 'A full-body workout using just your bodyweight, including squats, push-ups, and planks.',
    durationMinutes: 25,
    difficultyLevel: 'Intermediate',
    targetAreas: ['Strength', 'Core', 'Full body'],
    imageUrl: 'https://images.pexels.com/photos/4148941/pexels-photo-4148941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ex4',
    name: 'Swimming Laps',
    description: 'Low-impact cardio exercise that works the entire body while being gentle on joints.',
    durationMinutes: 45,
    difficultyLevel: 'Intermediate',
    targetAreas: ['Cardiovascular', 'Full body', 'Respiratory'],
    imageUrl: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

export const useHealthStore = defineStore('health', () => {
  // State
  const healthMetrics = ref<HealthMetric[]>(mockHealthMetrics)
  const userProfile = ref<UserProfile>(mockUserProfile)
  const healthRisks = ref<HealthRisk[]>(mockHealthRisks)
  const recommendedExercises = ref<Exercise[]>(mockExercises)
  const completedExercises = ref<string[]>([])

  // Getters
  const getBMI = computed(() => {
    const heightInMeters = userProfile.value.height / 100
    return (userProfile.value.weight / (heightInMeters * heightInMeters)).toFixed(1)
  })

  const getBMICategory = computed(() => {
    const bmi = parseFloat(getBMI.value)
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 25) return 'Normal weight'
    if (bmi < 30) return 'Overweight'
    return 'Obese'
  })

  const getHighRisks = computed(() => {
    return healthRisks.value.filter(risk => risk.level === 'high')
  })

  const getModerateRisks = computed(() => {
    return healthRisks.value.filter(risk => risk.level === 'moderate')
  })

  const getLowRisks = computed(() => {
    return healthRisks.value.filter(risk => risk.level === 'low')
  })

  // Actions
  function updateHealthMetric(metric: HealthMetric) {
    const index = healthMetrics.value.findIndex(m => m.id === metric.id)
    if (index !== -1) {
      healthMetrics.value[index] = { ...metric, timestamp: new Date() }
    } else {
      healthMetrics.value.push({ ...metric, id: Date.now().toString(), timestamp: new Date() })
    }
    // In a real app, this would trigger a risk reassessment
    assessHealthRisks()
  }

  function updateUserProfile(profile: Partial<UserProfile>) {
    userProfile.value = { ...userProfile.value, ...profile }
    // In a real app, this would trigger a risk reassessment and exercise recommendation update
    assessHealthRisks()
    updateExerciseRecommendations()
  }

  function assessHealthRisks() {
    // This would be a complex algorithm in a real app
    console.log('Health risks reassessed based on updated profile or metrics')
    // For now, we'll keep using the mock data
  }

  function updateExerciseRecommendations() {
    // This would use the health risks and user profile to generate personalized recommendations
    console.log('Exercise recommendations updated based on health assessment')
    // For now, we'll keep using the mock data
  }

  function completeExercise(exerciseId: string) {
    if (!completedExercises.value.includes(exerciseId)) {
      completedExercises.value.push(exerciseId)
    }
  }

  return {
    // State
    healthMetrics,
    userProfile,
    healthRisks,
    recommendedExercises,
    completedExercises,

    // Getters
    getBMI,
    getBMICategory,
    getHighRisks,
    getModerateRisks,
    getLowRisks,

    // Actions
    updateHealthMetric,
    updateUserProfile,
    assessHealthRisks,
    updateExerciseRecommendations,
    completeExercise
  }
})
