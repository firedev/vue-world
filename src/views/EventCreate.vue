<template lang="pug">
  div
    form(@submit.prevent="handleSubmit")
      h1 Create Events
      .flex
        Datepicker(v-model="event.date" class="border" placeholder="Select a date")
        select(v-model="event.time")
          option(v-for="time in times" :value="time") {{ time}}
      p
        BaseIcon(icon="user") {{user.name}}
      p
        input.border.rounded(v-model="event.title" placeholder="Event title")
      p
        BaseIcon(icon="address-book") Categories: {{catLength}}
      .flex
        div(v-for="category in categories")
          label
            input(type="radio" v-model="event.category" name="category" :value="category")
            | {{ category}}
      p
        button(type="submit") Ok
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

@Component({
  components: {
    Datepicker,
  },
  computed: {
    ...mapGetters('categories', ['catLength']),
    ...mapState(['user', 'categories']),
  },
  methods: mapActions('events', ['eventCreate']),
})
export default class EventCreate extends Vue {
  event: EventType | undefined = undefined
  times = Array(24)
    .fill(0)
    .map((_, i) => i + ':00')

  created() {
    this.event = this.createNewEvent()
  }

  handleSubmit() {
    this.eventCreate(this.event)
      .then(() => {
        const event = this.event as EventType
        this.$router.push({
          name: 'EventShow',
          params: { id: event.id.toString() },
        })
        this.event = this.createNewEvent()
      })
      .catch(error => console.log('Something went wrong', error))
  }

  createNewEvent(): EventType {
    return {
      id: new Date().getTime(),
      user: this.$store.state.user,
      date: new Date(),
      time: '0:00',
      category: this.$store.state.categories[0],
      title: '',
      attendees: [],
    }
  }
}
</script>
