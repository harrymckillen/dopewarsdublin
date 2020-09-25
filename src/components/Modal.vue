<template>
  <div v-if="displayModal" class="modal absolute center-modal">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">{{action}}</div>
        <div class="title-bar-controls">
          <button aria-label="Close" @click="toggleModal"></button>
        </div>
      </div>
      <div class="window-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Modal',
  props: {
  },
  computed: {
    ...mapGetters({
      displayModal: "displayModal"
    })
  },
  methods: {
    ...mapActions({
      toggleModal: 'toggleModal'
    })
  }
}
</script>

<style lang="scss" scoped>
  .center-modal {
    width: 70%;
    top: 20%;
    left: 50%;
    margin-left: -35%;
  }
</style>
