<template>
  <div class='app-home'>
    <app-hero></app-hero>

    <template v-if="showHighlight">
      <app-event-item
        :id="event.id"
        :title="event.title"
        :desc="event.desc"
        :date="event.date"
        :button="event.button"
        :image="event.image"
      ></app-event-item>
    </template>

    <app-waterfall />

    <app-registration
      action="https://art-of-miguel-fernandez.us12.list-manage.com/subscribe/post?u=7064e11cf4419026247cbc5b6&id=98b4888011"
    ></app-registration>

    <app-contact />
  </div>
</template>

<script>
import AppHero from '@/components/BaseHero.vue'
import AppEventItem from '@/components/EventItem'
import AppWaterfall from '@/components/TheWaterfall'
import AppContact from '@/components/TheContact'
import AppRegistration from '@/components/TheNewsletterRegistration'

export default {
  name: 'home',
  data () {
    return {
      showHighlight: this.$store.getters.appEvents.showHighlight,
      event: this.$store.getters.appEvents.highlight
    }
  },
  components: {
    AppHero,
    AppEventItem,
    AppWaterfall,
    AppContact,
    AppRegistration
  }
}
</script>
