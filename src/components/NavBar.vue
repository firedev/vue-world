<template lang="pug">
  #nav
    router-link(to="/") 
      BaseIcon(icon="home")
      span.bold  Home
    
    span.px1.muted |
    
    router-link(:to={ name: 'EventCreate' })
      BaseIcon(icon="plus-square")
      span.bold  Create
</template>

<style scoped>
#nav a {
  opacity: 0.5;
  text-decoration: none;
  color: #42b983;
}
#nav a.router-link-exact-active {
  opacity: 1;
}
</style>
