<template lang="pug">
  div(v-if="event.id")
    BaseIcon.bold(icon="passport")
      |  Event {{ event.id }}
    h1.p0.mb2 {{ event.title }}
    | {{ event.time }} @ {{ date}}
    .small(v-if="event.attendees.length")
      | {{ event.attendees.length }} attending

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  methods: mapActions('events', ['eventFetch', 'eventClear']),
})
export default class EventShow extends Vue {
  @Prop() private id!: string

  get event() {
    return this.$store.state.events.event
  }

  get date() {
    return new Date(this.event.date).toLocaleDateString()
  }

  created() {
    this.eventFetch({ id: this.$props.id })
  }
  beforeDestroy() {
    this.eventClear()
  }
}
</script>
