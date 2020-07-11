<template lang="pug">
  div
    h1 Event {{ id }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class EventShow extends Vue {
  @Prop() private id!: string
}
</script>
