<template>
  <section id="app-contact" class="app-contact container">
    <article>
      <header>
        <h2 class="app-title">{{ contact.title }}</h2>
      </header>
      <app-btn :btn="contact.button"></app-btn>
    </article>
  </section>
</template>

<script>
import Btn from '@/components/elements/Button'

export default {
  data () {
    return {
      contact: this.$store.getters.contact
    }
  },
  components: {
    appBtn: Btn
  }
}
</script>
