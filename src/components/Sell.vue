<template>
  <fieldset class="">
    <legend>Sell</legend>
    <div class="w-full faux-select" :size="items.length">
      <div tabindex="0" class="flex justify-between" v-for="(item, index) in items" :key="index">
        <div>{{item.name}}</div>
        <div><span v-html="currency"></span>  {{item.avgPrice}}</div>
      </div>
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

<style>

</style>
