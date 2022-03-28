<template>
  <base-modal
    v-show="isVisible"
    @close="closeModal"
  >
    <template #header>
      <span class="block">
        <span class="app-subtitle block">Inscrivez-vous à la newsletter</span>
        <span class="app-title">Age of Robots</span>
      </span>
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
    formActionUrl() { return 'https://lpprod.us20.list-manage.com/subscribe/post?u=5a12458d9006c6a4b76f63d46&id=314a5d4c0a' },
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
