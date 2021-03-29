<template>
  <div id="nav" style="margin-bottom: 120px;">
    <mdb-navbar
      class="px-5 py-3"
      color="#ffffff white"
      light
      position="top"
      style="box-shadow: none!important;"
    >
      <router-link to="/" style="margin-right: 8%;"
        ><mdb-navbar-brand>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss_nsbm2.png?alt=media&token=7d062d51-911f-4938-9c5c-73c0dee8c5ff"
            height="60"
            alt=""
          /> </mdb-navbar-brand
      ></router-link>
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
          <mdb-nav-item
            ><router-link to="/forum">Forum</router-link></mdb-nav-item
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
                  v-if="user.photoURL"
                  :src="user.photoURL"
                  class="rounded-circle mr-lg-2"
                  width="26"
                />
                <img
                  v-else
                  src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
                  class="rounded-circle mr-lg-2"
                  width="26"
                /> </mdb-avatar
              >{{ user.displayName }}</mdb-dropdown-toggle
            >
            <mdb-dropdown-menu>
              <mdb-dropdown-item>
                <router-link to="/profile">Profile</router-link>
              </mdb-dropdown-item>
              <mdb-dropdown-item @click="logoutUser"
                ><a role="button">Log out</a></mdb-dropdown-item
              >
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
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
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbAvatar,
} from "mdbvue";
export default {
  name: "NavBar",
  props: ["user"],
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbBtn,
    mdbBtnGroup,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbAvatar,
  },
  methods: {
    logoutUser() {
      this.$emit("logoutUser");
    },
  },
};
</script>
