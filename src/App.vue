<template>
  <div id="app">
    <div id="nav">
      <mdb-navbar
        class="px-5 py-3"
        color="#ffffff white"
        light
        position="top"
        style="box-shadow: none!important;"
      >
        <mdb-navbar-brand
          href="https://fossnsbm.org/"
          style="margin-right: 10%;"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss_nsbm2.png?alt=media&token=7d062d51-911f-4938-9c5c-73c0dee8c5ff"
            height="60"
            alt=""
          />
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav center>
            <mdb-nav-item><router-link to="/">Home</router-link></mdb-nav-item>
            <mdb-nav-item
              ><router-link to="/about">About</router-link></mdb-nav-item
            >
            <mdb-nav-item
              ><router-link to="/events">Events</router-link></mdb-nav-item
            >
            <mdb-nav-item
              ><router-link to="/blog">Blog</router-link></mdb-nav-item
            >
            <mdb-nav-item href="https://forum.fossnsbm.org/"
              >Forum</mdb-nav-item
            >
          </mdb-navbar-nav>
          <mdb-btn-group v-if="!user" style="width: 20em"
            ><router-link to="/login">
              <mdb-btn
                color="transparent"
                class="font-weight-bold"
                style="box-shadow: none!important"
                >Login</mdb-btn
              ></router-link
            ><router-link to="/signup">
              <mdb-btn
                color="black"
                class="font-weight-bold white-text"
                style="border-radius: 0.5em;"
                id="navbtn"
                >Sign Up</mdb-btn
              ></router-link
            >
          </mdb-btn-group>
          <mdb-navbar-nav right v-else>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed
                ><mdb-avatar class="mx-auto white">
                  <img
                    v-if="this.user.photoURL"
                    :src="this.user.photoURL"
                    class="rounded-circle mr-lg-2"
                    width="26"
                  />
                  <img
                    v-else
                    src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
                    class="rounded-circle mr-lg-2"
                    width="26"
                  /> </mdb-avatar
                >{{ this.user.displayName }}</mdb-dropdown-toggle
              >
              <mdb-dropdown-menu>
                <mdb-dropdown-item>
                  <router-link to="/profile">Profile</router-link>
                </mdb-dropdown-item>
                <mdb-dropdown-item
                  ><a role="button" @click="this.logout"
                    >Log out</a
                  ></mdb-dropdown-item
                >
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </div>

    <router-view :user="user" @logout="logout" />

    <mdb-footer color="#000000 black" class="pt-5 mt-4">
      <mdb-container fluid class="text-left mx-4">
        <mdb-row>
          <mdb-col lg="8">
            <!-- <div
              class="elfsight-app-b265f779-f292-4169-bac1-abf96439e699"
            ></div> -->
            <iframe
              allowfullscreen
              id="wallsio-iframe"
              src="https://my.walls.io/d4cm3?nobackground=1&amp;show_header=0&amp;initial_posts=5&amp;columns=3"
              style="border:0;height:480px;width:100%"
              loading="lazy"
              title="My social wall"
            ></iframe>
          </mdb-col>
          <mdb-col lg="4" class="pl-lg-5">
            <mdb-row>
              <mdb-col lg="2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss_nsbm2-2.png?alt=media&token=9855d48f-94ff-4d24-8181-ba97ae981d10"
                  height="80"
                  alt=""
                />
              </mdb-col>
              <mdb-col lg="10" class="mt-4 pl-lg-4">
                <h4 class="font-weight-bold">FOSS Community</h4>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="12" class="mt-3">
                <h6>
                  Contribute to the society with developments and new concepts
                  transforming young lives to feel as a part of the world’s
                  largest developing community
                </h6>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-4">
              <mdb-col md="8">
                <a
                  href="https://www.facebook.com/foss.nsbm"
                  role="button"
                  style="margin-right: 1em;"
                >
                  <i class="fab fa-facebook-f fa-lg"></i>
                </a>

                <a
                  href="https://twitter.com/fossnsbm"
                  role="button"
                  style="margin-right: 1em;"
                >
                  <i class="fab fa-twitter fa-lg"></i>
                </a>

                <a
                  href="https://www.instagram.com/fossnsbm"
                  role="button"
                  style="margin-right: 1em;"
                >
                  <i class="fab fa-instagram fa-lg"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/fossnsbm"
                  role="button"
                  style="margin-right: 1em;"
                >
                  <i class="fab fa-linkedin fa-lg"></i>
                </a>

                <a
                  href="https://github.com/fossnsbm"
                  role="button"
                  style="margin-right: 1em;"
                >
                  <i class="fab fa-github fa-lg"></i>
                </a>
              </mdb-col>
              <mdb-col md="12">
                <mdb-row class="mt-3">
                  <div id="nav-footer">
                    <mdb-navbar-nav nav class="font-weight-bold">
                      <mdb-nav-item
                        ><router-link to="/">Home</router-link></mdb-nav-item
                      >
                      <mdb-nav-item
                        ><router-link to="/about"
                          >About</router-link
                        ></mdb-nav-item
                      >
                      <mdb-nav-item
                        ><router-link to="/events"
                          >Events</router-link
                        ></mdb-nav-item
                      >

                      <mdb-nav-item
                        ><router-link to="/blog"
                          >Blog</router-link
                        ></mdb-nav-item
                      >
                      <mdb-nav-item href="https://forum.fossnsbm.org/"
                        >Forum</mdb-nav-item
                      >
                    </mdb-navbar-nav>
                  </div>
                </mdb-row>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="8" class="mt-3">
                <h6 class="font-weight-bold">
                  Wants to be up to date? <br />Get our newsletter delivered to
                  your email every month
                </h6>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-3">
              <mdb-col md="12">
                <form class="form-inline">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    style="border-radius: 1.5em;"
                    class="btn light-green"
                  >
                    <i class="fas fa-arrow-right" style="color: black;"></i>
                  </button>
                </form>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-3">
              <mdb-col lg="2">
                <h6 class="font-weight-bold mr-1">Go to Top</h6>
              </mdb-col>
              <mdb-col lg="1">
                <go-top-button
                  :animate="true"
                  :speed="50"
                  :acceleration="2"
                  :scrollDistance="300"
                  :styles="{
                    color: 'white',
                  }"
                >
                  <i class="fa fa-arrow-up"></i>
                </go-top-button>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; {{ new Date().getFullYear() }}
          <a href="https://fossnsbm.org"> FOSS Community NSBM</a>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbBtn,
  mdbBtnGroup,
  mdbFooter,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbAvatar,
} from "mdbvue";
import GoTopButton from "vue-go-top-button";
import firebase from "firebase";
export default {
  name: "IndexPage",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbBtn,
    mdbBtnGroup,
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbAvatar,
    GoTopButton,
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
