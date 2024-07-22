<script setup></script>

<template>
  <div class="notFound">
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>

<style scoped>
.notFound {
  text-align: center;
  margin-top: 100px;
  font-size: 20px;
  color: #333;
}
</style>
