<template>
  <div class="game w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h1 class="text-lg">Game</h1>
    <div class="window" style="min-height:400px">
      <div class="title-bar">
        <div class="title-bar-text">Dope Wars: Dublin - Day {{game.day}} of {{game.dayLimit}}</div>
        <div class="title-bar-controls">
          <button @click="exitGame" aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="flex w-full pb-5" style="min-height:150px">
          <div class="w-full md:w-1/2 mr-2">
            <Player />
          </div>
          <div class="w-full md:w-1/2">
            <Locations />
          </div>
        </div>
        <hr />
        <CurrentLocation/>
        <hr />
        <div class="flex">
          <div class="w-1/2">
            <select multiple class="w-full">
              <option>5 - Incredible!</option>
              <option>4 - Great!</option>
              <option selected>3 - Pretty good</option>
              <option>2 - Not so great</option>
              <option>1 - Unfortunate</option>
            </select>
          </div>
          <div class="w-1/2">
            <select multiple class="w-full">
              <option>5 - Incredible!</option>
              <option>4 - Great!</option>
              <option selected>3 - Pretty good</option>
              <option>2 - Not so great</option>
              <option>1 - Unfortunate</option>
            </select>
          </div>
        </div>
        <div class="mt-4 flex flex-row-reverse">
          <button class="ml-2" @click="exitGame">Exit</button>
          <button @click="newGame">New Game</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import Player from "@/components/Player";
import Locations from "@/components/Locations";
import CurrentLocation from "@/components/CurrentLocation";

export default {
  name: "Game",
  components: {
    Player,
    Locations,
    CurrentLocation
  },
  computed: {
    ...mapState({
      game: "game"
    })
  },
  methods: {
    ...mapActions({
      resetGame: 'resetGame'
    }),
    exitGame() {
      if (window.confirm("Do you really want to exit the game?")) {
        this.resetGame();
        this.$router.push("/");
      }
    },
    newGame() {
      if (window.confirm("Do you really want to reset the game?")) {
        this.resetGame();
      }
    }
  }
};
</script>
