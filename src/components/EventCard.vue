<template lang="pug">
  .shadow.p2.r1
    router-link(:to="{ name: 'EventShow', params: { id } }")
      | {{ event.time }} @ {{ event.date}}
      h3
        slot
      .small(v-if="event.attendees.length")
        | {{ event.attendees.length }} attending
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class EventCard extends Vue {
  @Prop() private id!: string
  event = {
    id: 1,
    title: 'Beach Cleanup',
    date: 'Jul 4',
    time: '6:00',
    attendees: [{ id: 'attnd1', name: 'Nikolay X' }],
  }
}
</script>
