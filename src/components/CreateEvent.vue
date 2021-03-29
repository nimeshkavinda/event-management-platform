<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Create an Event
          </p>
          <p class="h1 font-weight-bold">
            Create and host a new event
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="9" class="mx-5">
          <mdb-breadcrumb style="background-color: #fafafa">
            <mdb-breadcrumb-item><a href="#">Admin</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active>Create event</mdb-breadcrumb-item>
          </mdb-breadcrumb>
          <mdb-card class="w-100 my-4">
            <mdb-card-body class="p-5">
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="inputEventName">Event Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEventName"
                    placeholder="Hash Code"
                    required
                    v-model="eventName"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputDate">Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputDate"
                      required
                      v-model="eventDate"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputTime">Start Time</label>
                    <input
                      type="time"
                      class="form-control"
                      id="inputTime"
                      required
                      v-model="eventTime"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputVenue">Venue</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputVenue"
                    placeholder="FOC, C2-002, NSBM Green University"
                    required
                    v-model="eventVenue"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputSpeaker">Speaker</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputSpeaker"
                      placeholder="John Doe"
                      required
                      v-model="eventSpeaker"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputOranizer">Organizer</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputOrganizer"
                      placeholder="DevLab"
                      required
                      v-model="eventOrganizer"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="fileSpeaker">Speaker Photo</label>
                    <input
                      type="file"
                      class="form-control-file"
                      accept="image/*"
                      id="fileSpeaker"
                      required
                      @change="onSpeakerPhotoUpload"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="fileOrganizer">Organizer Photo</label>
                    <input
                      type="file"
                      class="form-control-file"
                      accept="image/*"
                      id="fileOrganizer"
                      required
                      @change="onOrganizerPhotoUpload"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="fileThumb">Event Thumbnail</label>
                    <input
                      type="file"
                      class="form-control-file"
                      accept="image/*"
                      id="fileThumb"
                      required
                      @change="onThumbnailUpload"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputDetails">Event Details</label>
                  <textarea
                    class="form-control"
                    id="inputDetails"
                    rows="5"
                    minlength="100"
                    maxlength="200"
                    placeholder="Event description of minimum 100 characters"
                    required
                    v-model="eventDescription"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="inputUrl">TypeForm URL</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputUrl"
                    placeholder="https://developerplatform.typeform.com/to/Xc7NMh"
                    required
                    v-model="eventRsvpUrl"
                  />
                </div>
                <mdb-btn
                  type="submit"
                  color="light-green"
                  style="border-radius:1em;"
                >
                  Create Event
                </mdb-btn>
              </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbBreadcrumb,
  mdbBreadcrumbItem,
  mdbBtn,
} from "mdbvue";
import axios from "axios";
export default {
  name: "CreateEvent",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbBtn,
  },
  data() {
    return {
      name: null,
      datetime: null,
      venue: null,
      description: null,
      organizer: null,
      speaker: null,
      organizerPhotoUrl: null,
      speakerPhotoUrl: null,
      thumbnailUrl: null,
      rsvpUrl: null,
    };
  },
  methods: {
    async onSpeakerPhotoUpload(event) {
      const speakerPhoto = event.target.files[0];

      // (async () => {
      //   this.speakerPhotoUrl = await this.createBase64Image(speakerPhoto);
      // })();
      this.speakerPhotoUrl = await this.createBase64Image(
        speakerPhoto
      ).catch((e) => Error(e));
    },
    async onOrganizerPhotoUpload(event) {
      const organizerPhoto = event.target.files[0];
      this.organizerPhotoUrl = await this.createBase64Image(
        organizerPhoto
      ).catch((e) => Error(e));
    },
    async onThumbnailUpload(event) {
      const thumbnail = event.target.files[0];
      this.thumbnailUrl = await this.createBase64Image(thumbnail).catch((e) =>
        Error(e)
      );
    },
    createBase64Image(file) {
      // const reader = new FileReader();

      // reader.onload = function(e) {
      //   this.speakerPhotoUrl = e.target.result;
      // };
      // reader.readAsDataURL(file);
      // reader.onerror = function(error) {
      //   console.log("Error: ", error);
      // };

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

      // return promise;
    },
    onSubmit() {
      const formData = new FormData();
      formData.append("avatar", this.FILE, this.FILE.name);
      formData.append("name", this.name);
      axios
        .post("http://localhost:4000/api/create-user", formData, {})
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
