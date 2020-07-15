<template lang="pug">
  span
    FontAwesomeIcon(:icon="icon")
    span.pl1(v-if="hasDefaultSlot")
      slot
</template>
<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faPlusSquare,
  faPassport,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Component, Prop, Vue } from 'vue-property-decorator'

library.add(faHome, faUser, faPlusSquare, faPassport, faAddressBook)

@Component({
  components: { FontAwesomeIcon },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },
  },
})
export default class BaseIcon extends Vue {
  @Prop() private icon!: string
}
</script>
