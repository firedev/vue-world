<template lang="pug">
  div
    BaseIcon(icon="user") {{user.name}}

    h1 Create Events

    BaseIcon(icon="address-book") Categories: {{catLength}}
    ul
      li(v-for="category in categories") {{category}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters(['catLength']),
    ...mapState(['user', 'categories']),
  },
})
export default class EventCreate extends Vue {}
</script>
