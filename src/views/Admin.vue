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
            <form>
              <p class="h4 text-center mb-4">Create an event</p>

              <label for="defaultFormContactNameEx" class="grey-text"
                >Event Name</label
              >
              <input
                type="text"
                id="defaultFormContactNameEx"
                class="form-control"
              />

              <br />

              <label for="defaultFormContactEmailEx" class="grey-text"
                >Your email</label
              >
              <input
                type="email"
                id="defaultFormContactEmailEx"
                class="form-control"
              />

              <br />

              <mdb-input
                :value="handlePickersValue()"
                @click.native="$refs.datePicker.open()"
              />
              <mdb-date-picker-2
                ref="datePicker"
                disable-input
                v-model="datePickerValue"
                @close="$refs.timePicker.open()"
              />
              <mdb-time-picker
                ref="timePicker"
                disable-input
                v-model="timePickerValue"
              />

              <br />

              <label for="defaultFormContactSubjectEx" class="grey-text"
                >Subject</label
              >
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                class="form-control"
              />

              <br />

              <label for="defaultFormContactMessageEx" class="grey-text"
                >Your message</label
              >
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                class="form-control"
                rows="3"
              ></textarea>

              <div class="text-center mt-4">
                <mdb-btn class="btn btn-outline-warning" type="submit">
                  Send<i class="far fa-paper-plane ml-2"></i>
                </mdb-btn>
              </div>
            </form>
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
  mdbBtn,
  mdbDatePicker2,
  mdbTimePicker,
  mdbInput,
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
    mdbBtn,
    mdbDatePicker2,
    mdbTimePicker,
    mdbInput,
  },
  data() {
    return {
      email: null,
      datePickerValue: "",
      timePickerValue: "",
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
    handlePickersValue() {
      let output = "Pick date and time";
      if (this.datePickerValue && this.timePickerValue)
        output = `${this.datePickerValue}, ${this.timePickerValue}`;
      else if (this.datePickerValue) output = this.datePickerValue;
      else if (this.timePickerValue) output = this.timePickerValue;
      return output;
    },
  },
};
</script>
