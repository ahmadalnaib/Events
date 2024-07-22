<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
const props = defineProps({
  id: {
    required: true
  }
})

const event = ref(null)

onMounted(async () => {
  const response = await EventService.getEvent(props.id)
  event.value = response.data
})
</script>

<template>
  <div v-if="event" class="flex">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @{{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
