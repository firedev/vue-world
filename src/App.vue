<template lang="pug">
  #app.px2
    NavBar.py2.mb3.border-bottom
    router-view
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  opacity: 0.5;
  text-decoration: none;
  color: #42b983;
}
#nav a.router-link-exact-active {
  opacity: 1;
}
</style>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
}
</script>
