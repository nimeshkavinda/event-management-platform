<template>
  <mdb-footer color="#000000 black" class="pt-5 mt-4">
    <mdb-container fluid class="text-left mx-4">
      <mdb-row>
        <mdb-col lg="8">
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
                      ><router-link to="/blog">Blog</router-link></mdb-nav-item
                    >
                    <mdb-nav-item
                      ><router-link to="/forum"
                        >Forum</router-link
                      ></mdb-nav-item
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
</template>

<script>
import {
  mdbFooter,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
import GoTopButton from "vue-go-top-button";
export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbNavbarNav,
    mdbNavItem,
    GoTopButton,
  },
};
</script>
