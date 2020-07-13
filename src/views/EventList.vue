<template lang="pug">
  div 
    h1.center World Events
    EventCard.md-col-6.mx-auto.my2(
      v-for="event in events" :key="event.id" :event="event"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import EventCard from '@/components/EventCard.vue'

@Component({
  components: { EventCard },
})
export default class EventList extends Vue {
  events = []
  created() {
    axios
      .get('http://localhost:3000/events')
      .then(response => (this.events = response.data))
      .catch(error => console.error(error.message))
  }
}
</script>
