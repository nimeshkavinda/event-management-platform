<template>
  <div id="app">
    <div id="nav">
      <mdb-navbar
        class="px-5 py-3"
        color="#fff"
        light
        style="box-shadow: none!important;"
      >
        <mdb-navbar-brand href="https://fossnsbm.org/" style="margin-right: 190px;">
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
            <mdb-nav-item href="#">Events</mdb-nav-item>
            <mdb-nav-item href="#">Blog</mdb-nav-item>
            <mdb-nav-item href="#">Forum</mdb-nav-item>
          </mdb-navbar-nav>
          <mdb-btn-group style="width: 19em">
            <mdb-btn color="transparent" style="box-shadow: none!important"
              >Login</mdb-btn
            >
            <mdb-btn color="primary" style="border-radius: 0.5em"
              >Sign Up</mdb-btn
            >
          </mdb-btn-group>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </div>

    <router-view />

    <mdb-footer color="blue" class="pt-4 mt-4">
      <mdb-container fluid class="text-left mx-5">
        <mdb-row>
          <mdb-col md="8">
            <div
              class="elfsight-app-b265f779-f292-4169-bac1-abf96439e699"
            ></div>
          </mdb-col>
          <mdb-col md="4">
            <mdb-row>
              <mdb-col lg="2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss_nsbm2.png?alt=media&token=7d062d51-911f-4938-9c5c-73c0dee8c5ff"
                  height="80"
                  alt=""
                />
              </mdb-col>
              <mdb-col lg="10" class="mt-4">
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
                  style="color: black; margin-right: 1em;"
                >
                  <i class="fab fa-facebook-f fa-lg"></i>
                </a>

                <a
                  href="https://twitter.com/fossnsbm"
                  role="button"
                  style="color: black; margin-right: 1em;"
                >
                  <i class="fab fa-twitter fa-lg"></i>
                </a>

                <a
                  href="https://www.instagram.com/fossnsbm"
                  role="button"
                  style="color: black; margin-right: 1em;"
                >
                  <i class="fab fa-instagram fa-lg"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/fossnsbm"
                  role="button"
                  style="color: black; margin-right: 1em;"
                >
                  <i class="fab fa-linkedin fa-lg"></i>
                </a>

                <a
                  href="https://github.com/fossnsbm"
                  role="button"
                  style="color: black; margin-right: 1em;"
                >
                  <i class="fab fa-github fa-lg"></i>
                </a>
              </mdb-col>
              <mdb-col md="12">
                <mdb-row class="mt-3">
                  <mdb-navbar-nav nav class="font-weight-bold">
                    <mdb-nav-item
                      ><router-link to="/">Home</router-link></mdb-nav-item
                    >
                    <mdb-nav-item
                      ><router-link to="/about"
                        >About</router-link
                      ></mdb-nav-item
                    >
                    <mdb-nav-item href="#">Events</mdb-nav-item>
                    <mdb-nav-item href="#">Blog</mdb-nav-item>
                    <mdb-nav-item href="#">Forum</mdb-nav-item>
                  </mdb-navbar-nav>
                </mdb-row>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="12" class="mt-3">
                <h7 class="font-weight-bold">
                  Wants to be up to date? <br />Get our newsletter delivered to
                  your email every month
                </h7>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-4">
              <mdb-col md="12">
                <div class="form-group">
                  <mdb-row>
                    <mdb-col sm="10">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email address"
                      />
                    </mdb-col>
                    <mdb-col sm="2">
                      <mdb-btn></mdb-btn>
                    </mdb-col>
                  </mdb-row>
                </div>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3" color="#EDEEF2">
        <mdb-container fluid>
          &copy; 2021
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
} from "mdbvue";
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
  color: #2c3e50;
  background-color: #fff;
}

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
