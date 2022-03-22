<template>
  <div class="card card-tertiary">
    <div class="card-header text-center">
      <span>{{ title }}</span>
    </div>
    <div class="card-body">
      <div
        class="card-image"
        :style="{
          backgroundImage:
            'url(\'src/assets/img/care4you/kenan-ambulance.jpg\')',
        }"
      ></div>
      <div class="card-content">
        <h1 class="card-heading">Care4You Setup Wizard</h1>
        <p class="card-text">
          Welcome to the Care4You Setup Wizard, which will guide you through the
          rest of the Setup. To begin, click Next.
        </p>
        <p class="card-text">The next four parts of Setup are:</p>
        <ol>
          <li>Problem</li>
          <li>Outcomes</li>
          <li>Stack</li>
          <li>Processes</li>
        </ol>
      </div>
    </div>
    <div class="divider"></div>
    <div class="card-actions">
      <div>
        <button disabled class="btn btn-primary border-dark-lg" type="button">
          <span class="btn-text">Back</span>
        </button>
        <button class="btn btn-primary border-dark-lg" type="button">
          <span class="btn-text">Next&nbsp;&gt;</span>
        </button>
      </div>
      <button id="cancel" class="btn btn-primary border-dark-lg" type="button">
        <span class="btn-text">Cancel</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wizard",
  props: {
    title: String,
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

.card-image {
  width: 50%;
  background: gray;
  border: 1px solid black;
  margin-right: 40px;
}

.card-heading {
  font-family: "Times New Roman", Times, serif;
  font-size: 40px;
  margin-top: 0;
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
