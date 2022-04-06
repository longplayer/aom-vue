// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-plugins
export default {
  plugins: [
    { src: '~/plugins/vue-scrollto.js', mode: 'client' },
    { src: '~/plugins/photoswipe.js', mode: 'client' },
    { src: '~/plugins/sal.js', mode: 'client' },
  ],
  // plugins: [
  //   { src: '~/plugins/both.js' },
  //   { src: '~/plugins/client.js', mode: 'client' },
  //   { src: '~/plugins/server.js', mode: 'server' },
  // ],
}
