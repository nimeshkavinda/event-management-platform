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
            <mdb-breadcrumb-item active>Users</mdb-breadcrumb-item>
          </mdb-breadcrumb></mdb-col
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
  mdbBreadcrumb,
  mdbBreadcrumbItem,
} from "mdbvue";
export default {
  name: "Users",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
  },
};
</script>
