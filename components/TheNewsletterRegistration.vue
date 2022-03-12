<template>
  <div id="mc_embed_signup">
    <form
      v-if="!successMessage"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
      :action="action"
      @submit.prevent="subscribe($event)"
    >
      <div id="mc_embed_signup_scroll">
        <h2
          v-if="showFormTitle"
          class="app-title">{{ texts.title }}
        </h2>
        <div class="indicates-required">
          <span class="asterisk">*</span> {{ texts.required }}
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL"
            >{{ texts.email }} <span class="asterisk">*</span>
          </label>
          <input
            id="mce-EMAIL"
            v-model="email"
            type="email"
            name="EMAIL"
            class="required email"
          />
        </div>
        <div
          id="mergeRow-gdpr"
          class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
        >
          <div class="content__gdpr">
            <label>{{ texts.marketing.title }}</label>
            <p>
              {{ texts.marketing.intro }}
            </p>
            <fieldset
              class="mc_fieldset gdprRequired mc-field-group"
              name="interestgroup_field"
            >
              <label class="checkbox subfield" for="gdpr_9589"
                ><input
                  id="gdpr_9589"
                  type="checkbox"
                  name="gdpr[9589]"
                  value="Y"
                  class="av-checkbox gdpr"
                /><span>E-mail</span>
              </label>
            </fieldset>
            <p class="small">
              {{ texts.marketing.howUnsubscribe }}
            </p>
          </div>
          <div class="content__gdprLegal">
            <p class="small">
              {{ texts.marketing.legal }}
              <a href="https://mailchimp.com/legal/terms" target="_blank"
                >{{ texts.marketing.legalLabel }}</a
              >
            </p>
          </div>
        </div>
        <div hidden="true">
          <input type="hidden" name="tags" value="2489830" />
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input
            type="text"
            name="b_5a12458d9006c6a4b76f63d46_314a5d4c0a"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input
              id="mc-embedded-subscribe"
              type="submit"
              :value="texts.subscribe"
              name="subscribe"
              class="button btn btn-black"
            />
            <p class="brandingLogo">
              <a
                href="http://eepurl.com/hWYuov"
                title="Mailchimp - email marketing made easy and fun"
                ><img
                  src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
              /></a>
            </p>
          </div>
        </div>
      </div>
    </form>
    <p v-if="errorMessage && !successMessage" transition="fade" class="text-red-700 font-bold">
      {{ errorMessage }}
    </p>
    <p v-if="successMessage" transition="fade" class="text-green-500 font-bold">
      {{ successMessage }}
    </p>
  </div>

  <!--
    <form v-if="!successMessage" @submit.prevent="subscribe($event)">
      <input
        id="email"
        v-model="email"
        name="EMAIL"
        type="text"
        placeholder="Email"
        class="require email"
      />
      <input type="submit" />
    </form>
    <p v-if="errorMessage && !successMessage" transition="fade">
      {{ errorMessage }}
    </p>
    <p v-if="successMessage" transition="fade">{{ successMessage }}</p>
  -->
</template>

<script>
// https://gist.github.com/chrsgrffth/fa69fa9874871c8b52afc01d1a881e6d
export default {
  props: {
    action: {
      required: true,
      type: String,
    },
    texts: {
      type: Object,
      default: () => {
        return {
          title: 'Inscrivez-vous',
          required: 'Ce champ est requis',
          email: 'Adresse courriel',
          subscribe: 'Subscribe',
          marketing: {
            title: 'Autorisations marketing',
            intro: 'Veuillez sélectionner toutes les façons dont vous aimeriez entendre parler d’Ages of Robots:',
            howUnsubscribe: 'Vous pouvez vous désabonner à tout moment en cliquant sur le lien dans le bas de page de nos e-mails. Pour obtenir plus d\'informations sur nos pratiques de confidentialité, rendez-vous sur notre site Web.',
            legal: 'Nous utilisons Mailchimp comme plate-forme de marketing. En cliquant ci-dessous pour abonnez-vous, vous reconnaissez que vos informations seront transféré à Mailchimp pour traitement.',
            legalLabel: 'En savoir plus sur les pratiques de confidentialité de Mailchimp ici.',
          }
        }
      }
    },
    showFormTitle: {
      type: Boolean,
      default: true,
    }
  },

  emits: ['closeModal'],

  data() {
    return {
      email: '',
      response: {},
      errorMessage: null,
      successMessage: null,
    }
  },

  methods: {
    serialize (data) {
      // https://gomakethings.com/how-to-serialize-form-data-with-vanilla-js/
      const obj = {};
      for (const [key, value] of data) {
        if (obj[key] !== undefined) {
          if (!Array.isArray(obj[key])) {
            obj[key] = [obj[key]];
          }
          obj[key].push(value);
        } else {
          obj[key] = value;
        }
      }
      return obj;
    },
    subscribe(e) {

      const action = this.action.replace('/post?', '/post-json?').concat('&c=?')
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
      // console.log({e, data, headers, action, d, params}, )
      // const data = {
      //   EMAIL: this.email,
      // }
      const d = new FormData(e.target)
      const params = this.serialize(d);

      this.$axios.$post(action, params, {headers})
        .then(response => {
          console.log('>>Axios response', response)
          this.successMessage = response.msg
          this.$emit('closeModal')
        })
        .catch (err => {
          this.errorMessage = err
          this.$emit('closeModal')
          e.target.submit()
        })
    },
  },
}
</script>

<style lang="postcss" scoped>
/* mailchimp form custom style */
#mc_embed_signup {
  @apply text-center;

  #mce-responses {
    #mce-error-response {}
    #mce-success-response {}
  }

  form {
    #mc_embed_signup_scroll {
      width: 100%;
      max-width: 720px;
      margin: auto;

      h2 {
      }
      p, label {
        /* @apply text-base; */
      }
      label {
        font-weight: 700;
      }
      fieldset {
        @apply my-2;
      }

      .indicates-required,
      .asterisk {
        @apply hidden;
      }

      .small {
        @apply text-xs text-justify;
      }

      .mc-field-group {
        @apply flex flex-wrap w-full mb-2 text-left;

        label,
        input {
          flex: 0 0 100%;
          width: 100%;
        }

        input {
          line-height: 1.6rem;
          @apply border rounded my-1 p-1;
        }


        .mc-field-group {
          @apply block;
          label {
            @apply block w-auto;
            input {
              @apply w-auto mr-1;
            }
          }
        }

        &.content__gdprBlock {
          p {
            /* @apply text-xs; */
          }
          label {
            
          }
          .content__gdpr {
            /* p { display: none; } */
          }
          .content__gdprLegal {
            /* display: none; */
          }
        }
      }

      .optionalParent {
        .foot {
          input {
            @apply my-4;
          }
        }
        .brandingLogo {
          img {
            @apply inline-block;
          }
        }
      }
    }
  }
}
</style>
