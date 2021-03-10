<template>
  <mdb-container fluid class="text-left">
    <mdb-row
      class="mx-5 mb-5 pb-5 d-flex align-items-center"
      style="height:70vh;"
    >
      <mdb-col lg="8" class="mb-4">
        <p class="h1 font-weight-bold">
          Become a member to<br />get all the benefits of<br />FOSS Event
          Management Platform
        </p>
        <mdb-row>
          <mdb-col lg="1" class="mr-md-4"
            ><router-link to="/login">
              <button
                type="button"
                style="border-radius: 1.5em;"
                class="btn light-green mr-md-4"
              >
                <i class="fas fa-arrow-right" style="color: black;"></i></button
            ></router-link>
          </mdb-col>
          <mdb-col lg="5" class="mt-md-1">
            <p class="font-weight-normal">
              Login here if you are<br />already a member
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col lg="4" class="px-5">
        <SignUpForm></SignUpForm>
        <SocialLogin></SocialLogin>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import SignUpForm from "../components/SignUpForm.vue";
import SocialLogin from "../components/SocialLogin.vue";
export default {
  name: "SignUp",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    SocialLogin,
    SignUpForm,
  },
};
</script>
