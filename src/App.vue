<template>
  <div id="app" class="mt-8">
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

<style>
body {
  background: #c0c0c0;
}
#nav {
  padding: 20px;
  text-align: center;
}
#nav a {
  padding: 0 30px;
  font-weight: bold;
  color: #00f;
}
#nav a.router-link-exact-active {
  color: purple;
}
</style>
