<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Users
          </p>
          <p class="h1 font-weight-bold">
            Find all users at one place
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="11" class="mx-5"
          ><mdb-breadcrumb style="background-color: #fafafa" class="mt-3">
            <mdb-breadcrumb-item><a href="#">Admin</a></mdb-breadcrumb-item>
            <mdb-breadcrumb-item active
              >Users</mdb-breadcrumb-item
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
              <tr>
                <!-- <th>{{ event.id }}</th> -->
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Delete User</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
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
  mdbBreadcrumb,
  mdbBreadcrumbItem,
  mdbTbl,
  mdbTblHead,
  mdbTblBody,
} from "mdbvue";
export default {
  name: "Users",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
  },
};
</script>
