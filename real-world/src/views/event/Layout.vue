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
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
<router-view :event="event"/>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
