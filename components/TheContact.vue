<template>
  <section id="app-contact" class="app-contact container">
    <article>
      <header>
        <h2 class="app-title">{{ contact.title }}</h2>
      </header>
      <base-button :btn="contact.button"></base-button>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: this.$store.getters['contact/getContact'],
    }
  },
}
</script>
