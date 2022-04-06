// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build
export default {
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
      },
    }
  },
}
