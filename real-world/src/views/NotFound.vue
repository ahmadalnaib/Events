<script setup>

defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  
  }
})
</script>


<template>
  <div class="notFound">
    <h1>Oops!</h1>
    <h3>The {{ resource }} page you're looking for is not here.</h3>
    <p>Go back to the <router-link :to="{name:'event-list'}">Back to home page</router-link>.</p>

  </div>
</template>


<style scoped>
.notFound{
  text-align: center;
  margin-top: 100px;
  font-size: 20px;
  color: #333;
}

</style>