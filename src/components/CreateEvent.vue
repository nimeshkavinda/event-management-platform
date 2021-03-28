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
              <form>
                <div class="form-group">
                  <label for="inputEventName">Event Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEventName"
                    placeholder="Hash Code"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputDate">Date</label>
                    <input type="date" class="form-control" id="inputDate" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputTime">Start Time</label>
                    <input type="time" class="form-control" id="inputTime" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputVenue">Venue</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputVenue"
                    placeholder="FOC, C2-002, NSBM Green University"
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
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputOranizer">Organizer</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputOrganizer"
                      placeholder="DevLab"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="fileSpeaker">Speaker Photo</label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="fileSpeaker"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="fileOrganizer">Organizer Photo</label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="fileOrganizer"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="fileThumb">Event Thumbnail</label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="fileThumb"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputDetails">Event Details</label>
                  <textarea
                    class="form-control"
                    id="inputDetails"
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="inputUrl">TypeForm URL</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputUrl"
                    placeholder="https://developerplatform.typeform.com/to/Xc7NMh"
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
};
</script>
