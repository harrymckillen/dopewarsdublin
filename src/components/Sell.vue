<template>
  <fieldset>
    <legend>Sell</legend>
    <div class="w-full faux-select" v-if="items.length > 0">
      <div tabindex="0" class="flex justify-between" v-for="(item, index) in items" :key="index">
        <div>{{item.name}}</div>
        <div><span v-html="currency"></span>  {{item.avgPrice}}</div>
      </div>
    </div>
    <div v-else class="empty-pockets">
      You have nothing in your pockets.
    </div>
  </fieldset>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      items: "getHeldItems",
      currency: "getCurrency"
    })
  }
}
</script>

<style scoped>
  .empty-pockets {
    min-height: 170px;
  }
</style>
