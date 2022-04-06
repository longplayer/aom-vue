import sal from "sal.js";
import "sal.js/dist/sal.css";

export default ({ app }) => {
  app.sal = sal(); // save to this.$nuxt.context.app value returned by sal()
};
