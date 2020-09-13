<template>
  <div v-if="show" class="modal absolute center-modal">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">{{action}}</div>
        <div class="title-bar-controls">
          <button aria-label="Close" @click="closeModal"></button>
        </div>
      </div>
      <div class="window-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    action: String,
    show: Boolean

  },
  methods: {
    closeModal() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="scss" scoped>
  .center-modal {
    width: 300px;
    top: 20%;
    left: 50%;
    margin-left: -150px;
  }
</style>
