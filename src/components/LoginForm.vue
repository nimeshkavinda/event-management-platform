<template>
  <div>
    <form @submit.prevent="login">
      <div class="form-group">
        <mdb-alert color="danger" v-if="error">
          {{ this.error }}
        </mdb-alert>
        <input
          type="email"
          class="form-control"
          placeholder="Email address"
          required
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required
          v-model="password"
        />
      </div>
      <div class="form-group">
        <a href="#"
          ><p class="text-right font-weight-normal">Forgot password</p></a
        >
        <button
          type="submit"
          style="border-radius: 1em;"
          class="w-100 font-weight-bold btn light-green"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { mdbAlert } from "mdbvue";
export default {
  name: "LoginForm",
  components: { mdbAlert },
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    login() {
      const info = {
        email: this.email,
        password: this.password,
      };

      firebase
        .auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            this.error = error.message;
          }
        );
    },
  },
};
</script>
