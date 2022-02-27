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

    <app-waterfall></app-waterfall>
    <app-registration
      action="https://art-of-miguel-fernandez.us12.list-manage.com/subscribe/post?u=7064e11cf4419026247cbc5b6&id=98b4888011"
    ></app-registration>
    <app-contact></app-contact>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHero from '@/components/ui/Hero.vue'
import AppEventItem from '@/components/layout/EventItem'
import AppWaterfall from '@/components/layout/Waterfall'
import AppContact from '@/components/layout/Contact'
import AppRegistration from '@/components/ui/Registration'

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
