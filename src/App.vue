<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      dark
    >
    <v-title>Logo</v-title>
      <div class="d-flex align-center">
        <v-img
          alt="FOSS Logo"
          class="shrink mr-2"
          contain
          src=""
          transition="scale-transition"
          width="40"
        />

        
       
      </div>
      
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>

       <v-spacer></v-spacer>
      <v-btn text>Login</v-btn>
      <v-btn text>SinUp</v-btn>


      
     

      
    </v-app-bar>

    <v-main>
     <LoginForm/>
    </v-main>
  </v-app>
</template>

<script>

import LoginForm from './components/LoginForm';
export default {
  name: 'App',

  components: {
    LoginForm
  },

  data: () => ({
    //
  }),
};
</script>
