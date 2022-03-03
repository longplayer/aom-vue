<template>
  <section id="app-registration" class="app-registration container">
    <!-- <div id="mc_embed_signup">
      <form action="https://art-of-miguel-fernandez.us12.list-manage.com/subscribe/post?u=7064e11cf4419026247cbc5b6&amp;id=98b4888011" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_7064e11cf4419026247cbc5b6_98b4888011" tabindex="-1" value="">
          </div>
          <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
          </div>
        </div>
      </form>
    </div> -->

    <form v-if="!successMessage" @submit.prevent="subscribe($event)">
      <input id="email" v-model="email" name="EMAIL" type="text" placeholder="Email" class="require email" />
      <input type="submit" />
    </form>
    <p v-if="errorMessage && !successMessage" transition="fade">{{ errorMessage }}</p>
    <p v-if="successMessage" transition="fade">{{ successMessage }}</p>
  </section>
</template>

<script>
// https://gist.github.com/chrsgrffth/fa69fa9874871c8b52afc01d1a881e6d
// import axios from 'axios'
export default {
  props: {
    action: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      email: '',
      response: {},
      errorMessage: null,
      successMessage: null
    }
  },

  methods: {
    subscribe (e) {
      // https://art-of-miguel-fernandez.us12.list-manage.com/subscribe/post-json?u=7064e11cf4419026247cbc5b6&id=98b4888011&c=?

      const action = this.action.replace('/post?', '/post-json?').concat('&c=?')
      const data = {
        EMAIL: this.email
      }
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }

      console.log(e, data, headers, action)

      // axios
      //   .post(action, data, {headers})
      //   .then(response => {
      //     console.log(response.data)
      //   })
      //   .catch (err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>
