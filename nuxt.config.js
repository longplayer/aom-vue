// https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll/blob/main/nuxt.config.js
import axios from './configuration/axios.js'
import build from './configuration/build.js'
import buildModules from './configuration/buildModules.js'
import components from './configuration/components.js'
import css from './configuration/css.js'
import googleFonts from './configuration/googleFonts.js'
import head from './configuration/head.js'
import ignore from './configuration/ignore.js'
import image from './configuration/image.js'
import modules from './configuration/modules.js'
import plugins from './configuration/plugins.js'
import ssr from './configuration/ssr.js'
import target from './configuration/target.js'
// import tailwindcss from './configuration/tailwindcss.js'

export default {
  ...axios,
  ...build,
  ...buildModules,
  ...head,
  ...css,
  ...googleFonts,
  ...components,
  ...image,
  ...ignore,
  ...modules,
  ...plugins,
  ...ssr,
  ...target,
}
