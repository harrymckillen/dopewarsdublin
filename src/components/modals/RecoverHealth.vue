<template>
  <div>
    <div v-if="player.health < 100">

      <p>Would you like to recover your health for <span v-html="currency"></span> {{healthCost}}</p>

      <button :disabled="healthCost > player.cash && player.health < 100" @click="topUpHealth(); closeModal()" class="mt-2 float-right">Recover Health</button>

      <p v-show="healthCost > player.cash && player.health < 100" class="text-red-800 float-right mr-2">You do not have enough cash to top up your health!</p>
    </div>
    <div v-else>
      <p>You're already at full health, nothing to do here!</p>
      <button @click="closeModal()" class="mt-2 float-right">Cancel</button>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      player: "player"
    }),
    ...mapGetters({
      currency: "getCurrency",
      healthCost: "getHealthCost"
    })
  },
  methods: {
    ...mapActions({
      topUpHealth: "topUpHealth"
    }),
    closeModal: function () {
      this.$parent.$emit('close-modal');
    }
  }
}
</script>

<style>

</style>
