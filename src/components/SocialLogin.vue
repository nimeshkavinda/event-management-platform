<template>
  <div class="social-login">
    <mdb-row>
      <mdb-col col="12" class="my-4">
        <div class="separator">Or continue with</div>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col class="d-flex justify-content-center">
        <button type="button" @click="this.signInWithGoogle">
          <mdb-icon fab icon="google" size="2x" class="mr-4" />
        </button>
        <button>
          <mdb-icon fab icon="facebook-f" size="2x" class="mr-4" />
        </button>
        <button><mdb-icon fab icon="twitter" size="2x" class="mr-4" /></button>
        <button><mdb-icon fab icon="github" size="2x" /></button>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbIcon } from "mdbvue";
import firebase from "firebase";
export default {
  name: "SocialLogin",
  components: {
    mdbRow,
    mdbCol,
    mdbIcon,
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    signInWithGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
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
  content: "";
  flex: 1;
  border-bottom: 1px solid #000;
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}
</style>
