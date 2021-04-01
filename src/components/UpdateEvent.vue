<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Update an Event
          </p>
          <p class="h1 font-weight-bold">
            Update and modify events
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <UpdateEventForm
          v-on:updateEvent="updateEvent($event)"
        ></UpdateEventForm>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import UpdateEventForm from "../components/UpdateEventForm.vue";
// import axios from "axios";
// import uniqid from "uniqid";
// import { Datetime } from "vue-datetime";
// import "vue-datetime/dist/vue-datetime.css";
export default {
  name: "UpdateEvent",
  porps: ["selectedEvent"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    UpdateEventForm,
  },
};
</script>
