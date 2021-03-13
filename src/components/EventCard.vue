<template>
  <mdb-card style="border-radius: 0.5em;">
    <mdb-card-body class="p-4">
      <mdb-card-title class="h1 font-weight-bold">{{
        event.title
      }}</mdb-card-title>
      <mdb-card-text class="h1 mb-5"> {{ event.desc }}</mdb-card-text>
      <mdb-card-text class="h1 blue-text">{{ event.venue }}</mdb-card-text>
      <mdb-card-title class="h4 font-weight-bold"
        >{{ event.date }} {{ event.time }}</mdb-card-title
      >
      <mdb-btn :to="event.url" color="light-green" style="border-radius:1em;">More</mdb-btn>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardTitle, mdbCardText, mdbCardBody } from "mdbvue";
export default {
  name: "EventCard",
  props: ["event"],
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
  },
};
</script>
