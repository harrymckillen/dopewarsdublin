<template>
  <div class="flex justify-between">
    <p>Location: {{player.location.name}}
      <span v-if="player.location.hospital">(Hospital)</span>
      <span v-if="player.location.gundealer">(Guns)</span>
      <span v-if="player.location.loanshark">(Loan Shark)</span>
      <span v-if="player.location.bank">(Bank)</span>
    </p>
    <div class="mt-2">
      <button v-if="player.location.hospital && player.health < 100">Recover Health</button>
      <button v-if="player.location.gundealer">Buy Gun</button>
      <button v-if="player.location.loanshark">Pay Debt</button>
      <button v-if="player.location.bank">Lodge Money</button>
      <button class="ml-1" v-if="player.location.bank">Withdraw Money</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      player: "player"
    })
  }
}
</script>

<style>

</style>
