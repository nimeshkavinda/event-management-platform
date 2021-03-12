<template>
  <mdb-container fluid class="text-left">
    <mdb-row class="mx-5 my-5">
      <mdb-col lg="10" class="mt-4 pl-lg-4">
        <h1 class="font-weight-bold">Our Events & Meetups</h1>
      </mdb-col>

      <mdb-col md="7" class="mt-2 pl-lg-4">
        <h6>
          Our community events are for students and enthusiasts to learn
          discaver new technoalogies 
          Having doubts?Please contact <mdb-stretched-link href="#!" class="stretched-link">info@fossnsbm.org </mdb-stretched-link>
        </h6>  
      </mdb-col>
    </mdb-row>
    
    <mdb-row class="mx-5 my-5 font-weight-bold">
      <mdb-col class="md-5" sm="4">
        <p class="h5 blue-text font-weight-bold mt-2">
          Upcomming Events
        </p>
       <EventsCard></EventsCard>

      </mdb-col>
      

    </mdb-row>

    <mdb-row class="mx-5 my-5">
      <mdb-col md="5">
        <p class="h5 blue-text font-weight-bold mt-2">
          Frequently Asked <br>Questions
        </p>
        
      </mdb-col>
      
      <mdb-col md="7" class="mt-3">
        
        <hr>
        <h5 class="font-weight-bold">Who are the events for?<mdb-icon class="align-text-top" icon="angle-down" /></h5>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <hr>
       
       <h5 class="font-weight-bold">I'm from a different university. Can I still participate?<mdb-icon icon="plus" /></h5>
       
       <hr>
       <h5 class="font-weight-bold">How do I RSVP for events?     <mdb-icon icon="plus" /></h5>
       
      </mdb-col>

      
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon,mdbStretchedLink} from "mdbvue";
import EventsCard from "../components/EventsCard.vue";
export default {
  name: "Events",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbStretchedLink, 
    EventsCard
  },
};
</script>
