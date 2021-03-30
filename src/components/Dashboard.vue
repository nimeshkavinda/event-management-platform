<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Admin Dashboard
          </p>
          <p class="h1 font-weight-bold">
            Monitor FOSS Community NSBM Event Platform
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
          </mdb-tbl>

          <mdb-tbl>
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
          </mdb-tbl></mdb-col
        >
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
};
</script>
