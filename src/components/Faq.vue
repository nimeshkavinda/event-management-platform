<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="pane in panes" :key="pane.id">
      <v-expansion-panel-header class="h1 font-weight-bold">{{
        pane.title
      }}</v-expansion-panel-header>
      <v-expansion-panel-content class="h5 font-weight-normal p-3">
        {{ pane.content }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import {} from "mdbvue";
export default {
  name: "FaqAccordion",
  components: {},
  data() {
    return {
      panes: [
        {
          id: "1",
          title: "What is FOSS?",
          content: `Free and open-source software (FOSS) is software that can be classified as both free software and open-source software. That is, anyone is freely licensed to use, copy, study, and change the software in any way, and the source code is openly shared so that people are encouraged to voluntarily improve the design of the software.[3] This is in contrast to proprietary software, where the software is under restrictive copyright licensing and the source code is usually hidden from the users.`,
        },
        {
          id: "2",
          title: "Why should you move to FOSS?",
          content: `People prefer open source software because they consider it more secure and stable than proprietary software. Because anyone can view and modify open source software, someone might spot and correct errors or omissions that a program's original authors might have missed.`,
        },
        {
          id: "3",
          title: "What do we do?",
          content: `FOSS of NSBM is a community established to spread the open source knowledge among students. ... Free, open-source operating systems such as GNU, Linux and BSD are widely utilized today, powering millions of servers, desktops, smartphones (e.g. Google Android) and other devices.`,
        },
        {
          id: "4",
          title: "How to contribute?",
          content: `Contribute to the society with developments and new concepts transforming young lives to feel as a part of the world’s largest developing community`,
        },
      ],
    };
  },
};
</script>
