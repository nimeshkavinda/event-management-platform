<template>
  <mdb-row class="my-4">
    <mdb-card style="box-shadow: none!important;">
      <mdb-container fluid>
        <hr class="mx-5" />
        <router-link :to="'/event/' + event.id" class="black-text">
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
                  {{ event.datetime }}
                </h5>
                <h3 class="h2 font-weight-bold">
                  {{ event.name }}
                </h3>
                <h5 class="h5 font-weight-normal">
                  {{ event.description }}
                </h5>
                <mdb-row class="mt-3">
                  <mdb-col col="1">
                    <img
                      :src="event.organizerPhotoUrl"
                      class="rounded-circle"
                      height="26"
                      width="26"
                      alt=""
                      loading="lazy"
                      style="object-fit: cover;"
                    />
                  </mdb-col>
                  <mdb-col col="10">
                    <p class="card-text">
                      {{ event.organizer }}
                    </p>
                  </mdb-col>
                </mdb-row>
              </div>
            </mdb-col>
          </mdb-row>
        </router-link>
      </mdb-container>
    </mdb-card>
  </mdb-row>
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
