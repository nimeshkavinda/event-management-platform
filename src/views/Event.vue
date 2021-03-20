<template>
  <div>
    <EventDetails :key="event.id" :event="event"></EventDetails>
  </div>
</template>

<script>
import {} from "mdbvue";
import axios from "axios";
import EventDetails from "../components/EventDetails.vue";
export default {
  name: "EventPage",
  components: { EventDetails },
  data() {
    return {
      event: [],
    };
  },
  created() {
    this.getEventData();
  },
  // async created() {
  //   const result = await axios.get("/api/events/${this.$route.params.id}");
  //   const event = result.data;
  //   this.event = event;
  // },
  methods: {
    getEventData: function() {
      axios
        .get("/api/events/${this.$route.params.id}")
        .then((response) => (this.event = response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
