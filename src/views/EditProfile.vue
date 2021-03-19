<template>
  <div class="edit-profile">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 my-5">
        <mdb-col></mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "EditProfilePage",
  props: ["user"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      displayName: null,
      email: null,
      phoneNumber: null,
      bio: null,
      university: null,
      degree: null,
      academicYr: null,
      photoUrl: null,
      fbUrl: null,
      twitterUrl: null,
      githubUrl: null,
      linkedInUrl: null,
      instagramUrl: null,
    };
  },
  mounted() {
    if (this.user === null) {
      this.$router.push("/login");
    }
  },
  created() {
    this.getUserData();
  },
  methods: {
    isMorning() {
      return new Date().getHours() < 12 ? true : false;
    },
    getUserData() {
      this.displayName = this.user.displayName;
      this.email = this.user.email;
      this.phoneNumber = this.user.phoneNumber;
      this.photoUrl = this.user.photoUrl;
    },
  },
};
</script>
