<template lang="pug">
  div.flex.flex-column.justify-center
    NotificationMessage.my(
      v-for="notification in notifications.notifications" 
      :notification="notification"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'
import NotificationMessage from '@/components/NotificationMessage.vue'

@Component({
  components: { NotificationMessage },
  computed: mapState(['notifications']),
  methods: mapActions('notifications', []),
})
export default class NotificationContainer extends Vue {}
</script>
