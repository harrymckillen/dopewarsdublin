<template>
  <div class="about w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h1 class="text-lg">About</h1>

    <div class="window relative" style="min-height:400px">
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
          <p>Uses <a href="https://jdan.github.io/98.css/#intro" target="_blank" >98.css</a> from Jordan Scales. Also uses Vue 2 + Vuex + Vue Router. And Tailwind CSS for additional spacing.</p>

        </main>
      </div>
      <p class="absolute w-full text-center bottom-0 mb-8">&copy; Me, 2020</p>
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
