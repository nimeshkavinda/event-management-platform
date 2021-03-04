<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title><strong>Alison Belmont</strong></mdb-card-title>
      <mdb-card-text
        >Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam.</mdb-card-text
      >
      <h5 class="blue-text"><strong>Graffiti Artist</strong></h5>
      <h5 class="blue-text"><strong>Graffiti Artist</strong></h5>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
} from "mdbvue";
export default {
  name: "FeatureEventCard",
  props: ["featureEvent"],
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
  },
};
</script>
