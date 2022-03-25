<template>
  <div class="dialog">
    <div class="carousel">
      <img :src="image" />
      <p class="card-text bold">Did you know?</p>
      <p class="card-text">{{ caption }}</p>
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
        @click="$emit('showKnowledgeShare')"
      >
        <span class="btn-text">
          <span class="underline">K</span>nowledge Share
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 1"
      >
        <span class="btn-text">
          Paint <span class="underline">M</span>emes
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 2"
      >
        <span class="btn-text"> <span class="underline">W</span>ordle </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 3"
      >
        <span class="btn-text">
          <span class="underline">J</span>oke Picker Wheel
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 4"
      >
        <span class="btn-text">
          Team <span class="underline">S</span>ocials
        </span>
      </button>
      <button
        class="btn btn-primary border-dark"
        type="button"
        @click="step = 5"
      >
        <span class="btn-text">
          Team <span class="underline">C</span>eremonies
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
  name: "Culture",
  data: function () {
    return {
      step: 0,
      steps: [
        {
          key: "Introduction",
          image: "spicegirls.jpg",
          caption: "We have a pretty interesting team culture",
        },
        {
          key: "Memes",
          image: "memes.jpg",
          caption: "Most of our memes are made in MS Paint",
        },
        {
          key: "Wordle",
          image: "wordle.jpg",
          caption:
            "We have a Social channel on Teams where we post our daily Wordle scores",
        },
        {
          key: "PickerWheel",
          image: "pickerwheel.jpg",
          caption:
            "Our unbiased picker wheel decides who needs to tell jokes in standup",
        },
        {
          key: "Socials",
          image: "hammertime.gif",
          caption:
            "We drink beer sometimes on Fridays and play GarticPhone or Draw.io",
        },
        {
          key: "Ceremonies",
          image: "miro.jpg",
          caption: "We have standup every morning and monthly retrospectives",
        },
      ],
    };
  },
  computed: {
    image: function () {
      return `src/assets/img/culture/${this.steps[this.step]?.image}`;
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
