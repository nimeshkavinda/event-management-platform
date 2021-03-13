<template>
  <mdb-container fluid class="text-left">
    <mdb-row
      class="mx-5 mb-5 pb-5 d-flex align-items-center"
      style="height:70vh;"
    >
      <mdb-col lg="8" class="mb-4">
        <p class="h1 font-weight-bold">
          Sign in to<br />Our Latest<br />Event Management Platform
        </p>
        <mdb-row>
          <mdb-col lg="1" class="mr-md-4">
            <router-link to="/signup">
              <button
                type="button"
                style="border-radius: 1.5em;"
                class="btn light-green"
              >
                <i class="fas fa-arrow-right" style="color: black;"></i></button
            ></router-link>
          </mdb-col>
          <mdb-col lg="5" class="mt-md-1">
            <p class="font-weight-normal">
              Register here if you don't<br />have an account yet
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col lg="4" class="px-5">
        <LoginForm></LoginForm>
        <SocialLogin></SocialLogin>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin.vue";
export default {
  name: "Login",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    LoginForm,
    SocialLogin,
  },
};
</script>
