<template>
  <div class="nav w-full md:w-3/5 lg:w-1/2 xl:w-1/3 mx-auto mt-4">
    <router-link to="/">Home</router-link>
    <router-link to="/leaderboard">Leaderboard</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
  }
</style>
