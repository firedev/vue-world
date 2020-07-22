<template lang="pug">
  div
    h1.center World Events
    .center
      router-link(v-if="showPrev" :to="{name: 'EventList', query: { page: page -1 } }" rel="prev")
        BaseIcon(icon="arrow-left")
      router-link(v-if="showNext" :to="{name: 'EventList', query: { page: page +1 } }" rel="next")
        BaseIcon(icon="arrow-right")

    EventCard.md-col-6.mx-auto.my2(
      v-for="event in events" :key="event.id" :event="event"
    )

    .center
      router-link(v-if="showPrev" :to="{name: 'EventList', query: { page: page -1 } }" rel="prev")
        BaseIcon(icon="arrow-left")
      router-link(v-if="showNext" :to="{name: 'EventList', query: { page: page +1 } }" rel="next")
        BaseIcon(icon="arrow-right")
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
  perPage = 3

  created() {
    this.$store.dispatch('eventsFetch', {
      perPage: this.perPage,
      page: this.page,
    })
  }

  get page() {
    return parseInt(this.$route.query.page.toString()) || 1
  }
  get showPrev() {
    return this.page > 1
  }
  get showNext() {
    return this.page * this.perPage < this.$store.state.eventsTotal
  }
}
</script>
