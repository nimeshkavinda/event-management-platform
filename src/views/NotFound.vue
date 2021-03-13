<template>
  <div>
    <mdb-container fluid>
      <mdb-row class="mx-5 mt-5">
        <mdb-col lg="6" class="py-5 mt-5 ml-lg-5"
          ><p
            class="h1 light-green-text text-left font-weight-bold"
            style="font-size:10vw;"
          >
            Oops!
          </p>
          <p class="h2 text-left font-weight-bold">
            We can't seem to find the page you are looking for.
          </p>
          <p class="h5 text-left font-weight-bold blue-text">
            <a @click="$router.go(-1)">Go Back</a>
          </p></mdb-col
        ><mdb-col lg="5"
          ><div
            class="tenor-gif-embed ml-lg-5"
            data-postid="14949853"
            data-share-method="host"
            data-width="100%"
            data-aspect-ratio="1.0"
          >
            <a
              href="https://tenor.com/view/verdrietig-sad-cry-lonely-gif-14949853"
              >Verdrietig Sad GIF</a
            >
            from
            <a href="https://tenor.com/search/verdrietig-gifs"
              >Verdrietig GIFs</a
            >
          </div>
        </mdb-col></mdb-row
      ></mdb-container
    >
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "NotFoundPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
