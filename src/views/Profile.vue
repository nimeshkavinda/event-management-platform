<template>
  <div class="profile">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 my-5">
        <mdb-jumbotron
          class="mb-0 text-center hoverable p-4 mx-5"
          style="border-radius: 0.5em;"
        >
          <mdb-row>
            <mdb-col md="3" offsetMd="1" class="m-3">
              <mdb-avatar class="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  class="rounded-circle img-fluid"
                />
              </mdb-avatar>
            </mdb-col>
            <mdb-col md="8" class="text-md-left ml-3 mt-3">
              <a href="#!" class="green-text">
                <h3 class="h3 pb-1 light-green-text" v-if="isMorning()">
                  Good Morning
                </h3>
                <h3 class="h3 pb-1 light-green-text" v-else>
                  Good Afternoon
                </h3>
              </a>
              <h1 class="h1 mb-4 font-weight-bold">Nimesh Kavinda</h1>
              <mdb-icon fab icon="facebook-f" size="1x" class="mr-3" />
              <mdb-icon fab icon="instagram" size="1x" class="mr-3" />
              <mdb-icon fab icon="twitter" size="1x" class="mr-3" />
              <mdb-icon fab icon="linkedin" size="1x" class="mr-3" />
              <mdb-icon fab icon="github" size="1x" />

              <mdb-row>
                <mdb-col>
                  
                </mdb-col>
              </mdb-row>
              <p class="font-weight-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur.
              </p>
              <p class="font-weight-normal">
                by <a><strong>Carine Fox</strong></a
                >, 19/08/2016
              </p>
              <mdb-btn color="light-green" style="border-radius:1em;"
                >Edit Profile</mdb-btn
              >
            </mdb-col>
          </mdb-row>
        </mdb-jumbotron>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbJumbotron, mdbRow, mdbCol, mdbBtn, mdbIcon } from "mdbvue";
export default {
  name: "JumbotronPage",
  components: {
    mdbJumbotron,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
  },
  methods: {
    isMorning() {
      return new Date().getHours() < 12 ? true : false;
    },
  },
};
</script>
