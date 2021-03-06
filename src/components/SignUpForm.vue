<template>
  <div>
    <form>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email address"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Confirm password"
          required
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
import {} from "mdbvue";
export default {
  name: "SignUpForm",
  components: {},
};
</script>
