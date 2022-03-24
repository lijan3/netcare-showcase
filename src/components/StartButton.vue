<template>
  <button class="start-button" @click="$emit('showWelcome')">
    <img src="src/assets/img/start-button.png" />
  </button>
</template>

<script>
export default {
  name: "StartButton",
};
</script>

<style scoped>
.start-button {
  cursor: pointer;
  display: inline-block;
  border: 1px outset #fff;
  box-shadow: 1px 1px #000;
  background-color: #c0c0c0;
  padding: 4px;
  margin-right: 3px;
  height: 100%;
}

.start-button > img {
  display: block;
  height: 80%;
}
</style>
