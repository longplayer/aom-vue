<template>
  <footer id="app-footer" class="app-footer">
    <section class="footer container">
      <p>
        Copyright {{ year }} Miguel Fernandez -
        <!-- <span class="ui-icon icon-mail_outline" title="Contacez-moi" href="mailto:a_normal_graffizm@hotmail.com"></span> <a href="mailto:a_normal_graffizm@hotmail.com" target="_blank" title="Contactez moi">a_normal_graffizm@hotmail.com</a> -  -->made
        with <span class="emoji e-heart">❤️</span> by longplayer
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
footer {
  height: 100px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
}

footer {
  background: #1d1d1b;
  border-top: 1px solid #eee;
}

footer a,
footer a:link,
footer a:visited {
  color: #fff;
}


.app-footer {
  height: auto;
  background: #1d1d1b;
  border-top: 1px solid #eee;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}

.footer.container {
  padding-top: 10px;
  padding-bottom: 10px;
}
.app-footer .ev-item {
  margin-bottom: 40px;
}

.app-footer .emoji {
  font-size: 10px;
}

.app-footer a,
.app-footer a:link,
.app-footer a:visited {
  color: #fff;
}

.footer p {
  margin: 0;
}


</style>
