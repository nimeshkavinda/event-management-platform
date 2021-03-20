<template>
  <mdb-card style="border-radius: 0.5em; width:27em;" class="mx-3 mb-5">
    <mdb-card-body class="p-4">
      <mdb-card-title class="h1 font-weight-bold">{{
        event.name
      }}</mdb-card-title>
      <mdb-card-text class="h1 mb-5"> {{ event.description }}</mdb-card-text>
      <mdb-card-text class="h1 blue-text">{{ event.venue }}</mdb-card-text>
      <mdb-card-title class="h4 font-weight-bold">{{
        event.datetime
      }}</mdb-card-title>
      <mdb-btn :to="event.url" color="light-green" style="border-radius:1em;"
        >More</mdb-btn
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
  name: "EventCard",
  props: ["event"],
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbBtn,
  },
};
</script>
