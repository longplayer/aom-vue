import sal from "sal.js";
import "sal.js/dist/sal.css";

export default ({ app }, inject) => {
  inject('sal', sal()) // save to this.$sal (recommended by nuxt docs)
};
