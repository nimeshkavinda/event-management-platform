<template>
  <div>
    <form @submit.prevent="signup">
      <mdb-alert color="danger" v-if="error">
        {{ this.error }}
      </mdb-alert>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Full name"
          required
          v-model="name"
        />
      </div>
      <div class="form-group">
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
        <input
          type="password"
          class="form-control"
          placeholder="Confirm password"
          required
          v-model="conPassword"
        />
      </div>
      <div class="form-group">
        <button
          type="submit"
          style="border-radius: 1em;"
          class="w-100 font-weight-bold btn light-green"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mdbAlert } from "mdbvue";
import firebase from "firebase";
export default {
  name: "SignUpForm",
  components: { mdbAlert },
  data() {
    return {
      displayName: null,
      email: null,
      conPassword: null,
      error: null,
    };
  },
  watch: {
    conPassword() {
      if (
        this.password !== "" &&
        this.conPassword !== "" &&
        this.conPassword !== this.password
      ) {
        this.error = "Passwords do not match";
      } else {
        this.error = null;
      }
    },
  },
  methods: {
    signup() {
      const info = {
        email: this.email,
        password: this.password,
        displayName: this.name,
      };
      if (!this.error) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            (userCredentials) => {
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName,
                })
                .then(() => {
                  this.$router.replace("/");
                });
            },
            (error) => {
              this.error = error.message;
            }
          );
      }
    },
  },
};
</script>
