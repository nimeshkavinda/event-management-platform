<template>
  <div>
    <BlogArticle :key="article.id" :blogArticle="article"></BlogArticle>
  </div>
</template>

<script>
import {} from "mdbvue";
import BlogArticle from "../components/BlogArticle.vue";
import GhostContentAPI from '@tryghost/content-api'
export default {
  name: "ArticlePage",
  components: { BlogArticle },
  data() {
    return {
      article: [],
    };
  },
  methods: {
    async getPostData() {
      const api = new GhostContentAPI({
        url: "https://fossnsbm.org",
        key: "aa4e816c161110084f7ada42ad",
        version: "v3",
      });

      api.posts.read({ id: this.$route.params.id, include: "authors" }).then((posts) => {
        this.article = posts;
      });
    },
  },
  mounted() {
    this.getPostData();
  },
};
</script>
