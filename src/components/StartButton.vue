<template>
  <button class="start-button">
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
}

.start-button > img {
  display: block;
  height: 100%;
}
</style>
