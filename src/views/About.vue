<template>
  <mdb-container fluid>
    <mdb-row class="mx-5">
      <mdb-col md="8">
        <p class="h1">
          About
        </p>
        <p class="h1">
          FOSS Community is a platform for all Open Source Enthusiasts to
          organize themselves around the Global Free and Open Source Software
          movement.
        </p>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "AboutPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
