<template>
  <div>
    <router-link :to="'/events/' + eventscard.id" class="black-text">
      <mdb-card style="border-radius: 0.6em;">
        <mdb-card-body>
          <mdb-card-title class="h5 font-weight-bold">
            {{ eventscard.title }}
          </mdb-card-title>
          <mdb-card-text class="h1 mb-3"> {{ eventscard.desc }}</mdb-card-text>
          <mdb-card-text class="h1 blue-text">{{
            eventscard.venue
          }}</mdb-card-text>
          <mdb-card-title class="h4 font-weight-bold"
            >{{ event.date }} {{ event.time }}</mdb-card-title>
            <mdb-btn :to="event.url" color="light-green" style="border-radius:1em;">RSVP</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </router-link>
  </div>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardTitle } from "mdbvue";
export default {
  name: "EventsCard",
  props: ["eventscard"],
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
  },
};
</script>
