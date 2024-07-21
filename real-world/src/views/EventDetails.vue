<script setup>
import { ref,onMounted } from 'vue'
import EventService from '@/services/EventService'
defineProps({
  id:{
    type: String,
    required: true,
  },
})

const event=ref(null)

onMounted(async () => {
  const response = await EventService.getEvent(id)
  event.value = response.data
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @{{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  
</template>
