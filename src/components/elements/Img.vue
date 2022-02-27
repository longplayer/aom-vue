<template>
  <img
    :alt="alt"
    :src="src"
    :srcset="srcset"
  >
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    srcset: {
      type: String
    }
  }
}
</script>
