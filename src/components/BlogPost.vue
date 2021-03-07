<template>
  <div class="blog-item">
    <mdb-stretched-link :href="blogPost.url" class="black-text">
      <mdb-card style="border-radius: 0.6em;">
        <mdb-view hover>
          <mdb-card-image
            :src="blogPost.feature_image"
            alt="Blog post"
            style="border-radius: 0.6em;"
          />
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>{{ blogPost.title }}</mdb-card-title>
          <mdb-card-text
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</mdb-card-text
          >
          <mdb-row class="d-flex justify-content-center">
            <mdb-col col="1">
              <img
                :src="blogPost.primary_author.profile_image"
                class="rounded-circle"
                height="22"
                width="22"
                alt=""
                loading="lazy"
              />
            </mdb-col>
            <mdb-col col="10">
              <p class="card-text">
                {{ blogPost.primary_author.name }}
              </p>
            </mdb-col>
          </mdb-row>
        </mdb-card-body>
      </mdb-card>
    </mdb-stretched-link>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbView,
  mdbMask,
  mdbStretchedLink,
} from "mdbvue";
export default {
  name: "CardPage",
  props: ["blogPost"],
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
    mdbStretchedLink,
  },
};
</script>
