<template>
  <div class="game w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h1 class="text-lg">Game</h1>
    <div class="window relative default-window-height">
      <Modal>
        Transcluded
      </Modal>
      <div class="title-bar">
        <div class="title-bar-text">Dope Wars: Dublin - Day {{game.day}} of {{game.dayLimit}}</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button @click="exitGame" aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="flex w-full pb-5">
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
          <div class="w-full md:w-1/2 mr-2">
            <Buy/>
          </div>
          <div class="w-full md:w-1/2">
            <Sell/>
          </div>
        </div>
        <div class="mt-4 block">
          <div class="flex flex-row-reverse">
            <button class="ml-2" @click="exitGame">Exit</button>
            <button class="ml-2" @click="newGame">New Game</button>
            <button @click="toggleModal">Toggle Modal</button>
          </div>
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
import Modal from "@/components/Modal";
import Buy from "@/components/Buy";
import Sell from "@/components/Sell";

export default {
  name: "Game",
  components: {
    Player,
    Locations,
    CurrentLocation,
    Modal,
    Buy,
    Sell
  },
  computed: {
    ...mapState({
      game: "game"
    })
  },
  methods: {
    ...mapActions({
      resetGame: 'resetGame',
      toggleModal: 'toggleModal'
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
