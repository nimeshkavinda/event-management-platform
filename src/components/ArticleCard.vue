<template>
  <mdb-row class="mb-4">
    <mdb-stretched-link :href="post.url" class="black-text">
      <mdb-card style="box-shadow: none!important;">
        <mdb-row>
          <mdb-col col="6">
            <img
              :src="post.feature_image"
              alt="thumbnail"
              width="100%"
              height="180px"
              style="border-radius: 0.6em; object-fit: cover;"
            />
          </mdb-col>
          <mdb-col col="6">
            <div class="card-body">
              <h5 class="h5 font-weight-bold">
                {{ post.title }}
              </h5>
              <mdb-row>
                <mdb-col col="1">
                  <img
                    :src="post.primary_author.profile_image"
                    class="rounded-circle"
                    height="22"
                    width="22"
                    alt=""
                    loading="lazy"
                  />
                </mdb-col>
                <mdb-col col="10">
                  <p class="card-text">
                    {{ post.primary_author.name }}
                  </p>
                </mdb-col>
              </mdb-row>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-card>
    </mdb-stretched-link>
  </mdb-row>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbStretchedLink } from "mdbvue";
export default {
  name: "ArticleCard",
  props: ["post"],
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbStretchedLink
  },
};
</script>
