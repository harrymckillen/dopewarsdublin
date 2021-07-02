<template>
  <fieldset class="h-full">
    <legend>Move to</legend>
    <div class="flex flex-wrap justify-around">
      <button class="w-1/3 flex-grow m-0.5 h-10" v-for="(location, index) in locations" :key="index" :disabled="player.location.id === location.id" @click="moveLocation(location)">{{location.name}}</button>
    </div>
  </fieldset>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { LOCATIONS } from '@/constants/location.constants';

export default {
  data() {
    return {
      locations: LOCATIONS
    }
  },
  computed: {
    ...mapState({
      player: "player"
    })
  },
  methods: {
    ...mapActions({
      moveLocation: "moveLocation"
    })
  }
};
</script>

<style>
</style>
