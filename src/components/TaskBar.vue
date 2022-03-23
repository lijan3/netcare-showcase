<template>
  <nav class="navbar">
    <div class="start">
      <start-button />
      <div v-for="(window, i) in windows" :key="i" class="window">
        <img :src="`src/assets/icons/${window.icon}`" />
        <span class="btn-text">{{ window.label }}</span>
      </div>
    </div>
    <Time />
  </nav>
</template>

<script>
import StartButton from "../components/StartButton.vue";
import Time from "../components/Time.vue";

export default {
  name: "TaskBar",
  props: {
    windows: Array,
  },
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

.start {
  display: flex;
  justify-content: start;
  align-items: center;
}

.window {
  display: flex;
  align-items: center;
  margin: 0 3px;
  padding: 0 100px 0 6px;
  height: 100%;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  box-shadow: inset 1px 1px grey;
  background: lightgray;
}

.window > img {
  width: 16px;
}

.window > span {
  font-size: 9px;
  margin-left: 4px;
}
</style>
