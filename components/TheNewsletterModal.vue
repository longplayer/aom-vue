<template>
  <base-modal
    v-show="isVisible"
    @close="closeModal"
  >
    <template #header>
      <h1>Inscrivez vous</h1>
    </template>
    <template #body>
      <the-newsletter-registration
        :action="formActionUrl"
        :show-form-title="false"
        @closeModal="closeModal"
      ></the-newsletter-registration>
    </template>
    <template #footer>
      <!-- custom footer -->
    </template>
  </base-modal>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['closeModal', 'showModal'],
  computed: {
    formActionUrl() { return this.$nuxt.context.env.APP_MAILCHIMP_FORM_ACTION },
  },
  methods: {
    showModal() {
      this.$emit('showModal')
    },
    closeModal() {
      this.$emit('closeModal')
    }
  },
}
</script>
