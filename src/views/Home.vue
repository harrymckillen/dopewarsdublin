<template>
  <div class="home w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h1 class="text-lg">Home</h1>
    <div class="window" style="min-height:400px">
      <div class="title-bar">
        <div class="title-bar-text">Dope Wars: Dublin</div>
        <div class="title-bar-controls">
          <button @click="exitGame" aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class=" flex justify-center flex-wrap">
          <button class="mt-16 h-12 w-2/3" @click="newGame">New Game</button>
          <button class="mt-3 h-12 w-2/3" @click="leaderboard">Leaderboard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    // ...mapState({
    //   debt: "debt"
    // })
  },
  methods: {
    exitGame(){
      alert('There\'s no game to quit.')
    },
    newGame(){
      this.$router.push("/game");
    },
    leaderboard(){
      this.$router.push("/leaderboard");
    }
  }
};
</script>
