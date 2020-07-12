<template lang="pug">
  div 
    h1.center World Events
    EventCard.md-col-6.mx-auto(
      v-for="event in events" :key="event.id" :event="event"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventCard from '@/components/EventCard.vue'
import events from '@/lib/events'

@Component({
  components: { EventCard },
})
export default class EventList extends Vue {
  get events() {
    return events
  }
}
</script>
