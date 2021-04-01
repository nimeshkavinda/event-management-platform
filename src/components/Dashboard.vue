<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Admin Dashboard
          </p>
          <p class="h1 font-weight-bold">
            Monitor FOSS Event Platform
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="11" class="mx-5"
          ><mdb-breadcrumb style="background-color: #fafafa" class="mt-3">
            <mdb-breadcrumb-item><a href="#">Admin</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active
              >Dashboard</mdb-breadcrumb-item
            > </mdb-breadcrumb
          ><mdb-tbl>
            <mdb-tbl-head color="black" textWhite>
              <tr>
                <!-- <th>Event ID</th> -->
                <th>Event Name</th>
                <th>DateTime</th>
                <th>Venue</th>
                <th>Speaker</th>
                <th>Organizer</th>
                <th>Actions</th>
              </tr>
            </mdb-tbl-head>

            <mdb-tbl-body>
              <tr v-for="event in events" :key="event.id">
                <!-- <th>{{ event.id }}</th> -->
                <td>{{ event.name }}</td>
                <td>{{ moment(event.datetime).format("LLLL") }}</td>
                <td>{{ event.venue }}</td>
                <td>{{ event.speaker }}</td>
                <td>{{ event.organizer }}</td>
                <td>
                  <a
                    role="button"
                    @click="
                      deleteEvents(event.id);
                      getEvents();
                    "
                    >Delete</a
                  >
                </td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>

          <!-- <mdb-tbl>
            <mdb-tbl-head color="grey">
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>DateTime</th>
                <th>Venue</th>
                <th>Speaker</th>
                <th>Organizer</th>
              </tr>
            </mdb-tbl-head>

            <mdb-tbl-body>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl> -->
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
  mdbTbl,
  mdbTblHead,
  mdbTblBody,
  mdbBreadcrumb,
  mdbBreadcrumbItem,
} from "mdbvue";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.getEvents();
  },
  methods: {
    getEvents: function() {
      axios
        .get("/api/events")
        .then((response) => (this.events = response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
    async deleteEvents(eventId) {
      const result = await axios.delete(`api/events/${eventId}`);
      this.events = result.data();
    },
  },
};
</script>
