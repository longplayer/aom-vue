<template>
  <section id="app-contact" class="app-contact">
    <article>
      <header>
        <h2 class="app-title">{{ title }}</h2>
      </header>
      <template v-if="button !== null">
        <base-button :btn="button"></base-button>
      </template>
      <p class="newsletter-invitation">Ou bien, vous pouvez aussi vous <a href="#newsletter-registration" @click.prevent="$emit('openModal')">inscrire à ma newsletter</a> pour reçevoir mon actualité par email. Ainsi, vous serez aux courant de mes prochains évènements!</p>
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
  emits: ['openModal'],
}
</script>

<style lang="postcss" scoped>
.app-contact {
  @apply container mx-auto;

  .newsletter-invitation {
    max-width: 720px;
    @apply mt-12 mx-auto;

    a {
      font-weight: 700;
    }
  }
}
</style>
