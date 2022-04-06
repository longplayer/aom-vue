const ignoredfiles = process.env.NODE_ENV === 'production' ? ['pages/demo.vue', '**/Demo*.*'] : []

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Age of Robots | Miguel Fernandez',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Présentation de mes travaux artistiques. Artiste résidant à Bruxelles dans le quartier des Marolles près du Vieux Marché aux Puces. Je crée des peintures et des sculptures de robots inspirés par la science-fiction et fait de matériaux de récupération.' },
      { name: 'keywords', lang: 'fr', content: 'Miguel, Fernandez, Miguel Fernandez, art de miguel fernandez, age of robots, peinture, peintures, pictural, toile, tableau, sculpture, sculptures, robot, robots, kitbash, expo, exposition, expositions, art, artiste, artiste peintre, sculpteur, a normal graffizm, (A)normal Graffizm, recyclage, recuperation, objets, fernandes, fernandez, of, fernandez'},
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'KZauwPn6Y-hvpFsfa-FNaiRYaMFrS74agsULk5UbG_I' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./node_modules/sal.js/dist/sal.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scrollto.js', mode: 'client' },
    { src: '~/plugins/photoswipe.js', mode: 'client' },
    { src: '~/plugins/sal.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-ignore#the-ignore-property-1
  ignore: ignoredfiles,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
      },
    }
  },
  // Modules Specific Configuration
  // tailwindcss: {
  //   // jit: false,
  //   exposeConfig: true,
  // },
  // nuxt/google-fonts options
  googleFonts: {
    // base64: true,
    // inject: true,
    // overwriting: true,
    download: true,
    display: 'swap',
    text: 'ages of robots miguel fernandez',
    subsets: 'latin',
    families: {
      Poppins: {
        wght: [100, 200, 400, 600]
      }, // family=Poppins:wght@200;400;600
    }
  },
  // https://image.nuxtjs.org/api/options
  image: {
    domains: ['eep.io'],
    alias: {
      mailchimp: 'https://eep.io/mc-cdn-images/template_images/'
    }
  }
}
