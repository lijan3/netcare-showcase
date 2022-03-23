<template>
  <div class="card card-tertiary">
    <div class="card-header text-center">
      <span>{{ title }}</span>
    </div>
    <div
      v-for="(step, index) in steps"
      :key="index"
      v-show="currentStep === index"
      class="card-body"
    >
      <div
        class="card-image"
        :style="{
          backgroundImage: `url('src/assets/img/${step.image}')`,
        }"
      ></div>
      <div class="card-content">
        <h1 class="card-heading">{{ step.heading }}</h1>
        <h2 v-if="step.subheading" class="card-subheading">
          {{ step.subheading }}
        </h2>
        <component :is="step.content"></component>
      </div>
    </div>
    <div class="divider"></div>
    <div v-if="currentStep < total - 1" class="card-actions">
      <div class="d-flex">
        <button
          class="btn btn-primary border-dark"
          type="button"
          @click="back"
          :disabled="currentStep == 0"
        >
          <span class="btn-text">&lt;&nbsp;Back</span>
        </button>
        <button
          class="btn btn-primary border-dark-lg"
          type="button"
          @click="next"
        >
          <span class="btn-text">Next&nbsp;&gt;</span>
        </button>
      </div>
      <button
        id="cancel"
        class="btn btn-primary border-dark"
        type="button"
        @click="cancel"
      >
        <span class="btn-text">Cancel</span>
      </button>
    </div>
    <div v-else class="card-actions">
      <button
        id="cancel"
        class="btn btn-primary border-dark-lg"
        type="button"
        @click="complete"
      >
        <span class="btn-text">Finish</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wizard",
  data: function () {
    return {
      currentStep: 0,
      total: 0,
    };
  },
  mounted: function () {
    this.total = this.steps?.length;
  },
  methods: {
    next: function () {
      if (this.currentStep + 1 < this.total) {
        this.currentStep++;
      }
    },
    back: function () {
      if (this.currentStep - 1 >= 0) {
        this.currentStep--;
      }
    },
    cancel: function () {
      this.$emit("cancel");
    },
    complete: function () {
      this.$emit("complete");
    },
  },
  props: {
    title: String,
    steps: Array,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
}

.card > div {
  flex-grow: 0;
}

.card-body {
  display: flex;
  flex-direction: row;
  flex-grow: 1 !important;
}

.card-image {
  width: 250px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: gray;
  background-size: cover;
  background-position: center center;
  border: 1px solid black;
  margin-right: 40px;
}

.card-content {
  flex-grow: 1;
}

ol {
  counter-reset: list;
}
ol > li {
  list-style: none;
}
ol > li:before {
  content: counter(list, decimal) ") ";
  counter-increment: list;
}

.card-heading,
.card-subheading {
  font-family: "Times New Roman", Times, serif;
  margin: 0;
}

.card-heading {
  font-size: 40px;
}

.card-subheading {
  font-size: 30px;
}

.divider {
  height: 1px;
  border-bottom: 1px solid white;
  box-shadow: inset 0 -1px 0 0 gray;
  margin: 0 10px;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
}

button#cancel {
  margin-left: 12px;
}
</style>
