<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineProps, inject } from 'vue'

const GStore = inject('GStore')
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <div id="flashMessage" v-if="GStore.flashMessage">
          <p>{{ GStore.flashMessage }}</p>
        </div>
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

#flashMessage {
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  animation: flashMessage 2s;
}
@keyframes flashMessage {
  from {
    background: #42b983;
  }
  to {
    background: transparent;
  }
}
</style>
