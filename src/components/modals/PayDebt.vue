<template>
  <div>
    <div v-if="player.debt > 0 && player.cash > 0">
      <p>How much debt would you like to repay?</p>

      <div class="field-row flex flex-wrap">
        <div class="w-full md:w-1/2 flex ml-0">
          <label class="pr-2 flex-grow-0" for="payDebtText">Repay Amount: </label>
          <input class="px-2 flex-grow" id="payDebtText" v-model="amount" type="text" placeholder="Amount to Repay">
        </div>
        <div class="w-full my-4 md:my-0 md:w-1/2 flex ml-0">
          <label class="px-2" for="amountSlider">Min.</label>
          <input v-if="player.cash > player.debt" id="amountSlider" type="range" min="0" :max="player.debt" v-model="amount"/>
          <input v-else id="amountSlider" type="range" min="0" :max="player.cash" v-model="amount"/>
          <label class="px-2" for="amountSliderMax">Max.</label>
        </div>
      </div>

      <button :disabled="amount == 0 || amount > player.cash || amount > player.debt" @click="reduceDebt(amount); closeModal()" class="mt-2 float-right">Repay <span v-html="currency"></span> {{amount}}</button>
    </div>

    <div v-else>
      <p v-if="player.debt === 0">You have no debt to repay.</p>
      <p v-if="player.cash <= 0">You have no cash to repay your debt.</p>
      <button @click="closeModal()" class="mt-2 float-right">Cancel</button>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data (){
    return {
      amount: 0
    }
  },
  computed: {
    ...mapState({
      player: "player"
    }),
    ...mapGetters({
      currency: "getCurrency"
    })
  },
  methods: {
    ...mapActions({
      reduceDebt: "reduceDebt"
    }),
    closeModal: function () {
      this.$parent.$emit('close-modal');
    }
  }
}
</script>

<style>

</style>
