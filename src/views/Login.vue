<template>
  <mdb-container fluid class="text-left" >
    <mdb-row class="mx-5 mb-5 pb-5 d-flex align-items-center" style="height:70vh;" >
      <mdb-col lg="8" class="mb-4">
        <p class="h1 font-weight-bold">
          Sign in to<br />Our Latest<br />Event Management Platform
        </p>
        <mdb-row>
          <mdb-col col="1" class="mr-md-5">
            <mdb-btn
              icon="arrow-right"
              type="submit"
              style="border-radius: 2em;"
              background-color="light-green"
            ></mdb-btn>
          </mdb-col>
          <mdb-col col="5">
            <p class="font-weight-normal">
              Register here if you don't<br />have an account yet
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-col>

      <mdb-col lg="4" class="px-5">
        <!-- Default form login -->
        <form>
          <div class="form-group">
           <mdb-input type="email" label="Email address" bg size="lg" style="box-shadow: 5px 10px 20px #e0e0e0;"/>

            <mdb-input type="password" label="Your password" bg size="lg" style="box-shadow: 5px 10px 20px #e0e0e0;"/>
          </div>

          <p class="text-right">Foget my password</p>
          <div class="text-center mt-4 mr-3">
            <mdb-btn color="success" class="w-100" style="border-radius: 0.8em;"
              >Sign In</mdb-btn
            >
          </div>

          <mdb-row>
              <mdb-col col="12" class="my-4">
                  <div class="separator">Or continue with</div>

              </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col class="d-flex justify-content-center">
              <mdb-icon fab icon="google" size="2x" class="mr-3" />
              <mdb-icon fab icon="facebook-f" size="2x" class="mr-3" />
              <mdb-icon fab icon="twitter" size="2x" class="mr-3" />
              <mdb-icon fab icon="github" size="2x" class="mr-3" />
            </mdb-col>
          </mdb-row>
        </form>
        <!-- Default form login -->
      
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon,mdbInput } from "mdbvue";
export default {
  name: "Login",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput
  },
};
</script>

<style>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #000;
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}

</style>
