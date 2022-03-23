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
      image: "src/assets/img/culture/spicegirls.jpg",
      caption: "TODO",
    };
  },
  methods: {
    showWelcome: function () {
      this.image = "src/assets/img/culture/spicegirls.jpg";
      this.caption = "TODO";
    },
    showClient: function () {
      this.image = "";
      this.caption =
        "TODO: Netcare, basic intro into the work we’re involved in with them. Their systems, etc.";
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
