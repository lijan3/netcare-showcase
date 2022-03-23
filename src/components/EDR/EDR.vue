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
import EDRProblem from "./EDRProblem.vue";
import EDRStack from "./EDRStack.vue";
import EDRFinish from "./EDRFinish.vue";
import EDRProgression from "./EDRProgression.vue";
import EDRConstraints from "./EDRConstraints.vue";
import EDRProcess from "./EDRProcess.vue";
import EDRDemoBalanceMedication from "./EDRDemoBalanceMedication.vue";
import EDRDemoReceiveMedication from "./EDRDemoReceiveMedication.vue";
import EDRDemoViewMedication from "./EDRDemoViewMedication.vue";

import { shallowRef } from "vue";
const Setup = shallowRef(EDRSetup);
const Problem = shallowRef(EDRProblem);
const Stack = shallowRef(EDRStack);
const Progression = shallowRef(EDRProgression);
const Constraints = shallowRef(EDRConstraints);
const Process = shallowRef(EDRProcess);
const BalanceMedication = shallowRef(EDRDemoBalanceMedication);
const ReceiveMedication = shallowRef(EDRDemoReceiveMedication);
const ViewMedication = shallowRef(EDRDemoViewMedication);
const Finish = shallowRef(EDRFinish);

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
          heading: "Progression from Care4You",
          content: Progression,
        },
        {
          image: "edr/edr.jpg",
          heading: "Problem Statement",
          content: Problem,
        },
        {
          image: "edr/edr.jpg",
          heading: "Constraints",
          subheading: "Technology Stack",
          content: Stack,
        },
        {
          image: "edr/edr.jpg",
          heading: "Constraints",
          subheading: "Project Constraints",
          content: Constraints,
        },
        {
          image: "edr/edr.jpg",
          heading: "Team Processes",
          content: Process,
        },
        {
          image: "edr/edr.jpg",
          heading: "Demo - Receive Medication",
          content: ReceiveMedication,
        },
        {
          image: "edr/edr.jpg",
          heading: "Demo - Balance Medication",
          content: BalanceMedication,
        },
        {
          image: "edr/edr.jpg",
          heading: "Demo - View Medication",
          content: ViewMedication,
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
