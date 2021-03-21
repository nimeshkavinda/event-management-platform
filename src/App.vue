<template>
  <div id="app">
    <NavBar :user="user" v-on:logoutUser="logout"></NavBar>
    <router-view :user="user" @logout="logout" />
    <Footer></Footer>
  </div>
</template>

<script>
import {} from "mdbvue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import firebase from "firebase";
export default {
  name: "IndexPage",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/");
        });
    },
  },
};
</script>

<style>
@import url("https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css");

#app {
  font-family: Gilroy, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #707070;
}

#nav a.router-link-exact-active {
  color: black;
}

#nav a:hover {
  color: black;
}

#nav-footer a {
  font-weight: bold;
  color: #fff;
}

#nav-footer a.router-link-exact-active {
  color: #e7e7e7;
}

#nav-footer a:hover {
  color: #e7e7e7;
}

#navbtn a {
  color: #fff;
}

#navbtn a:hover {
  color: #fff;
}

#navbtn a.router-link-exact-active {
  color: #fff;
}
</style>
