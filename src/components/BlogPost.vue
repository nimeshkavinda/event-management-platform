<template>
  <div class="blog-item">
    <router-link :to="'/blog/' + blogPost.id" class="black-text">
      <mdb-card style="border-radius: 0.6em;">
        <img
          :src="blogPost.feature_image"
          alt="Blog post"
          width="100%"
          height="220px"
          style="border-top-left-radius: 0.6em; border-top-right-radius: 0.6em; object-fit: cover;"
        />
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        <mdb-card-body>
          <mdb-card-title class="h5 font-weight-bold">{{
            blogPost.title
          }}</mdb-card-title>
          <mdb-row class="d-flex justify-content-center">
            <mdb-col col="1">
              <img
                :src="blogPost.primary_author.profile_image"
                class="rounded-circle"
                height="22"
                width="22"
                alt=""
                loading="lazy"
                style="object-fit: cover;"
              />
            </mdb-col>
            <mdb-col col="7">
              <p class="card-text">
                {{ blogPost.primary_author.name }}
              </p>
            </mdb-col>
          </mdb-row>
        </mdb-card-body>
      </mdb-card>
    </router-link>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbMask,
} from "mdbvue";
export default {
  name: "PostPage",
  props: ["blogPost"],
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbMask,
  },
};
</script>
