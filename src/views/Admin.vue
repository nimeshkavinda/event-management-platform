<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand class="font-weight-normal"
        >Admin Panel</mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item to="/" waves-fixed>Go Back</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed
              ><mdb-avatar class="mx-auto white">
                <img
                  v-if="this.admin.photoURL"
                  :src="this.admin.photoURL"
                  class="rounded-circle mr-lg-2"
                  width="26"
                />
                <img
                  v-else
                  src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
                  class="rounded-circle mr-lg-2"
                  width="26"
                /> </mdb-avatar
              >{{ this.admin.displayName }}</mdb-dropdown-toggle
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
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"
        ><img
          alt=""
          class="img-fluid p-5"
          src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss_nsbm2.png?alt=media&token=7d062d51-911f-4938-9c5c-73c0dee8c5ff"
      /></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/admin" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            ><mdb-icon
              icon="columns"
              class="mr-3"
            />Dashboard</mdb-list-group-item
          >
        </router-link>
        <router-link to="/admin" @click.native="activeItem = 2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            ><mdb-icon icon="calendar-plus" class="mr-3" />Create an
            event</mdb-list-group-item
          >
        </router-link>
        <router-link to="/admin" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            ><mdb-icon icon="users" class="mr-3" />Users</mdb-list-group-item
          >
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <Dashboard v-if="activeItem === 1"></Dashboard>
        <CreateEvent :admin="admin" v-if="activeItem === 2"></CreateEvent>
        <Users></Users>
      </div>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  waves,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
} from "mdbvue";
// import firebase from "firebase";
import CreateEvent from "../components/CreateEvent.vue";
import Dashboard from "../components/Dashboard.vue";
import Users from "../components/Users.vue";
export default {
  name: "AdminTemplate",
  props: ["admin"],
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    CreateEvent,
    Dashboard,
    Users,
  },
  data() {
    return {
      activeItem: 1,
    };
  },
  methods: {
    // logout() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       this.user = null;
    //       this.$router.push("/");
    //     });
    // },
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves],
};
</script>

<style>
@import url("https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
