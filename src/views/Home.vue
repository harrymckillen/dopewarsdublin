<template>
  <div class="home w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h1 class="text-lg">Home</h1>
    <div class="window default-window-height">
      <div class="title-bar">
        <div class="title-bar-text">Dope Wars: Dublin</div>
        <div class="title-bar-controls">
          <button @click="exitGame" aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="flex justify-center flex-wrap">
          <button class="mt-16 h-12 w-2/3" @click="goToGame">New Game</button>
          <button v-if="game.inProgress" class="mt-3 h-12 w-2/3" @click="goToGame">Continue Game</button>
          <button class="mt-3 h-12 w-2/3" @click="leaderboard">Leaderboard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  created() {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      game: "game",
    }),
  },
  methods: {
    exitGame() {
      alert("There's no game to quit.");
    },
    goToGame() {
      this.$router.push("/game");
    },
    leaderboard() {
      this.$router.push("/leaderboard");
    },
  },
};
</script>
