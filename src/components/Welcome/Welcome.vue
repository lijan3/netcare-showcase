<template>
  <div class="welcome">
    <div class="carousel">
      <img :src="image" />
      <p class="card-text bold">Did you know...</p>
      <p class="card-text">{{ caption }}</p>
    </div>
    <div class="content">
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="showWelcome"
      >
        <span class="btn-text"> <span class="underline">W</span>elcome </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="$emit('showTeam')"
      >
        <span class="btn-text">The <span class="underline">T</span>eam </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="showPowers"
      >
        <span class="btn-text">
          <span class="underline">S</span>uperpowers
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="showClient"
      >
        <span class="btn-text">
          The <span class="underline">C</span>lient
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="$emit('showCulture')"
      >
        <span class="btn-text"> Team Culture </span>
      </button>
      <div class="divider"></div>
      <button
        id="cancel"
        class="btn btn-primary border-dark"
        type="button"
        @click="$emit('close')"
      >
        <span class="btn-text">Close</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data: function () {
    return {
      image: "src/assets/img/welcome.gif",
      caption: "We spent way too much time on this",
    };
  },
  methods: {
    showWelcome: function () {
      this.image = "src/assets/img/welcome.gif";
      this.caption = "We spent way too much time on this";
    },
    showClient: function () {
      this.image = "src/assets/img/netcare.jpg";
      this.caption =
        "Netcare is the largest private healthcare provider in SA and the UK";
    },
    showPowers: function () {
      this.image = "src/assets/img/bigdeal.jpg";
      this.caption = "The Justice League has nothing on us";
    },
  },
};
</script>

<style scoped>
.card-text {
  text-align: left;
  margin: 0;
}

.welcome {
  display: flex;
  flex-grow: 1;
}

.carousel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 12px;
}

.carousel > img {
  width: 100%;
  border: 2px inset;
  margin-bottom: 12px;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4px 12px;
}

.btn {
  margin-top: 8px;
}

.divider {
  margin: 12px 0;
}
</style>
