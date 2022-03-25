<template>
  <Wizard
    title="EDR Setup"
    :steps="steps"
    @cancel="cancel"
    @complete="complete"
  ></Wizard>
</template>

<script>
import Wizard from "../Wizard.vue";
// Steps
import EDRSetup from "./EDRSetup.vue";
import EDROverview from "./EDROverview.vue";
import EDRProblem from "./EDRProblem.vue";
import EDRFinish from "./EDRFinish.vue";
import EDRRequirements from "./EDRRequirements.vue";
import EDRProgression from "./EDRProgression.vue";
import EDRConstraints from "./EDRConstraints.vue";

import { shallowRef } from "vue";
const Setup = shallowRef(EDRSetup);
const Overview = shallowRef(EDROverview);
const Problem = shallowRef(EDRProblem);
const Progression = shallowRef(EDRProgression);
const Constraints = shallowRef(EDRConstraints);
const Finish = shallowRef(EDRFinish);
const Requirements = shallowRef(EDRRequirements);

export default {
  name: "EDRWizard",
  data: function () {
    return {
      steps: [
        {
          image: "edr/edr.jpg",
          heading: "EDR Setup Wizard",
          content: Setup,
        },
        {
          image: "edr/edr.jpg",
          heading: "EDR",
          subheading: "Overview",
          content: Overview,
        },
        {
          image: "edr/edr.jpg",
          heading: "Progression",
          subheading: "Wins after Care4You",
          content: Progression,
        },
        {
          image: "edr/edr.jpg",
          heading: "Problem Statement",
          subheading: "Primary goals of the project",
          content: Problem,
        },
        {
          image: "edr/edr.jpg",
          heading: "Requirements",
          subheading: "Tasks to fulfil goals",
          content: Requirements,
        },
        {
          image: "edr/edr.jpg",
          heading: "Constraints",
          subheading: "Project Constraints",
          content: Constraints,
        },
        {
          image: "edr/edr.jpg",
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
