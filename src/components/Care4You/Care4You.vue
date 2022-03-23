<template>
  <Wizard
    title="Care4You Setup"
    :steps="steps"
    @cancel="cancel"
    @complete="complete"
  ></Wizard>
</template>

<script>
import Wizard from "../Wizard.vue";
// Steps
import Care4YouSetup from "./Care4YouSetup.vue";
import Care4YouProblem from "./Care4YouProblem.vue";
import Care4YouStack from "./Care4YouStack.vue";
import Care4YouDeployment from "./Care4YouDeployment.vue";
import Care4YouFinish from "./Care4YouFinish.vue";

import { shallowRef } from "vue";
const Setup = shallowRef(Care4YouSetup);
const Problem = shallowRef(Care4YouProblem);
const Stack = shallowRef(Care4YouStack);
const Deployment = shallowRef(Care4YouDeployment);
const Finish = shallowRef(Care4YouFinish);

export default {
  name: "Care4YouWizard",
  data: function () {
    return {
      steps: [
        {
          image: "care4you/care4you.jpg",
          heading: "Care4You Setup Wizard",
          content: Setup,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Problem Statement",
          content: Problem,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Project Outcomes",
          content: Problem,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Project Outcomes",
          subheading: "Sender Journey",
          content: Problem,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Project Outcomes",
          subheading: "Admin Journey",
          content: Problem,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Project Outcomes",
          subheading: "Receiver Journey",
          content: Problem,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Constraints",
          subheading: "Technology Stack",
          content: Stack,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Constraints",
          subheading: "Deployments",
          content: Deployment,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Team Processes",
          content: Problem,
        },
        {
          image: "care4you/care4you.jpg",
          heading: "Finishing Setup",
          content: Finish,
        },
      ],
    };
  },
  methods: {
    cancel: function () {
      this.$emit("cancel");
    },
    complete: function () {
      this.$emit("finish");
    },
  },
  components: {
    Wizard,
  },
};
</script>

<style></style>
