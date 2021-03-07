<template>
  <div class="card bg-dark text-white">
    <mdb-stretched-link :href="featuredPost.url" class="white-text">
      <mdb-view class="rounded">
        <img
          :src="featuredPost.feature_image"
          class="card-img"
          width="100%"
          style="object-fit: cover;"
          alt="featured article"/><mdb-mask flex-center overlay="black-strong"
      /></mdb-view>
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <mdb-row>
          <h1 class="font-weight-bold card-title pl-3">
            {{ featuredPost.title }}
          </h1>
        </mdb-row>
        <mdb-row>
          <mdb-col col="3" class="pl-3">
            <img
              :src="featuredPost.primary_author.profile_image"
              class="rounded-circle"
              height="36"
              width="36"
              alt=""
              loading="lazy"
            />
          </mdb-col>
          <mdb-col col="9" class="pl-2 pt-1">
            <h5 class="card-text">
              {{ featuredPost.primary_author.name }}
            </h5>
          </mdb-col>
        </mdb-row>
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
