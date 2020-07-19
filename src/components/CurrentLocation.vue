<template>
  <div class="flex justify-between">
    <p>Location: {{game.location.name}}
      <span v-if="game.location.hospital">(Hospital)</span>
      <span v-if="game.location.gundealer">(Guns)</span>
      <span v-if="game.location.loanshark">(Loan Shark)</span>
      <span v-if="game.location.bank">(Bank)</span>
    </p>
    <div class="mt-1">
      <button v-if="game.location.hospital && player.health < 100">Recover Health</button>
      <button v-if="game.location.gundealer">Buy Gun</button>
      <button v-if="game.location.loanshark">Pay Debt</button>
      <button v-if="game.location.bank">Lodge Money</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      game: "game",
      player: "player"
    })
  }
}
</script>

<style>

</style>
