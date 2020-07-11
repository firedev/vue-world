<template lang="pug">
  div 
    h1 World Events
    ul
      li
        router-link(:to={ name: 'EventShow', params: { id: 1 } }) Event 1
  
</template>
