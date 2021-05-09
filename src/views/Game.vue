<template>
  <div>
    <Modal :title="modalTitle" :visible="isShown" :closeable="true" @close-modal="closeModal">
      <!-- Exit Game Modal -->
      <div v-if="modalType === 'exitgame'">
        <p>Do you really want to exit the game?</p>
        <button class="float-right" @click="exitGame">Yes</button>
      </div>

      <!-- New Game Modal -->
      <div v-if="modalType === 'newgame'">
        <p>Are you sure you want to reset this game and lose any current progress?</p>
        <button class="float-right" @click="newGame">Yeah, do it</button>
      </div>
    </Modal>
    <Modal title="Game Over" :visible="game.ended" @close-modal="closeModal">
      <!-- Game Ended Modal -->
      <div>
        <p>The game is over. </p>
        <button class="float-right" @click="newGame">New Game</button>
        <button class="float-right mr-2" @click="leaderboard">Leaderboard</button>
      </div>
    </Modal>
    <div class="game w-full md:w-3/5 lg:w-1/2 xl:w-1/3 mx-auto">
      <div class="window default-window-height">
        <div class="title-bar">
          <div class="title-bar-text">Dope Wars: Dublin - Day {{game.day}} of {{game.dayLimit}}</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button @click="exitGame" aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <div class="flex flex-wrap w-full mb-2">
            <div class="w-full md:w-1/2 p-1">
              <Player/>
            </div>
            <div class="w-full md:w-1/2 mt-2 md:mt-0 p-1">
              <Locations/>
            </div>
          </div>

          <hr />
            <CurrentLocation/>
          <hr class="mt-3"/>

          <div class="flex flex-wrap mt-2">
            <div class="w-full md:w-1/2 p-1">
              <Buy/>
            </div>
            <div class="w-full md:w-1/2 mt-2 md:mt-0 p-1">
              <Sell/>
            </div>
          </div>
          <div class="mt-4 block">
            <div class="flex flex-row-reverse">
              <button class="ml-2" @click="displayModal('exitgame', 'Exit Game')">Exit Game</button>
              <button class="ml-2" @click="displayModal('newgame', 'New Game')">New Game</button>
            </div>
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
  data (){
    return {
      modalType: '',
      modalTitle: '',
      isShown: false
    }
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

    displayModal(modalType, modalTitle){
      this.modalType = modalType;
      this.modalTitle = modalTitle;
      this.isShown = true;
    },
    closeModal(){
      this.isShown = false;
    },
    exitGame() {
      this.resetGame();
      this.$router.push("/");
    },
    newGame() {
      this.resetGame();
      this.isShown = false;
    },
    leaderboard(){
      this.resetGame();
      this.$router.push("/leaderboard");
    }
  }
};
</script>
