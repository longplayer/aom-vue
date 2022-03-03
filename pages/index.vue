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

    <!-- <the-waterfall /> -->

    <the-newsletter-registration
      action="https://art-of-miguel-fernandez.us12.list-manage.com/subscribe/post?u=7064e11cf4419026247cbc5b6&id=98b4888011"
    ></the-newsletter-registration>

    <the-contact />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    showHighlight() { return this.$store.getters['events/getShowHighlight'] },
    theEvent() { return this.$store.getters['events/getHighlight'] },
  }
}
</script>
