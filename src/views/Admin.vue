<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand href="https://mdbootstrap.com/docs/vue/" target="_blank"
        >MDB</mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item to="/" waves-fixed active class="active"
            >Home</mdb-nav-item
          >
          <mdb-nav-item
            href="https://mdbootstrap.com/docs/vue/getting-started/quick-start/"
            waves-fixed
            >About MDB</mdb-nav-item
          >
          <mdb-nav-item
            href="https://mdbootstrap.com/docs/vue/getting-started/download/"
            waves-fixed
            >Free download</mdb-nav-item
          >
          <mdb-nav-item
            href="https://mdbootstrap.com/education/bootstrap/"
            waves-fixed
            >Free tutorials</mdb-nav-item
          >
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#!" waves-fixed
            ><mdb-icon fab class="text-black" icon="facebook-square"
          /></mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed
            ><mdb-icon fab icon="twitter"
          /></mdb-nav-item>
          <mdb-nav-item
            href="https://github.com/mdbootstrap/bootstrap-material-design"
            waves-fixed
            class="border border-light rounded mr-1"
            target="_blank"
            ><mdb-icon fab icon="github" class="mr-2" />MDB GitHub
          </mdb-nav-item>
          <mdb-nav-item
            href="https://mdbootstrap.com/products/vue-ui-kit/"
            waves-fixed
            class="border border-light rounded"
            target="_blank"
            ><mdb-icon icon="gem" far class="mr-2" />Go Pro
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"
        ><img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss_nsbm2.png?alt=media&token=7d062d51-911f-4938-9c5c-73c0dee8c5ff"
      /></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            ><mdb-icon
              icon="chart-pie"
              class="mr-3"
            />Dashboard</mdb-list-group-item
          >
        </router-link>
        <router-link to="/admin/create" @click.native="activeItem = 2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            ><mdb-icon icon="user" class="mr-3" />Create an
            event</mdb-list-group-item
          >
        </router-link>
        <router-link to="/maps" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 4 && 'active'"
            ><mdb-icon icon="map" class="mr-3" />Users</mdb-list-group-item
          >
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <CreateEvent></CreateEvent>
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
} from "mdbvue";
import CreateEvent from "../components/CreateEvent.vue";
export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    CreateEvent,
  },
  data() {
    return {
      activeItem: 1,
    };
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
