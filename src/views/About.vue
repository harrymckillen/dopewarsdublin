<template>
  <div class="about w-full md:w-3/5 lg:w-1/2 xl:w-1/3 mx-auto">

    <div class="window default-window-height">
      <div class="title-bar">
        <div class="title-bar-text">Dope Wars: Dublin - About</div>
        <div class="title-bar-controls">
          <button @click="exitGame" aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body text-center ">
        <main class="w-1/2 mx-auto my-16 h-full">
          <h2 class="text-base">Why</h2>
          <p>Desire to expand my knowledge of Vue &amp; Vuex, outside of tutorials and articles etc. and, for fun, to build a clone of Dope Wars.</p>

          <h2 class="mt-8 text-base">How</h2>
          <p>Uses <a href="https://jdan.github.io/98.css/#intro" target="_blank" >98.css</a> from Jordan Scales. Also uses Vue 2 + Vuex + Vue Router. And Tailwind CSS for layout &amp; additional styling.</p>
        </main>
        <div class="bg-teal-500 md:bg-red-500 lg:bg-blue-500 h-8 w-8 p-4">La</div>
        <div class="bg-gray-200 p-1 w-full flex flex-wrap mt-4 box-border">
          <div class="w-1/2 md:w-1/3 bg-blue-500 h-4">1</div>
          <div class="w-1/2 md:w-2/3 bg-red-500 h-4">2</div>
        </div>
        <div class="bg-gray-200 p-1 w-full flex flex-wrap mt-4 box-border">
          <div class="w-full md:w-1/2 bg-blue-500 h-4">1</div>
          <div class="w-full md:w-1/2 bg-red-500 h-4">2</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    exitGame() {
      if (window.confirm("Do you really want to exit the game?")) {
        this.$router.push("/");
      }
    },
  }
}
</script>
