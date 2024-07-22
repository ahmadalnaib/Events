<script setup>
import { useRouter } from 'vue-router';
import { defineProps, inject } from 'vue';

const {event} = defineProps(['event'])

const router = useRouter()
const GStore=inject('GStore')

const register = () => {
  GStore.flashMessage = 'You are successfully registerd for!' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)

router.push({ name: 'EventDetails' })
}
</script>

<template>
 <p>Register</p>
 <button @click="register">Register</button>
</template>
