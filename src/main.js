import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/firebase-app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB0neG3VV1ihoP_yvpqNXLYbIYL_AbJ-Fk",
  authDomain: "foss-rsvp.firebaseapp.com",
  projectId: "foss-rsvp",
  storageBucket: "foss-rsvp.appspot.com",
  messagingSenderId: "278353010401",
  appId: "1:278353010401:web:ec23f18fe9756c3576a1a0",
  measurementId: "G-JJERQ8Q5V2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
