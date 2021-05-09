<template>
  <div>
    <div v-if="player.cash > 0">
      <p>How much would you like to deposit?</p>

      <div class="field-row flex flex-wrap">
        <div class="w-full md:w-1/2 flex ml-0">
          <label class="pr-2 flex-grow-0" for="depositText">Deposit Amount: </label>
          <input class="px-2 flex-grow" id="depositText" v-model="amount" type="text" placeholder="Amount to Deposit">
        </div>
        <div class="w-full my-4 md:my-0 md:w-1/2 flex ml-0">
          <label class="px-2" for="amountSlider">Min.</label>
          <input id="amountSlider" type="range" min="0" :max="player.cash" v-model="amount"/>
          <label class="px-2" for="amountSliderMax">Max.</label>
        </div>
      </div>

      <button :disabled="amount == 0 || amount > player.cash" @click="depositFunds(amount); closeModal()" class="mt-2 float-right">Deposit <span v-html="currency"></span> {{amount}}</button>
    </div>

    <div v-else>
      <p>You have no cash to deposit.</p>
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
      depositFunds: "depositFunds"
    }),
    closeModal: function () {
      this.$parent.$emit('close-modal');
    }
  }
}
</script>

<style>

</style>
