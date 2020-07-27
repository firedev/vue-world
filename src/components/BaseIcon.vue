<template lang="pug">
  span
    FontAwesomeIcon(:icon="icon")
    span.pl1(v-if="hasDefaultSlot")
      slot
</template>
<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAddressBook,
  faArrowLeft,
  faArrowRight,
  faHome,
  faPassport,
  faPlusSquare,
  faUser,
  faExclamationTriangle,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Component, Prop, Vue } from 'vue-property-decorator'

library.add(
  faAddressBook,
  faArrowLeft,
  faArrowRight,
  faHome,
  faPassport,
  faPlusSquare,
  faUser,
  faExclamationTriangle,
  faSmile,
)

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
