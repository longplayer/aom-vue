<template>
  <div id="app-menu" class="app-menu">
    <nuxt-link tag='a' class="logo" to='/'>
      <h1>
        <span class="logo-sup">Age of Robots</span>
        <span class="logo-sub">The art of Miguel Fernandez</span>
      </h1>
    </nuxt-link>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <base-button
            v-scroll-to="'#section-gridview'"
            :btn="{
              name: 'go to travaux',
              label: 'Mes travaux',
              tag: 'a',
              href: '#section-gridview'
            }"
          />
        </li>
      </ul>
    </nav>
    <ul class="social__list">
      <li class="social__item">
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
      <li v-if="false" class="social__item">
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
    mailTo() { return `mailto:a_normal_graffizm@hotmail.com` },
    instagramAccountUrl() { return `https://www.instagram.com/age_of_robots/` },
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

  .nav {
    overflow: hidden;
    flex: 0 0 0;
    width: 0;
    margin: 0;

    .nav__list {
      margin: auto 0;
      @apply flex flex-wrap justify-center;
      transform: translate(-100%, 0%) scale(0, 1);
      transition: transform 300ms ease;

      .nav__item {
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

  .social__list {
    margin: 0 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    @apply flex flex-wrap justify-between;

    .social__item {
      margin: auto;
      text-align: center;
      width: auto;
      height: auto;

      .ui-icon {
        width: 2rem;
        height: 2rem;
        line-height: 0;
        @apply flex justify-center items-center;

        &::before {
          font-size: 0.8em;
        }
      }
    }
  }

  @screen x2sm {
    .nav__list {
      flex: 0 0 auto;
    }

    .social__list {
      margin: 0 0 0 auto;
      
      .social__item {
        
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
    .nav {
      width: auto;
      flex: 0 0 auto;
      margin: auto 1rem auto auto;
      .nav__list {
        transform: translate(0%, 0%) scale(1, 1);
      }
    }
    .social__list {
      margin: 0;
    }
  }

  @screen md {
    .logo {}
    .nav {
      .nav__list {
        .nav__item {
        }
      }
    }
    .social__list {
      .social__item {
        .ui-icon {
        }
      }
    }
  }
}
</style>
