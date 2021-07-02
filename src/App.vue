<template>
  <div id="app">
    <router-view />
    <Header />
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  background: #ff00b3;

  .nav {
    padding: 20px;
    text-align: center;
    a {
      padding: 0 30px;
      font-weight: bold;
      color: #00f;

      &.router-link-exact-active {
        color: purple;
      }
    }
  }
  .default-window-height {
    min-height: 400px;
  }

  .faux-select {
    padding: 3px 4px;
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
    background-color: #fff;
    box-sizing: border-box;
    min-height: 170px;
    max-height: 170px;
    overflow: auto;

    & > div:focus {
      background-color: #1e90ff;
      outline: #000 dotted 1px;
      color: #fff;
    }
  }
}
</style>
