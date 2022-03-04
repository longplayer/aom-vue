<template>
  <footer id="the-footer" class="the-footer">
    <section class="footer-section">
      <p>
        Copyright {{ year }} Miguel Fernandez - made with <span class="emoji e-heart">❤️</span> by longplayer
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="postcss" scoped>
.the-footer {

  p { margin: 0; }
  a,
  a:link,
  a:visited { color: #fff; }

  background: #1d1d1b;
  border-top: 1px solid #eee;
  color: #fff;
  @apply w-full h-24 mt-24 flex text-center text-xs tracking-wider;

  .footer-section {
    @apply container m-auto p-4;
    
    .emoji {
      font-size: 10px;
    }
  }
  .ev-item {
    margin-bottom: 2.5rem;
  }


}

</style>
