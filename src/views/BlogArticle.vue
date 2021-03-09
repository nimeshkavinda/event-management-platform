<template>
  <mdb-container class="text-left">
    <mdb-row class="mx-5 mt-5">
      <mdb-col md="8">
        <mdb-row>
          <mdb-col col="1">
            <img
              :src="article.primary_author.profile_image"
              class="rounded-circle"
              height="32"
              width="32"
              alt=""
              loading="lazy"
            />
          </mdb-col>
          <mdb-col col="10">
            <p class="h3 light-green-text font-weight-bold">
              {{ article.primary_author.name }}
            </p>
          </mdb-col>
        </mdb-row>
        <p class="h1 font-weight-bold">
          {{ article.title }}
        </p>
      </mdb-col>
    </mdb-row>
    <hr class="mx-5" />
    <mdb-row class="mx-4 my-4 font-weight-bold">
      <mdb-view
        class="zoom overlay"
        :src="article.feature_image"
        alt="Thumb"
        style="border-radius: 1.5em;"
      >
      </mdb-view>
    </mdb-row>
    <mdb-row class="mx-5 my-5">
      <mdb-col md="12" class="font-weight-normal">
        {{ article.html }}
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import axios from "axios";
export default {
  name: "BlogArticle",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      article: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://fossnsbm.org/ghost/api/v3/content/posts/" +
          this.$route.params.id +
          "/?key=aa4e816c161110084f7ada42ad&include=authors"
      )
      .then((response) => (this.article = response.posts))
      .catch((error) => console.log(error));
  },
};
</script>
