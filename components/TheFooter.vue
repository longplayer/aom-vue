<template>
  <footer id="the-footer" class="the-footer">
    <section class="footer-section">
      <p>
        © {{ year }} Miguel Fernandez - made with <span class="emoji e-heart">❤️</span> by <base-button :btn="lpButton" />
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      lpButton: {
        name: 'contact-lp',
        title: 'longplayer on Github',
        label: 'longplayer',
        href: 'https://github.com/longplayer',
        tag: 'a',
        class: 'link',
        target: '_blank'
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.the-footer {

  border-top: 1px solid #eee;
  @apply w-full h-24 mt-24 flex bg-gray-900;

  .footer-section {
    @apply container m-auto p-4;

    p {
      @apply text-center text-xs tracking-wider text-gray-400;
    }

    a {
      &:hover,
      &:active,
      &:focus {
        color: #fff;
      }
    }
    
    .emoji {
      font-size: 10px;
    }
  }

  .ev-item {
    margin-bottom: 2.5rem;
  }
}

</style>
