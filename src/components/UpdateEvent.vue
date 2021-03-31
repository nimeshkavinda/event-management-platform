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
        <mdb-col md="11" class="mx-5">
          <mdb-breadcrumb style="background-color: #fafafa" class="mt-3">
            <mdb-breadcrumb-item><a href="#">Admin</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active>Update event</mdb-breadcrumb-item>
          </mdb-breadcrumb>
          <mdb-card class="w-100 my-4">
            <mdb-card-body class="p-5"> </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbBreadcrumb,
  mdbBreadcrumbItem,
  //   mdbBtn,
  //   mdbAlert,
} from "mdbvue";
// import axios from "axios";
// import uniqid from "uniqid";
// import { Datetime } from "vue-datetime";
// import "vue-datetime/dist/vue-datetime.css";
export default {
  name: "UpdateEvent",
  porps: ["admin"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    // mdbBtn,
    // datetime: Datetime,
    // mdbAlert,
  },
};
</script>
