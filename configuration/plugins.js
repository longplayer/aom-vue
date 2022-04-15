// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-plugins
// https://nuxtjs.org/docs/directory-structure/plugins/

export default {
  plugins: [
    { src: '~/plugins/vue-scrollto.js', mode: 'client' },
    { src: '~/plugins/photoswipe.js', mode: 'client' },
    { src: '~/plugins/sal.js', mode: 'client' },
    { src: '~/plugins/detect-touch-device.js', mode: 'client' },
    { src: '~/plugins/dom-utils.js', mode: 'client' },
  ],
  // plugins: [
  //   { src: '~/plugins/both.js' },
  //   { src: '~/plugins/client.js', mode: 'client' },
  //   { src: '~/plugins/server.js', mode: 'server' },
  // ],
}
