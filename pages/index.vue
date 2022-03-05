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

    <the-waterfall />

    <!-- <the-newsletter-registration
      :action="formActionUrl"
    ></the-newsletter-registration> -->

    <the-contact 
      title="N'hesitez pas à me contactez"
      :button="contactButton"
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
        href: `mailto:${this.$nuxt.context.env.APP_MAIL_SEND_ADDRESS}`
      }
    }
  },
  computed: {
    showHighlight() { return this.$store.getters['events/getShowHighlight'] },
    theEvent() { return this.$store.getters['events/getHighlight'] },
    // formActionUrl() { return this.$nuxt.context.env.APP_MAILCHIMP_FORM_ACTION },
  }
}
</script>
