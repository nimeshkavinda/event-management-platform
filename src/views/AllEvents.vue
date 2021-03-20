<template>
  <mdb-container fluid class="text-left">
    <mdb-row class="mx-5 mt-5">
      <mdb-col md="8">
        <p class="h3 light-green-text font-weight-bold">
          All Events
        </p>
        <p class="h1 font-weight-bold">
          Explore the event directory for upcoming and past events
        </p>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="12">
        <mdb-container fluid>
          <EventListCard
            v-for="event in events"
            :key="event.name"
            :event="event"
          ></EventListCard> </mdb-container
      ></mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import axios from "axios";
import EventListCard from "../components/EventListCard.vue";
export default {
  name: "AllEventsPage",
  components: { mdbContainer, mdbRow, mdbCol, EventListCard },
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.getEvents();
  },
  methods: {
    getEvents: function() {
      axios
        .get("/api/events")
        .then((response) => (this.events = response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
