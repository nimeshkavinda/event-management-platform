<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row>
        <mdb-col md="11" class="mx-5">
          <mdb-breadcrumb style="background-color: #fafafa" class="mt-3">
            <mdb-breadcrumb-item><a href="#">Admin</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active>{{
              selectedEvent.name
            }}</mdb-breadcrumb-item>
            <mdb-breadcrumb-item active>Update event</mdb-breadcrumb-item>
          </mdb-breadcrumb>
          <mdb-card class="w-100 my-4">
            <mdb-card-body class="p-5">
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <mdb-alert color="success" v-if="success">
                    Event has been updated
                  </mdb-alert>
                  <mdb-alert color="danger" v-if="error">
                    Failed to update the event
                  </mdb-alert>
                  <label for="inputEventName">Event Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEventName"
                    placeholder="Hash Code"
                    required
                    v-model="event.name"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputDate">Date & Start Time</label>
                    <!-- <input
                      type="date"
                      class="form-control"
                      id="inputDate"
                      required
                      v-model="eventDate"
                    /> -->
                    <datetime
                      v-model="event.datetime"
                      type="datetime"
                      class="form-control"
                      id="inputDate"
                      placeholder="Mar 31, 2021 9:00 AM"
                      required
                    ></datetime>
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
                    v-model="event.venue"
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
                      v-model="event.speaker"
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
                      v-model="event.organizer"
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
                    minlength="250"
                    maxlength="260"
                    placeholder="Event description should contain minimum of 240 characters"
                    required
                    v-model="event.description"
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
                    v-model="event.rsvpUrl"
                  />
                </div>
                <mdb-btn
                  type="submit"
                  color="light-green"
                  style="border-radius:1em;"
                >
                  Update Event
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
  mdbAlert,
} from "mdbvue";
import axios from "axios";
// import uniqid from "uniqid";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
export default {
  name: "UpdateEventForm",
  porps: ["selectedEvent"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbBtn,
    datetime: Datetime,
    mdbAlert,
  },
  data() {
    return {
      event: {
        id: null,
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
      },
      error: null,
      success: null,
    };
  },
  methods: {
    async onSpeakerPhotoUpload(event) {
      const speakerPhoto = event.target.files[0];

      this.event.speakerPhotoUrl = await this.createBase64Image(
        speakerPhoto
      ).catch((e) => Error(e));
    },
    async onOrganizerPhotoUpload(event) {
      const organizerPhoto = event.target.files[0];
      this.event.organizerPhotoUrl = await this.createBase64Image(
        organizerPhoto
      ).catch((e) => Error(e));
    },
    async onThumbnailUpload(event) {
      const thumbnail = event.target.files[0];
      this.event.thumbnailUrl = await this.createBase64Image(
        thumbnail
      ).catch((e) => Error(e));
    },
    createBase64Image(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async updateEvent(eventId) {
      this.event.id = eventId;
      axios
        .put("api/events", this.event)
        .then((result) => {
          this.success = true;
          console.log(result);
        })
        .catch(() => (this.error = true));
    },
  },
};
</script>
