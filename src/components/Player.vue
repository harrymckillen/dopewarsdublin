<template>
  <fieldset class="h-full">
    <legend>Player</legend>
    <p class="flex justify-between">
      <span>Debt:</span>
      <span>&euro; {{player.debt}}</span>
    </p>
    <p class="flex justify-between">
      <span>Cash:</span>
      <span>&euro; {{player.cash}}</span>
    </p>
    <p class="flex justify-between">
      <span>Bank:</span>
      <span>&euro; {{player.bank}}</span>
    </p>
    <p class="flex justify-between">
      <span>Guns:</span>
      <span>{{player.guns}}</span>
    </p>
    <p class="flex justify-between">
      <span>Items:</span>
      <span>{{player.itemsTotal}} / {{player.pockets}}</span>
    </p>
    <p class="flex justify-between">
      <span>Health:</span>
      <span>{{player.health}}</span>
    </p>
  </fieldset>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Game",
  components: {},
  computed: {
    ...mapState({
      player: "player"
    })
  }
};
</script>

<style>
</style>
