<template>
  <fieldset class="">
    <legend>Buy</legend>
    <div class="w-full faux-select">
      <span tabindex="0" class="flex justify-between" v-for="(drug, index) in forSaleItems" :key="index">
        <span>{{drug.name}}</span>
        <span>&euro; {{drug.cost}}</span>
      </span>
    </div>
  </fieldset>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      forSaleItems: "getItemsForSaleByLocation"
    })
  }
}
</script>

<style>

</style>
