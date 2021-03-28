<template>
  <div>
    <hr class="mx-5" />
    <mdb-row class="my-4">
      <mdb-card style="box-shadow: none!important;">
        <mdb-container fluid>
          <router-link :to="'/events/' + event.id" class="black-text">
            <mdb-row class="mx-4 mt-4">
              <mdb-col lg="4">
                <img
                  :src="event.thumbnailUrl"
                  alt="thumbnail"
                  width="100%"
                  height="240px"
                  style="border-radius: 0.6em; object-fit: cover;"
                />
              </mdb-col>
              <mdb-col lg="8">
                <div class="card-body">
                  <h5 class="h5 blue-text font-weight-normal">
                    {{ moment(event.datetime).format("LLLL") }}
                  </h5>
                  <h3 class="h2 font-weight-bold">
                    {{ event.name }}
                  </h3>
                  <h5 class="h5 font-weight-normal">
                    {{ event.description }}
                  </h5>
                  <mdb-row class="mt-3 ml-1">
                    <img
                      :src="event.speakerPhotoUrl"
                      class="rounded-circle mr-3"
                      height="26"
                      width="26"
                      alt=""
                      loading="lazy"
                      style="object-fit: cover;"
                    />

                    <p class="card-text">
                      {{ event.speaker }}
                    </p>
                  </mdb-row>
                </div>
              </mdb-col>
            </mdb-row>
          </router-link>
        </mdb-container>
      </mdb-card>
    </mdb-row>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard } from "mdbvue";
export default {
  name: "EventListCard",
  props: ["event"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
  },
};
</script>
