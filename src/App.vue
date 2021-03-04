<template>
  <div id="app">
    <div id="nav">
      <mdb-navbar
        class="px-5 py-3"
        color="#fff"
        light
        style="box-shadow: none!important;"
      >
        <mdb-navbar-brand href="https://fossnsbm.org/">
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

    <mdb-footer color="blue" class="font-small pt-4 mt-4">
      <mdb-container class="text-left">
        <mdb-row>
          <mdb-col sm="6">
            <h5 class="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </mdb-col>
          <mdb-col sm="6">
            <h5 class="title">Links</h5>
            <ul>
              <li class="list-unstyled"><a href="#!">Link 1</a></li>
              <li class="list-unstyled"><a href="#!">Link 2</a></li>
              <li class="list-unstyled"><a href="#!">Link 3</a></li>
              <li class="list-unstyled"><a href="#!">Link 4</a></li>
            </ul>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2020 Copyright:
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
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
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
