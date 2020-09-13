<template>
  <fieldset class="">
    <legend>Sell</legend>
    <div class="w-full faux-select" :size="items.length">
      <span tabindex="0" class="flex justify-between" v-for="(item, index) in items" :key="index">
        <span>{{item.name}}</span>
        <span>&euro; {{item.avgPrice}}</span>
      </span>
    </div>
  </fieldset>
</template>

<script>
import { mapGetters } from "vuex";


export default {

  computed: {
    ...mapGetters({
      items: "getHeldItems"
    })
  }
}
</script>

<style>

</style>
