<template>
  <div class="dialog">
    <div class="carousel">
      <img :src="image" />
      <div>
        <p class="card-text bold">Did you know?</p>
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
        @click="step++"
        :disabled="step >= steps.length - 1"
      >
        <span class="btn-text"> Next <span class="underline">T</span>ip </span>
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
  name: "KnowledgeShare",
  data: function () {
    return {
      step: 0,
      steps: [
        {
          image: "knowledgeshare.jpg",
          caption:
            "We have a Knowledge Share channel on Teams where we share knowledge",
        },
        {
          image: "grumpycat.jpg",
          caption: "We share our best MS Paint creations",
        },
        {
          image: "nickleback.jpg",
          caption: "We share songs and make fun of Imagine Dragons",
        },
        {
          image: "rituals.jpg",
          caption: "We share our dreams and deepest desires",
        },
        {
          image: "robabank.jpg",
          caption: "We share admission of past war crimes in former Yugoslavia",
        },
        {
          image: "reviews.jpg",
          caption: "We even sometimes ask work related questions",
        },
        {
          image: "flames.jpg",
          caption: "This helps us build personal relationships",
        },
        {
          image: "ikeworm.jpg",
          caption: "This helps us grow as a team",
        },
      ],
    };
  },
  computed: {
    image: function () {
      return `src/assets/img/knowledgeshare/${this.steps[this.step]?.image}`;
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
  max-height: 600px;
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
