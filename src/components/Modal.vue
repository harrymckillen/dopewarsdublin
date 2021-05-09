<template>
  <div v-show="visible" @click="closeModal" class="fixed w-full h-full overflow-hidden inset-0 z-10 bg-blue-800 bg-opacity-50 center-modal">
    <div class="modal absolute w-11/12 md:w-3/5 lg:w-1/2 xl:w-1/3 z-20" @click.stop role="dialog" :aria-label="title">
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">{{title}}</div>
          <div class="title-bar-controls" v-if="closeable">
            <button aria-label="Close" @click="closeModal"></button>
          </div>
        </div>
        <div class="window-body clearfix">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    title: String,
    visible: Boolean,
    closeable: Boolean
  },
  methods: {
    closeModal: function () {
      this.$emit('close-modal');
    }
  }
}
</script>

<style lang="scss" scoped>
  .center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
  .modal {
    margin-top: -3em;
  }
}

</style>
