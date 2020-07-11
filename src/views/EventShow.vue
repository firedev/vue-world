<template lang="pug">
  div
    h1 Event {{ event }}
</template>

<script>
export default {
  props: {
    event: { type: String, default: '' },
  },
}
</script>
