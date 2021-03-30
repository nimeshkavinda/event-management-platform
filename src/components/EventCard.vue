<template>
  <mdb-col md="4">
    <mdb-card style="border-radius: 0.5em;" class="mb-5">
      <router-link :to="'/events/' + event.id" class="black-text">
        <mdb-card-body class="p-4">
          <mdb-card-title class="h1 font-weight-bold">{{
            event.name
          }}</mdb-card-title>
          <mdb-card-text class="h1 mb-5">{{ event.description }}</mdb-card-text>
          <mdb-card-text class="h1 blue-text">{{ event.venue }}</mdb-card-text>
          <mdb-card-title class="h4 font-weight-bold">{{
            moment(event.datetime).format("LLLL")
          }}</mdb-card-title>
          <mdb-btn color="light-green" style="border-radius:1em;">More</mdb-btn>
        </mdb-card-body>
      </router-link>
    </mdb-card></mdb-col
  >
</template>

<script>
import {
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  mdbBtn,
  mdbCol,
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
    mdbCol,
  },
};
</script>
