<template>
  <div class="card bg-dark text-white">
    <mdb-stretched-link :href="featuredPost.url" class="white-text">
      <mdb-view style="border-radius: 1em;">
        <img
          :src="featuredPost.feature_image"
          class="card-img"
          width="100%"
          height="420px"
          style="object-fit: cover;"
          alt="featured article"/><mdb-mask flex-center overlay="black-strong"
      /></mdb-view>
      <div class="card-img-overlay d-flex align-items-end">
        <mdb-row>
          <h1 class="font-weight-bold card-title pl-3">
            {{ featuredPost.title }}
          </h1>
        </mdb-row>
        <mdb-row>
          <img
            :src="featuredPost.primary_author.profile_image"
            class="rounded-circle"
            height="36"
            width="36"
            alt=""
            loading="lazy"
          />
          <h5 class="card-text">
            {{ featuredPost.primary_author.name }}
          </h5></mdb-row
        >
      </div></mdb-stretched-link
    >
  </div>
</template>

<script>
import { mdbRow, mdbView, mdbMask, mdbStretchedLink } from "mdbvue";
export default {
  name: "FeaturedBlogCard",
  props: ["featuredPost"],
  components: { mdbRow, mdbView, mdbMask, mdbStretchedLink },
};
</script>
