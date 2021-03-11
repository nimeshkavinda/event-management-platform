<template>
  <mdb-container fluid class="text-left">
    <mdb-row>
      <mdb-col lg="10" class="mt-4 pl-lg-4">
        <h1 class="font-weight-bold">Our Events & Meetups</h1>
      </mdb-col>

      <mdb-col lg="10" class="mt-2 pl-lg-4">
        <h6>
          Our community events are for students and enthusiasts to learn discaver new technoalogies
          <br>Having doubts?Please contact info@fossnsbm.org 
        </h6>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "Events",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
