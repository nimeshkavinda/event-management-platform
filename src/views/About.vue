<template>
  <mdb-container fluid class="text-left">
    <mdb-row class="mx-5 mt-5">
      <mdb-col md="8">
        <p class="h3 light-green-text font-weight-bold">
          About
        </p>
        <p class="h1 font-weight-bold">
          FOSS Community is a platform for all Open Source Enthusiasts to
          organize themselves around the Global Free and Open Source Software
          movement.
        </p>
      </mdb-col>
    </mdb-row>
    <mdb-row class="mx-4 my-4 font-weight-bold">
      <mdb-view
        class="zoom overlay"
        src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/foss-group.jpg?alt=media&token=fca806cc-3666-45a2-9b3b-e37ad88513b4"
        alt="FOSS"
        style="border-radius: 1.5em;"
      >
        <mdb-mask
          flex-center
          pattern="3"
          text="Meet FOSS Community NSBM"
          style="font-size:5vw;"
        />
      </mdb-view>
    </mdb-row>
    <mdb-row class="mx-5 mt-5">
      <mdb-col md="6">
        <p class="h5 light-green-text font-weight-bold">
          Vision
        </p>
        <p class="h3 font-weight-bold">
          Assist and encourage the community in global scale on behalf of Free
          and Open Source Software throughout the journey of achieving fullest
          extent technology
        </p>
      </mdb-col>
    </mdb-row>
    <hr class="mx-5" />
    <mdb-row class="mx-5 my-5">
      <mdb-col md="5">
        <p class="h5 light-green-text font-weight-bold">
          Sub Communities
        </p>
        <p class="h3 font-weight-bold">
          FOSS Community of NSBM is home to international and local communities
        </p>
      </mdb-col>
      <mdb-col md="7" class="mt-3">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/foss-rsvp.appspot.com/o/newlogostripfoss-01.png?alt=media&token=12117df4-7eeb-4bac-92d4-2518ee112370"
          width="100%"
          alt="FOSS Sub-Communities"
        />
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask } from "mdbvue";
export default {
  name: "AboutPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask
  },
};
</script>
