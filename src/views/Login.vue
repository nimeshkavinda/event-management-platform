<template>
<mdb-container>
    <mdb-row>
        <mdb-col col="6">
               <p class="text-center ">Sign in to<br>Our Latest<br>Event Management Platform</p>
                  <p class="text-center ">Register here if you don't<br>have an account yet</p>
        

        </mdb-col>

        <mdb-col col="6">
              <!-- Default form login -->
  <form>
    
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
       <p class="text-center mb-4">Foget my password</p>
    <div class="text-center mt-4">
      <button class="btn btn-indigo" type="submit">Login</button>
    </div>
 
  </form>
  <!-- Default form login -->


        </mdb-col>
    </mdb-row>

</mdb-container>

    
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "AboutPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>