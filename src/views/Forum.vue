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
import axios from "axios";
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
    // fetch("https://forum.fossnsbm.org/categories.json", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => (this.categories = data.category_list.categories))
    //   .catch((err) => console.log(err.message));

    axios({
      method: "GET",
      url: "https://forum.fossnsbm.org/categories.json",
      timeout: 1800000, // Let's say you want to wait at least 180 seconds
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.fetchCategories();
    console.log(this.categories);
  },
  methods: {
    async fetchCategories() {
      const res = await fetch("https://forum.fossnsbm.org/categories.json");
      const data = await res.json();
      this.categories = data;
    },
  },
};
</script>
