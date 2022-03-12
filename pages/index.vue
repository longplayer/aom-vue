<template>
  <div class="app-home">
    <base-hero></base-hero>

    <template v-if="showHighlight">
      <event-item
        :id="theEvent.id"
        :title="theEvent.title"
        :desc="theEvent.desc"
        :date="theEvent.date"
        :button="theEvent.button"
        :image="theEvent.image"
        poster-background-color="#000"
      ></event-item>
    </template>

    <the-gridview />

    <the-contact 
      title="N'hesitez pas à me contactez"
      :button="contactButton"
      @openModal="showModal"
    />

    <the-newsletter-modal
      :is-visible="isModalVisible"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      contactButton: {
        tag: 'a',
        name: 'contact button',
        label: 'Envoyer un email',
        class: 'btn btn-black',
        href: `mailto:a_normal_graffizm@hotmail.com`
      }
    }
  },
  computed: {
    showHighlight() { return this.$store.getters['events/getShowHighlight'] },
    theEvent() { return this.$store.getters['events/getHighlight'] },
    isModalVisible() { return this.$store.getters['registration/getVisibility'] },
  },
  watch: {
    isModalVisible() {
      this.blockPageScroll()
    }
  },
  methods: {
    showModal() {
      this.$store.dispatch('registration/setVisibility', true)
    },
    closeModal() {
      this.$store.dispatch('registration/setVisibility', false)
    },
    blockPageScroll() {
      document.body.classList.toggle('pge-scroll-block')
    }
  }
}
</script>
