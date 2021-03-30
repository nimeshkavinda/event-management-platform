import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import { auth } from "./firebase";
import moment from "moment";

Vue.prototype.$axios = axios;
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

// new Vue({
//   router,
//   vuetify,
//   render: (h) => h(App),
// }).$mount("#app");

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      moment,
      data() {
        return {
          firebaseUser: user,
        };
      },
      render: (h) => h(App),
    }).$mount("#app");
  }
});
