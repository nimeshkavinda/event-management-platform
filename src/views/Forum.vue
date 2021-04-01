<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Forum
          </p>
          <p class="h1 font-weight-bold">
            FOSS Community NSBM Forum is the platform where you can engage with
            the ever-growing open source community
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="12">
          <mdb-container fluid> {{ this.categories }} </mdb-container></mdb-col
        >
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
// import axios from "axios";
export default {
  name: "ForumPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    fetch("https://forum.fossnsbm.org/categories", {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Host: "https://forum.fossnsbm.org",
        // Origin: "http://localhost:8080/forum",
        // "Access-Control-Allow-Origin": "*",
        // mode: "no-cors",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.categories = data.category_list.categories))
      // .then(()=>(console.log(this.categories)))
      .catch((err) => console.log(err.message));
    // axios.get("https://forum.fossnsbm.org/categories.json").then((response) => {
    //   (this.categories = response.data).catch((err) => console.log(err));
    // });
    // console.log(this.categories);
  },
};
</script>
