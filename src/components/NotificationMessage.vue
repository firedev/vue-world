<template lang="pug">
  div.px2.py1.rounded(:class="className")
    BaseIcon(:icon="icon")
    span.px
    | {{ notification.message }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { mapActions } from 'vuex'

const ICONS = {
  error: 'exclamation-triangle',
  [undefined]: 'smile',
}

const COLORS = {
  error: 'bg-yellow',
  [undefined]: 'bg-orange',
}

@Component({
  methods: mapActions('notifications', ['remove']),
})
export default class NotificationMessage extends Vue {
  @Prop() private notification!: NotificationType

  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification.id), 3000)
  }

  beforeDestroy() {
    clearTimeout(this.timeout)
  }

  get className() {
    return COLORS[this.notification.type]
  }

  get icon() {
    return ICONS[this.notification.type]
  }
}
</script>
