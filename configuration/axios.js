// https://axios.nuxtjs.org/options/
export default {
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000:
    // https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
}
