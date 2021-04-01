<template>
  <div>
    <mdb-container fluid class="text-left">
      <EventDetails :key="event.id" :event="event"></EventDetails>
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="11"
          ><p class="h3 blue-text font-weight-bold">
            Similar Events
          </p></mdb-col
        ><mdb-col md="1"
          ><router-link to="/allevents"
            ><p class="h5 blue-text font-weight-bold">
              See All
            </p></router-link
          ></mdb-col
        ></mdb-row
      ><mdb-container fluid
        ><mdb-row class="mt-4 mx-2 d-flex justify-content-start"
          ><EventCard
            v-for="event in events.slice(0, 3)"
            :key="event.id"
            :event="event"
          ></EventCard></mdb-row
      ></mdb-container>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import axios from "axios";
import EventDetails from "../components/EventDetails.vue";
import EventCard from "../components/EventCard.vue";
export default {
  name: "EventPage",
  components: { mdbContainer, mdbRow, mdbCol, EventDetails, EventCard },
  data() {
    return {
      event: [],
      events: [],
    };
  },
  mounted() {
    this.getEventData();
    this.getEvents();
  },
  // async created() {
  //   const result = await axios.get("/api/events/${this.$route.params.id}");
  //   const event = result.data;
  //   this.event = event;
  // },
  methods: {
    getEventData: function() {
      axios
        .get(`/api/events/${this.$route.params.id}`)
        .then((response) => (this.event = response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
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
