<template>
  <section id="app-contact" class="app-contact">
    <article>
      <header>
        <h2 class="app-title">{{ title }}</h2>
      </header>
      <template v-if="button !== null">
        <base-button :btn="button"></base-button>
      </template>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Contact me now'
    },
    button: {
      type: Object,
      default: null
    },
  },
}
</script>

<style lang="postcss" scoped>
.app-contact {
  @apply container;
}
</style>
