<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref,onMounted,computed, watchEffect} from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router';

const router=useRouter()

const props=defineProps(['page'])

const events = ref(null)
const totalEvents = ref(0)

const page=computed(()=>props.page)
const hasNextPage=computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(async () => {
  events.value = null
  watchEffect(async () => {
    const response = await EventService.getEvents(2,page.value)
    events.value = response.data
    totalEvents.value = response.headers['x-total-count']
  }).catch(error => {
    router.push({name:'NetworkError'})
  })

})
</script>

<template>
  <div class="events">
  <h1>Events For Good</h1>
<EventCard  v-for="event in events" :key="event.id" :event="event"/>


<div class="pagination">
  <RouterLink id="page-prev" :to="{name:'event-list',query:{page:page-1}}" rel="prev" v-if="page !=1">&#60; Previous</RouterLink>
  <RouterLink id="page-next" :to="{name:'event-list',query:{page:page+1}}" rel="next" v-if="hasNextPage">Next &#62;</RouterLink>

</div>
  </div>
</template>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
display: flex;
width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: rgb(255, 14, 42);

}

#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>