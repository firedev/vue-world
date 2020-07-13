<template lang="pug">
  div(v-if="event.id")
    BaseIcon.bold(icon="passport")
      |  Event {{ event.id }}
    h1.p0.mb2 {{ event.title }}
    | {{ event.time }} @ {{ event.date}}
    .small(v-if="event.attendees.length")
      | {{ event.attendees.length }} attending

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import EventService from '@/services/EventService'

@Component
export default class EventShow extends Vue {
  @Prop() private id!: string

  event = {}
  created() {
    EventService.getEvent(this.$props.id)
      .then(response => (this.event = response.data))
      .catch(error => console.error(error.message))
  }
}
</script>
