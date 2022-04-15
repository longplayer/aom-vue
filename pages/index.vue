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

    <!-- ref="saltest" -->
    <the-gridview 
      data-sal="slide-left"
      data-sal-duration="400"
      data-sal-delay="150"
      data-sal-easing="cubic-bezier(0, 0, 0.15, 1)"
    />

    <the-contact 
      data-sal="slide-right"
      data-sal-duration="400"
      data-sal-delay="150"
      data-sal-easing="cubic-bezier(0, 0, 0.15, 1)"
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
  head() {
    return {
      meta: [
        // https://metatags.io/
        { hid: 'og:image', name: 'og:image', content: this.shareImageFile },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'twitter:image', name: 'twitter:image', content: this.shareImageFile },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      ]
    }
  },
  computed: {
    showHighlight() { return this.$store.getters['events/getShowHighlight'] },
    theEvent() { return this.$store.getters['events/getHighlight'] },
    isModalVisible() { return this.$store.getters['registration/getVisibility'] },
    shareImageFile() {
      let output = ''
      if (typeof document !== 'undefined') { output += document.location.origin}
      return `${output}${this.$axios.defaults.baseURL}${this.$store.getters['hero/getHeroState'].image.path}`
    },
    sal() { return this.$nuxt.context.app.sal}
  },
  watch: {
    isModalVisible() {
      this.$dom.blockPageScroll()
    }
  },
  mounted() {
    this.sal.enable()
    // this.sal.elements.forEach(el => {
    //   el.addEventListener('sal:in', ({detail}) => {})
    //   el.addEventListener('sal:out', ({detail}) => {})
    // })
  },
  destroyed() {
    this.sal.reset()
  },
  methods: {
    showModal() {
      this.$store.dispatch('registration/setVisibility', true)
    },
    closeModal() {
      this.$store.dispatch('registration/setVisibility', false)
    },
  }
}
</script>
