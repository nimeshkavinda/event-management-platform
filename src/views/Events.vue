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
        <mdb-col md="12"
          ><p class="h3 light-green-text font-weight-bold">
            Upcoming Events
          </p></mdb-col
        ></mdb-row
      >
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="10"
          ><p class="h3 light-green-text font-weight-bold">
            Past Events
          </p></mdb-col
        ></mdb-row
      >
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="4"
          ><p class="h3 light-green-text font-weight-bold">
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
// import EventCard from "../components/EventCard.vue";
import FaqAccordion from "../components/Faq.vue";
export default {
  name: "EventsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    FaqAccordion,
    // EventCard,
  },
};
</script>
