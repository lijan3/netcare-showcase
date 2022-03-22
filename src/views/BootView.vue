<template>
  <div class="page-container" @click="boot()">
    <div>
      <h1>{{ heading }}</h1>
      <div class="heading-container">
        <h2>{{ subheading }}</h2>
        <h3>95</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BootView",
  data() {
    return {
      heading: "Netcare",
      subheading: "Project Showcase",
      show: true,
    };
  },
  methods: {
    boot: function () {
      document.body.style.cursor = "progress";
      const audio = new Audio("src/assets/sound/startup.wav");
      audio.play();
      this.$router.push({ name: "desktop" });
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("src/assets/img/clouds.png") no-repeat center center;
}

.heading-container {
  display: flex;
  align-items: center;
  margin-top: -52px;
}

h1,
h2,
h3 {
  margin: 0;
  transform: scaleY(0.9);
}

h1 {
  font-family: "Arial";
  font-size: 100px;
  letter-spacing: -4px;
  color: white;
  margin-left: -55px;
}

h2 {
  font-family: "FranklinGothic";
  font-size: 150px;
  font-weight: bold;
  letter-spacing: -6px;
  color: black;
}

h3 {
  font-family: "Arial";
  font-size: 150px;
  letter-spacing: -12px;
  color: white;
  margin-top: 12px;
  margin-left: 6px;
}
</style>
