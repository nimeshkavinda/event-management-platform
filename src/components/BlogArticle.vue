<template>
  <mdb-container class="text-left">
    <mdb-row class="mx-5 mt-5">
      <mdb-col md="9">
        <mdb-row>
          <mdb-col lg="1" md="2" class="mb-3">
            <img
              :src="blogArticle.primary_author.profile_image"
              class="rounded-circle"
              height="32"
              width="32"
              alt=""
              loading="lazy"
              style="object-fit: cover;"
            />
          </mdb-col>
          <mdb-col col="10">
            <p class="h4 grey-text font-weight-bold">
              Posted by
              <span class="light-green-text">{{
                blogArticle.primary_author.name
              }}</span>
              on
              <span class="light-green-text">{{
                moment(blogArticle.published_at).format("LL")
              }}</span>
            </p>
          </mdb-col>
        </mdb-row>
        <p class="h1 font-weight-bold">
          {{ blogArticle.title }}
        </p>
      </mdb-col>
    </mdb-row>
    <hr class="mx-5" />
    <mdb-row class="mx-4 my-4 font-weight-bold">
      <mdb-view
        class="zoom overlay"
        :src="blogArticle.feature_image"
        alt="Thumb"
        style="border-radius: 1.5em; object-fit: cover;"
      >
      </mdb-view>
    </mdb-row>
    <mdb-row class="mx-5 my-5">
      <mdb-container
        class="h5 font-weight-normal overflow-hidden"
        v-html="blogArticle.html"
      ></mdb-container>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbView } from "mdbvue";
export default {
  name: "BlogArticle",
  props: ["blogArticle"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
  },
};
</script>
