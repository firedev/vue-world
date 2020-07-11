<template lang="pug">
  .shadow.p2.r1
    router-link.black(:to="{ name: 'EventShow', params: { id: event.id } }")
      | {{ event.time }} @ {{ event.date}}
      h3 {{event.title}}
      .small(v-if="event.attendees.length")
        | {{ event.attendees.length }} attending
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class EventCard extends Vue {
  @Prop() private event!: object
}
</script>
