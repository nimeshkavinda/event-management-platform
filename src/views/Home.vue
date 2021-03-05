<template>
  <div class="home">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 my-5">
        <mdb-col md="4" class="my-lg-5 py-lg-5 my-5">
          <p class="h3 light-green-text font-weight-bold">
            We are
          </p>
          <p class="h1 font-weight-bold">
            FOSS Community
          </p>
          <p class="h2">
            A truly Open Source Community dedicated to Open Source Enthusiasts
          </p>
          <button
            type="submit"
            style="border-radius: 1.5em;"
            class="btn light-green"
          >
            <i class="fas fa-arrow-right" style="color: black;"></i>
          </button>
        </mdb-col>
        <mdb-col md="4" class="mb-5">
          <p class="h5 mb-4 ml-4 light-green-text font-weight-bold">
            Feature Event
          </p>
          <mdb-card style="border-radius: 0.5em;">
            <mdb-card-body>
              <mdb-card-title class="h1 font-weight-bold"
                >Hash Code</mdb-card-title
              >
              <mdb-card-text class="h1 mb-5"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.</mdb-card-text
              >
              <mdb-card-text class="h1 blue-text"
                >FOC B1, NSBM Green University</mdb-card-text
              >
              <mdb-card-title class="h4 font-weight-bold"
                >Thursday, February 25, 2021 6:00 PM to 3:00 AM
                GMT+5:30</mdb-card-title
              >
              <mdb-btn color="light-green" style="border-radius:1em;"
                >RSVP</mdb-btn
              >
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col md="4" class="mb-5">
          <p class="h5 mb-4 ml-4 light-green-text font-weight-bold">
            Recent Articles
          </p>
          <mdb-row> </mdb-row>
          <mdb-row> </mdb-row>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <AboutPage></AboutPage>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
} from "mdbvue";
import AboutPage from "@/views/About.vue";

export default {
  name: "Home",
  components: {
    AboutPage,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
  },
};
</script>
