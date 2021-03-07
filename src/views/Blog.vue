<template>
  <mdb-container fluid class="text-left">
    <mdb-row class="mx-5 mt-5">
      <mdb-col md="8">
        <p class="h3 light-green-text font-weight-bold">
          FOSS Community Blog
        </p>
      </mdb-col>
    </mdb-row>
    <mdb-row class="mx-4 my-4 font-weight-bold">
      <mdb-col lg="7" class="mb-5 ml-lg-4">
        <FeaturedBlogCard
          v-for="article in articles.slice(0, 1)"
          :key="article.id"
          :featuredPost="article"
        ></FeaturedBlogCard>
      </mdb-col>
      <mdb-col lg="4" class="mx-sm-5"
        ><ArticleCard
          v-for="article in articles.slice(1, 3)"
          :key="article.id"
          :post="article"
        ></ArticleCard
      ></mdb-col>
    </mdb-row>
    <hr class="mx-5" />
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import FeaturedBlogCard from "../components/FeaturedBlogCard";
import ArticleCard from "../components/ArticleCard.vue";
export default {
  name: "BlogPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    FeaturedBlogCard,
    ArticleCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    fetch(
      "https://fossnsbm.org/ghost/api/v3/content/posts/?key=aa4e816c161110084f7ada42ad&include=authors&order=published_at%20desc"
    )
      .then((res) => res.json())
      .then((data) => (this.articles = data.posts))
      .catch((err) => console.log(err.message));
  },
};
</script>
