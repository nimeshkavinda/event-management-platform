<template>
  <div>
    <BlogArticle></BlogArticle>
  </div>
</template>

<script>
import {} from "mdbvue";
import BlogArticle from "../components/BlogArticle.vue";
export default {
  name: "ArticlePage",
  components: { BlogArticle },
  data() {
    return {
      article: [],
    };
  },
  mounted() {
    fetch(
      "https://fossnsbm.org/ghost/api/v3/content/posts/" +
        this.$route.params.id +
        "/?key=aa4e816c161110084f7ada42ad&include=authors/"
    )
      .then((res) => res.json())
      .then((data) => (this.article = data.posts))
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  },
};
</script>
