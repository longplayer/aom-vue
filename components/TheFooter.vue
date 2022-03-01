<template>
  <footer id="app-footer" class="app-footer">
    <section class="footer container">
      <p>Copyright {{ year }} Miguel Fernandez - <!-- <span class="ui-icon icon-mail_outline" title="Contacez-moi" href="mailto:a_normal_graffizm@hotmail.com"></span> <a href="mailto:a_normal_graffizm@hotmail.com" target="_blank" title="Contactez moi">a_normal_graffizm@hotmail.com</a> -  -->made with <span class="emoji e-heart">❤️</span> by longplayer</p>
    </section>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
