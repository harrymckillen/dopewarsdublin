<template>
  <fieldset class="">
    <legend>Buy</legend>
    <div class="w-full faux-select">
      <div tabindex="0" class="flex justify-between" v-for="(drug, index) in forSaleItems" :key="index">
        <div>{{drug.name}}</div>
        <div><span v-html="currency"></span> {{drug.cost}}</div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      forSaleItems: "getItemsForSaleByLocation",
      currency: "getCurrency"
    })
  }
}
</script>

<style>

</style>
