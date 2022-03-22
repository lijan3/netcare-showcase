<template>
  <nav class="navbar">
    <start-button />
    <Time />
  </nav>
</template>

<script>
import StartButton from "../components/StartButton.vue";
import Time from "../components/Time.vue";

export default {
  name: "TaskBar",
  components: {
    StartButton,
    Time,
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 2px;
  border-top: 2px outset #fff;
  border-bottom: none;
  height: auto;
}
</style>
