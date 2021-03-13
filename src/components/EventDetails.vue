<template>
  <div class="event">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5">
        <mdb-col lg="6" class="mb-sm-3"
          ><p class="h3 light-green-text font-weight-bold">
            Thursday, February 25, 2021
          </p>
          <p class="h1 font-weight-bold">
            Hash Code
          </p></mdb-col
        >
        <mdb-col lg="6" class="mb-sm-5">
          <mdb-row>
            <mdb-col md="6"
              ><mdb-row
                ><mdb-col col="4"
                  ><mdb-avatar class="mx-auto white">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      class="rounded-circle"
                      height="85px"
                    /> </mdb-avatar
                ></mdb-col>
                <mdb-col col="8"
                  ><mdb-row
                    ><p class="h5 light-green-text font-weight-bold pt-lg-3">
                      Speaker
                    </p> </mdb-row
                  ><mdb-row>
                    <p class="h5 font-weight-bold">
                      Johnathan Doe
                    </p></mdb-row
                  ></mdb-col
                >
              </mdb-row>
            </mdb-col>
            <mdb-col md="6"
              ><mdb-row
                ><mdb-col col="4"
                  ><mdb-avatar class="mx-auto white">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(11).jpg"
                      class="rounded-circle"
                      height="85px"
                    /> </mdb-avatar
                ></mdb-col>
                <mdb-col col="8"
                  ><mdb-row
                    ><p class="h5 light-green-text font-weight-bold pt-lg-3">
                      Host
                    </p> </mdb-row
                  ><mdb-row>
                    <p class="h5 font-weight-bold">
                      Women in FOSS NSBM
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
            <mdb-col md="6" offsetMd="1" class="m-3">
              <mdb-view
                src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                alt="Sample image for first version of blog listing"
                style="border-radius: 0.5em;"
              >
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="5" class="text-left mx-3 my-3 align-self-center">
              <a href="#!" class="light-green-text">
                <h6 class="h3 pb-1 font-weight-bold">
                  Hash Code
                </h6>
              </a>
              <h4 class="h4 mb-4">This is title of the news</h4>

              <p class="font-weight-normal">
                by <a><strong>Johnathan Doe</strong></a
                >, 19/08/2016
              </p>
              <mdb-btn color="light-green" style="border-radius:1em;"
                >RSVP</mdb-btn
              >
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque, totam rem aperiam, eaque ipsa quae ab illo
              inventore veSritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur.
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
} from "mdbvue";
export default {
  name: "JumbotronPage",
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbAvatar,
    mdbView,
    mdbMask,
  },
};
</script>
