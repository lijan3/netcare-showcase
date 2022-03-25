<template>
  <div class="card card-tertiary">
    <div class="card-header text-center">
      <span>Quality Assurance</span>
    </div>
    <div class="card-body">
      <div
        class="card-image"
        :style="{
          backgroundImage: `url('src/assets/img/testing.jpg')`,
        }"
      ></div>
      <div class="card-content">
        <h1 class="card-heading">QA Setup</h1>
        <p class="card-text">
          Welcome to the QA Setup Wizard. Click Finish to complete installing
          the following Quality Assurance modules:
        </p>
        <ol>
          <li>Testing</li>
          <li>Signoff</li>
          <li>Deployment</li>
          <li>Test evidence</li>
        </ol>
      </div>
    </div>
    <div class="divider"></div>
    <div class="card-actions">
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
  name: "QAWizard",
  methods: {
    complete: function () {
      this.$emit("finish");
    },
  },
};
</script>

<style scoped>
.card {
  height: 768px;
  width: 65vw;
}

.card-image {
  width: 800px;
}
</style>
