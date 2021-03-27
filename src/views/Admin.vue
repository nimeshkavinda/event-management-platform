<template>
  <section class="pb-5">
    <mdb-edge-header color="blue" />

    <mdb-container free-bird>
      <mdb-row>
        <mdb-col
          md="8"
          lg="7"
          class="mx-auto float-none white z-depth-1 py-2 px-2"
        >
          <mdb-card-body>
            <h2 class="h2-responsive">
              <strong>Material Design Edge Headers</strong>
            </h2>
            <p class="pb-4">Example of Material Design Form</p>

            <form>
              <h5 class="h5-responsive">Basic Textbox</h5>

              <mdb-input label="Example label" />

              <h5 class="h5-responsive">Textbox with icon</h5>
              <mdb-input label="Your name" icon="user" />

              <h5 class="h5-responsive">E-mail validation</h5>
              <mdb-input type="email" label="Your email" icon="envelope" />

              <h5 class="h5-responsive">Textarea</h5>
              <mdb-input
                type="textarea"
                label="Textarea"
                icon="pencil-alt"
              ></mdb-input>

              <h5 class="h5-responsive">Disabled field</h5>
              <mdb-input label="Example label" disabled />
              <div class="text-xs-left">
                <mdb-btn color="primary" @click.native.prevent="handleSubmit()"
                  >Submit</mdb-btn
                >
              </div>
            </form>

            <p class="my-2"><small>Never submit your passwords here</small></p>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </section>
</template>

<script>
import {
  mdbEdgeHeader,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCardBody,
  mdbInput,
  mdbBtn,
} from "mdbvue";
export default {
  name: "AdminPage",
  props: ["admin"],
  components: {
    mdbEdgeHeader,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCardBody,
    mdbInput,
    mdbBtn,
  },
  data() {
    return {
      email: null,
    };
  },
  mounted() {
    // if (this.admin === null) {
    //   this.$router.push("/login");
    // }
  },
  created() {
    this.getAdminData();
  },
  methods: {
    getAdminData() {
      this.email = this.admin.email;
    },
  },
};
</script>
