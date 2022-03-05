<template>
  <div id="app-menu" class="app-menu">
    <div class="logo">
      <span class="logo-sup">Age of Robots of</span>
      <span class="logo-sub">The art of Miguel Fernandez</span>
    </div>
    <nav class="m-nav">
      <ul class="m-list">
        <li class="m-item">
          <base-button
            v-scroll-to="'#app-waterfall'"
            :btn="{
              name: 'go to travaux',
              label: 'Mes travaux',
              tag: 'a',
              href: '#app-waterfall'
            }"
          />
        </li>
      </ul>
    </nav>
    <ul class="sc-list">
      <li class="sc-item">
        <base-button
          :btn="{
            tag: 'a',
            name: 'partage facebook',
            label: 'Mes travaux',
            title: 'Suivez moi sur Facebook',
            class: 'ui-icon icon-facebook',
            target: '_blank',
            href: '',
          }"
        />
      </li>
      <li class="sc-item">
        <base-button
          :btn="{
            tag: 'a',
            name: 'partage instagram',
            label: '',
            title: 'Suivez moi sur Instagram',
            class: 'ui-icon icon-instagram',
            target: '_blank',
            href: instagramAccountUrl,
          }"
        />
      </li>
      <li class="sc-item">
        <base-button
          :btn="{
            tag: 'a',
            name: 'contact mail',
            label: '',
            title: 'Contacez-moi',
            class: 'ui-icon icon-mail_outline',
            href: mailTo,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    mailTo() { return `mailto:${this.$nuxt.context.env.APP_MAIL_SEND_ADDRESS}` },
    instagramAccountUrl() { return `${this.$nuxt.context.env.APP_INSTAGRAM_ACCOUNT_URL}` },
  }
}
</script>

<style lang="postcss">
.app-menu {
  height: 100%;
  @apply flex;

  a {color: #fff;}
  a:hover,
  a:active,
  a:focus {text-decoration: none;}

  .logo {
    flex: 0 0 auto;
    color: #fff;
    height: auto;
    margin: auto 0;
    @apply p-1;
    
    &-sup {
      display: block;
      font-size: 1.5rem;
      line-height: 1.5rem;
      text-transform: uppercase;
      margin-bottom: .25rem;
    }

    &-sub {
      display: block;
      font-weight: 300;
      font-size: .75rem;
      line-height: .75rem;
    }
  }

  .m-nav {
    flex: .1 0 auto;
    margin: auto 1rem auto auto;

    .m-list {
      margin: auto 0;
      @apply flex flex-wrap justify-center;

      .m-item {
        list-style-type: none;
        font-size: .8rem;
        transition: all 300ms ease-in 100ms;
        @apply p-2 relative overflow-hidden;

        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          background-color: #fff;
          transform: translate(-101%, 90%);
          transition: transform 300ms ease-in;
        }

        &:hover,
        &:active,
        &:focus {
          &::after {
            transform: translate(0, 90%);
          }
        }
      }
    }
  }

  .sc-list {
    flex: .1 0 auto;
    margin: auto 0 auto 0;
    @apply flex flex-wrap justify-between;

    .sc-item {
      margin: auto;
      text-align: center;
      width: 1rem;
      height: 1rem;

      &:nth-child(1) { display: none; }

      .ui-icon {
        line-height: 1rem;

        &::before {
          font-size: 0.8em;
        }
      }
    }
  }

  @screen x2sm {
    .m-list {
      flex: 0 0 auto;
    }

    .sc-list {
      margin: 0 0 0 auto;
      
      .sc-item {
        width: 1rem;
        height: 1rem;
        
        .ui-icon {
          line-height: 1rem;
          
          &::before {
            font-size: 1em;
          }
        }
      }
    }
  }

  @screen xsm {
    .sc-list {
      width: 64px;
      margin: 0;
    }
  }
  @screen md {
    .logo {}
    .m-nav {
      .m-list {
        .m-item {
        }
      }
    }
    .sc-list {
      .sc-item {
        .ui-icon {
        }
      }
    }
  }
}
</style>
