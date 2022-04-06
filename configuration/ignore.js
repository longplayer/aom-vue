const ignoredfiles = process.env.NODE_ENV === 'production' ? ['pages/demo.vue', '**/Demo*.*'] : []

export default {
  ignore: ignoredfiles,
}
