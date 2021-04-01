<template>
  <div class="events">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5"
        ><mdb-col md="8"
          ><p class="h3 light-green-text font-weight-bold">
            Our Events & Meetups
          </p>
          <p class="h1 font-weight-bold">
            Our community events are for students and enthusiasts to learn and
            discover new technologies
          </p>
          <p class="h5">
            Having doubts? Please contact
            <a href="mailto:info@fossnsbm.org">info@fossnsbm.org</a>
          </p></mdb-col
        ></mdb-row
      >
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="11"
          ><p class="h3 blue-text font-weight-bold">
            Upcoming Events
          </p></mdb-col
        ><mdb-col md="1"
          ><router-link to="/allevents"
            ><p class="h5 blue-text font-weight-bold">
              <!-- See All -->
            </p></router-link
          ></mdb-col
        ></mdb-row
      ><mdb-container fluid
        ><mdb-row class="mt-4 mx-2 d-flex justify-content-start"
          ><EventCard
            v-for="event in events.slice(0,1)"
            :key="event.id"
            :event="event"
          ></EventCard></mdb-row
      ></mdb-container>
      <mdb-row class="mx-5 mt-5 d-flex justify-content-between">
        <mdb-col md="10"
          ><p class="h3 blue-text font-weight-bold">
            Past Events
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
            v-for="event in events.slice(2,5)"
            :key="event.id"
            :event="event"
          ></EventCard></mdb-row
      ></mdb-container>
      <mdb-row class="mx-5 my-5">
        <mdb-col md="4"
          ><p class="h3 blue-text font-weight-bold">
            Frequently Asked Questions
          </p></mdb-col
        >
        <mdb-col md="8"><FaqAccordion></FaqAccordion></mdb-col
      ></mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import axios from "axios";
// import moment from "moment";
import EventCard from "../components/EventCard.vue";
import FaqAccordion from "../components/Faq.vue";
export default {
  name: "EventsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    FaqAccordion,
    EventCard,
  },
  data() {
    return {
      events: [],
      // upcomingEvents: [],
      // pastEvents: [],
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
      // this.getUpcomingEvents();
    },
    // getUpcomingEvents: function() {
    //   this.events.forEach(function(event) {
    //     if (moment.isAfter(event.datetime)) {
    //       this.upcomingEvents.push(event);
    //     }
    //   });
    //   console.log(this.upcomingEvents);
    // },
  },
};
</script>
