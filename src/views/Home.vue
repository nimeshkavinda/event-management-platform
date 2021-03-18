<template>
  <div class="home">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 my-5">
        <mdb-col lg="4" class="my-lg-5 py-lg-5 my-5">
          <p class="h3 light-green-text font-weight-bold">
            We are
          </p>
          <p class="h1 font-weight-bold">
            FOSS Community
          </p>
          <p class="h2">
            A truly Open Source Community dedicated to Open Source Enthusiasts
          </p>
          <router-link to="/about">
            <button
              type="button"
              style="border-radius: 1.5em;"
              class="btn light-green"
            >
              <i class="fas fa-arrow-right" style="color: black;"></i></button
          ></router-link>
        </mdb-col>
        <mdb-col lg="4" class="mb-5">
          <p class="h5 mb-4 ml-4 light-green-text font-weight-bold">
            Featured Event
          </p>
          <FeaturedEventCard
            v-for="event in events"
            :key="event.id"
            :featuredEvent="event"
          ></FeaturedEventCard>
        </mdb-col>
        <mdb-col lg="4" class="mb-5">
          <p class="h5 mb-4 ml-4 light-green-text font-weight-bold">
            Recent Articles
          </p>
          <mdb-col col="12" class="ml-lg-2">
            <ArticleCard
              v-for="post in posts"
              :key="post.id"
              :post="post"
            ></ArticleCard> </mdb-col
          ><router-link to="/blog" class="ml-lg-2 font-weight-bold"
            >Explore More</router-link
          >
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <AboutPage></AboutPage>
  </div>
</template>

<script>
// @ is an alias to /src
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import AboutPage from "@/views/About.vue";
import axios from "axios";
import FeaturedEventCard from "../components/FeaturedEventCard.vue";
import ArticleCard from "../components/ArticleCard.vue";
export default {
  name: "Home",
  components: {
    AboutPage,
    mdbContainer,
    mdbRow,
    mdbCol,
    ArticleCard,
    FeaturedEventCard,
  },
  data() {
    return {
      posts: [],
      events: [],
    };
  },
  created() {
    this.getFeaturedEvent();
    this.getArticles();
  },
  // async created() {
  //   const result = await axios.get("/api/upcomingevents");
  //   const event = result.data;
  //   this.events = event;
  // },
  methods: {
    getFeaturedEvent: function() {
      axios
        .get("https://localhost:8000/api/events")
        .then((response) => (this.events = response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
    getArticles: function() {
      fetch(
        "https://fossnsbm.org/ghost/api/v3/content/posts/?key=aa4e816c161110084f7ada42ad&include=authors&limit=2&order=published_at%20desc"
      )
        .then((res) => res.json())
        .then((data) => (this.posts = data.posts))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
