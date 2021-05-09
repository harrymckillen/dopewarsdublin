<template>
  <div>
    <div v-if="gunCost < player.cash">
      <p>Would you like to buy a gun for <span v-html="currency"></span> {{gunCost}}</p>
      <button :disabled="gunCost > player.cash" @click="buyGun(); closeModal()" class="mt-2 float-right">Confirm Gun Purchase</button>
    </div>
    <div v-else>
      <p>You do not have enough cash for this gun!</p>
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
      gunCost: "getGunCost"
    })
  },
  methods: {
    ...mapActions({
      buyGun: "buyGun"
    }),
    closeModal: function () {
      this.$parent.$emit('close-modal');
    }
  }
}
</script>

<style>

</style>
