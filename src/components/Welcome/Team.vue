<template>
  <div class="dialog">
    <div class="carousel">
      <img :src="image" />
      <div>
        <p class="card-text bold">{{ label }}</p>
        <p class="card-text">{{ caption }}</p>
      </div>
    </div>
    <div class="content">
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 0"
      >
        <span class="btn-text"> <span class="underline">O</span>verview </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 1"
      >
        <span class="btn-text">
          Moosa <span class="underline">G</span>ani
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 2"
      >
        <span class="btn-text">
          <span class="underline">D</span>irk van der Merwe
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 3"
      >
        <span class="btn-text">
          <span class="underline">K</span>evin Heritage
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 4"
      >
        <span class="btn-text">
          <span class="underline">M</span>ark Jones
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 5"
      >
        <span class="btn-text">
          <span class="underline">L</span>eandri Viviers
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 6"
      >
        <span class="btn-text">
          <span class="underline">K</span>enan Karavoussanos
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 7"
      >
        <span class="btn-text">
          <span class="underline">Z</span>akes Bila
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 8"
      >
        <span class="btn-text">
          <span class="underline">I</span>ke Thabethe
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 9"
      >
        <span class="btn-text">
          <span class="underline">J</span>unaid Desai
        </span>
      </button>
      <!-- CLose -->
      <div class="divider"></div>
      <button
        id="cancel"
        class="btn btn-primary border-dark"
        type="button"
        @click="$emit('close')"
      >
        <span class="btn-text">Back</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  data: function () {
    return {
      step: 0,
      steps: [
        {
          key: "Overview",
          image: "carebears.jpg",
          caption: "We are the DotNetCareBears",
        },
        { key: "Moosa", image: "moosa.jpg", caption: "Account manager" },
        { key: "Dirk", image: "dirk.jpg", caption: "Development manager" },
        { key: "Kevin", image: "kevin.jpg", caption: "Technical lead" },
        { key: "Mark", image: "mark.jpg", caption: "Software engineer" },
        {
          key: "Leandri",
          image: "leandri.jpg",
          caption: "Software engineer",
        },
        { key: "Kenan", image: "kenan.jpg", caption: "Software engineer" },
        {
          key: "Zakes",
          image: "zakes.jpg",
          caption: "Quality assurance engineer",
        },
        { key: "Ike", image: "ike.jpg", caption: "Business analyst" },
        { key: "Junaid", image: "junaid.jpg", caption: "Software engineer" },
      ],
    };
  },
  computed: {
    image: function () {
      return `src/assets/img/team/${this.steps[this.step]?.image}`;
    },
    label: function () {
      return this.step === 0 ? "Did you know?" : "Role:";
    },
    caption: function () {
      return this.steps[this.step]?.caption;
    },
  },
};
</script>

<style scoped>
.card-text {
  text-align: left;
  margin: 0;
}

.dialog {
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
