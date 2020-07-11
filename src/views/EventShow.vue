<template lang="pug">
  div
    Icon(icon="passport")
    span.bold  Event {{ event.id }}
    h1 {{ event.title }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import events from '@/lib/events'

@Component
export default class EventShow extends Vue {
  @Prop() private id!: string
  get event() {
    return events.find(({ id }) => id == this.$props.id)
  }
}
</script>
