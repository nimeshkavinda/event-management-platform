<template>
  <div class="event">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 d-flex justify-content-between">
        <mdb-col lg="6" class="mb-sm-3"
          ><p class="h3 light-green-text font-weight-bold">
            {{ moment(event.datetime).format("LLLL") }}
          </p>
          <p class="h1 font-weight-bold">
            {{ event.name }}
          </p></mdb-col
        >
        <mdb-col lg="6" class="mb-sm-5">
          <mdb-row>
            <mdb-col lg="6"
              ><mdb-row
                ><mdb-col lg="4"
                  ><mdb-avatar class="mx-auto white">
                    <img
                      :src="event.speakerPhotoUrl"
                      class="rounded-circle"
                      height="85px"
                      width="85px"
                    /> </mdb-avatar
                ></mdb-col>
                <mdb-col lg="8"
                  ><mdb-row
                    ><p class="h5 light-green-text font-weight-bold pt-lg-3">
                      Speaker
                    </p> </mdb-row
                  ><mdb-row>
                    <p class="h5 font-weight-bold">
                      {{ event.speaker }}
                    </p></mdb-row
                  ></mdb-col
                >
              </mdb-row>
            </mdb-col>
            <mdb-col lg="6"
              ><mdb-row
                ><mdb-col lg="4"
                  ><mdb-avatar class="mx-auto white">
                    <img
                      :src="event.organizerPhotoUrl"
                      class="rounded-circle"
                      height="85px"
                      width="85px"
                    /> </mdb-avatar
                ></mdb-col>
                <mdb-col lg="8"
                  ><mdb-row
                    ><p class="h5 light-green-text font-weight-bold pt-lg-3">
                      Host
                    </p> </mdb-row
                  ><mdb-row>
                    <p class="h5 font-weight-bold">
                      {{ event.organizer }}
                    </p></mdb-row
                  ></mdb-col
                >
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mx-5 mb-5">
        <mdb-jumbotron
          class="mb-0 text-center hoverable p-1 mx-5 w-100"
          style="border-radius: 0.5em;"
        >
          <mdb-row>
            <mdb-col lg="6" offsetMd="1" class="m-3">
              <mdb-view
                :src="event.thumbnailUrl"
                alt="Sample image for first version of blog listing"
                style="border-radius: 0.5em; object-fit: cover; width: 100%; height: 400px;"
                class="img-fluid"
              >
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col lg="5" class="text-left mx-3 my-3 align-self-center">
              <h6 class="h2 pb-4 font-weight-bold">
                {{ event.name }}
              </h6>
              <h4 class="h4 mb-2">
                Date: <strong>{{ moment(event.datetime).format("LLLL") }}</strong>
              </h4>
              <h4 class="h4 mb-4">
                Venue: <strong>{{ event.venue }}</strong>
              </h4>
              <p class="font-weight-normal">
                Hosted by
                <a
                  ><strong>{{ event.speaker }}</strong></a
                >, Organized by
                <a
                  ><strong>{{ event.organizer }}</strong></a
                >
              </p>

              <mdb-btn color="light-green mr-4" style="border-radius:1em;"
                >RSVP</mdb-btn
              >

              <mdb-icon fab icon="facebook-f" size="1x" class="mr-3" />
              <mdb-icon fab icon="instagram" size="1x" class="mr-3" />
              <mdb-icon fab icon="twitter" size="1x" class="mr-3" />
              <mdb-icon fab icon="linkedin" size="1x" class="mr-3" />
            </mdb-col>
          </mdb-row>
        </mdb-jumbotron>
      </mdb-row>
      <mdb-container fluid class="mx-lg-5">
        <mdb-row class="mx-5">
          <mdb-col lg="8">
            <p class="h3 font-weight-bold">
              Details
            </p>
            <p class="font-weight-normal">
              {{ event.description }}
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <hr class="mx-5" />
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbJumbotron,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbAvatar,
  mdbMask,
  mdbView,
  mdbIcon,
} from "mdbvue";
export default {
  name: "EventDetails",
  props: ["event"],
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbAvatar,
    mdbView,
    mdbMask,
    mdbIcon,
  },
};
</script>
