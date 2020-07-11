<template lang="pug">
  #app
    #nav
      
      router-link(to="/") 
        Icon(icon="home")
        |  Home
      |
      | |
      |
      router-link(:to={ name: 'EventCreate' })
        Icon(icon="plus-square")
        |  Create
    router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  opacity: 0.5;
  text-decoration: none;
  color: #42b983;
}

#nav a.router-link-exact-active {
  opacity: 1;
}
</style>
