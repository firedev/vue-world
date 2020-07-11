<template lang="pug">
  div 
    h1 World Events
    EventCard(id="1") Park Cleanup
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventCard from '@/components/EventCard.vue'

@Component({
  components: { EventCard },
})
export default class EventList extends Vue {}
</script>
