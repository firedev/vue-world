<template lang="pug">
  div
    h1.center World Events
    EventCard.md-col-6.mx-auto.my2(
      v-for="event in events" :key="event.id" :event="event"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'

@Component({
  components: { EventCard },
  computed: mapState(['events']),
})
export default class EventList extends Vue {
  created() {
    this.$store.dispatch('eventsFetch')
  }
}
</script>
