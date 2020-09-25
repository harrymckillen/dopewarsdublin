<template>
  <div class="leaderboard w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h1 class="text-lg">Leaderboard</h1>


    <div class="window" style="min-height:400px">
      <div class="title-bar">
        <div class="title-bar-text">Dope Wars: Dublin - Leaderboard</div>
        <div class="title-bar-controls">
          <button @click="exitGame" aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body text-center">
        <p>// TODO: Build Leaderboard</p>
        <!-- <main class="w-1/2 mx-auto my-16">
          <h2 class="text-base">Why</h2>
          <p>Desire to expand my knowledge of Vue &amp; Vuex, outside of tutorials and articles etc. and, for fun, to build a clone of Dope Wars.</p>
        </main> -->
        <select multiple style="width:300px;">
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    exitGame() {
      if (window.confirm("Do you really want to exit the game?")) {
        this.$router.push("/");
      }
    },
  }
};
</script>

<style>
</style>
