<template>
  <mdb-card style="border-radius: 0.5em;">
    <mdb-card-body class="p-4">
      <mdb-card-title class="h1 font-weight-bold">{{
        featuredEvent.name
      }}</mdb-card-title>
      <mdb-card-text class="h1 mb-5">
        {{ featuredEvent.description }}</mdb-card-text
      >
      <mdb-card-text class="h1 blue-text">{{
        featuredEvent.venue
      }}</mdb-card-text>
      <mdb-card-title class="h4 font-weight-bold">{{
        featuredEvent.datetime
      }}</mdb-card-title>
      <mdb-btn
        :to="featuredEvent.thumbnailUrl"
        color="light-green"
        style="border-radius:1em;"
        >Attend</mdb-btn
      >
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  mdbBtn,
} from "mdbvue";
export default {
  name: "FeaturedEventCard",
  props: ["featuredEvent"],
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbBtn,
  },
};
</script>
