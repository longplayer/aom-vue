<template>
  <!-- Menu component -->
  <div id="app-menu" class="app-menu">
    <nav class="m-nav">
      <ul class="m-list">
        <li class="m-item logo">
          <span class="logo-sup">Age of Robots of</span><br/>
          <span class="logo-sub">The art of Miguel Fernandez</span>
        </li>
      </ul>
    </nav>
    <ul class="sc-list">
      <li class="sc-item">
        <a
          class="ui-icon icon-facebook"
          title="Partager sur Facebook"
          href=""
        ></a>
      </li>
      <li class="sc-item">
        <a
          class="ui-icon icon-twitter"
          title="Partager sur Twitter"
          href=""
        ></a>
      </li>
      <li class="sc-item">
        <a
          class="ui-icon icon-instagram"
          title="Suivez moi Instagram"
          href="https://www.instagram.com/age_of_robots/"
          target="_blank"
        ></a>
      </li>
      <li class="sc-item">
        <a
          class="ui-icon icon-mail_outline"
          title="Contacez-moi"
          href="mailto:a_normal_graffizm@hotmail.com"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">

.logo {
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;

  font-size: 14px;
  line-height: 1.5;
}

.app-menu {
  height: 100%;
  @apply flex;
}
.app-menu a {
  color: #fff;
}
.app-menu a:hover,
.app-menu a:active,
.app-menu a:focus {
  text-decoration: none;
}

.m-nav {
  flex: 1 1 auto;
  display: flex;
}
.m-list {
  margin: auto auto auto 0;
  flex: 1 1 auto;
  @apply flex flex-wrap;
}
.m-item {
  list-style-type: none;
}


.sc-list {
  margin: auto;
}

.sc-item {
  margin: auto;
  text-align: center;
  width: 16px;
  height: 16px;
}

.sc-list .ui-icon {
  line-height: 16px;
}

.sc-list .ui-icon::before {
  font-size: 0.8em;
}

.sc-list li:nth-child(1),
.sc-list li:nth-child(2) {
  display: none;
}
</style>
