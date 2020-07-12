<template lang="pug">
  span
    FontAwesomeIcon(:icon="icon")
    slot
</template>
<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faPlusSquare,
  faPassport,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Component, Prop, Vue } from 'vue-property-decorator'

library.add(faHome, faPlusSquare, faPassport)

@Component({
  components: { FontAwesomeIcon },
})
export default class BaseIcon extends Vue {
  @Prop() private icon!: string
}
</script>
