<template>
  <div class="home">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 my-5">
        <mdb-col md="4" class="mb-5">
          <p class="h3 light-green-text font-weight-bold">
            We are
          </p>
          <p class="h1 font-weight-bold">
            FOSS Community
          </p>
          <p class="h2">
            A truly Open Source Community dedicated to Open Source Enthusiasts
          </p>
          <mdb-btn
            icon="arrow-right"
            type="submit"
            style="border-radius: 2em;"
            background-color="light-green"
          ></mdb-btn>
        </mdb-col>
        <mdb-col md="4" class="mb-5">
          <p class="h3 mb-4 light-green-text font-weight-bold">
            Feature Event
          </p>
          <mdb-card style="border-radius: 0.5em;">
            <mdb-card-body>
              <mdb-card-title class="h1 font-weight-bold"
                >Hash Code</mdb-card-title
              >
              <mdb-card-text class="h1 mb-5"
                >Hash Code is a team programming competition. Are you up for the
                challenge?</mdb-card-text
              >
              <mdb-card-text class="h1 blue-text"
                >FOC B1, NSBM Green University</mdb-card-text
              >
              <mdb-card-title class="h4 font-weight-bold"
                >Thursday, February 25, 2021 6:00 PM to 3:00 AM
                GMT+5:30</mdb-card-title
              >
              <mdb-btn color="primary">RSVP</mdb-btn>
            </mdb-card-body>
          </mdb-card>
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
