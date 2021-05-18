<template>
  <fieldset class="h-full">
    <legend>Player</legend>
    <div class="mt-2 flex justify-between">
      <div>Debt:</div>
      <div><span v-html="currency"></span> {{player.debt}}</div>
    </div>
    <div class="mt-2 flex justify-between">
      <div>Cash:</div>
      <div><span v-html="currency"></span> {{player.cash}}</div>
    </div>
    <div class="mt-2 flex justify-between">
      <div>Bank:</div>
      <div><span v-html="currency"></span> {{player.bank}}</div>
    </div>
    <div class="mt-2 flex justify-between">
      <div>Guns:</div>
      <div>{{player.guns}}</div>
    </div>
    <div class="mt-2 flex justify-between">
      <div>Items:</div>
      <div>{{player.itemsTotal}} / {{player.pockets}}</div>
    </div>
    <div class="mt-2 flex justify-between">
      <div>Health:</div>
      <div>{{player.health}} %</div>
    </div>
  </fieldset>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      player: "player"
    }),
    ...mapGetters({
      currency: "getCurrency"
    })
  }
};
</script>

<style>
</style>
