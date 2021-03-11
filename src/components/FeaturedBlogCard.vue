<template>
  <div class="card bg-dark text-white">
    <router-link :to="'/blog/' + featuredPost.id" class="white-text">
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
          <mdb-col col="2" class="pl-3">
            <img
              :src="featuredPost.primary_author.profile_image"
              class="rounded-circle"
              height="28"
              width="28"
              alt=""
              loading="lazy"
              style="object-fit: cover;"
            />
          </mdb-col>
          <mdb-col col="10" class="pl-2 pt-1">
            <h6 class="card-text">
              {{ featuredPost.primary_author.name }}
            </h6>
          </mdb-col>
        </mdb-row>
      </div></router-link
    >
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbView, mdbMask } from "mdbvue";
export default {
  name: "FeaturedBlogCard",
  props: ["featuredPost"],
  components: { mdbRow, mdbCol, mdbView, mdbMask },
};
</script>
