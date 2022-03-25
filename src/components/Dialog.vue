<template>
  <div class="card card-tertiary card-dialog">
    <div class="card-header text-left">
      <span>{{ title }}</span>
      <button
        class="btn btn-sm btn-primary"
        type="button"
        @click="$emit('close')"
      >
        <span class="btn-text">
          <img src="src/assets/icons/close.png" />
        </span>
      </button>
    </div>
    <div class="card-body">
      <img class="image" :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    title: String,
    image: String,
  },
};
</script>

<style scoped>
.card {
  width: auto;
  max-width: 85vw;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-text {
  text-align: left;
  margin: 0;
}

.dialog {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4px 12px;
}

.image {
  max-height: 85vh;
  width: 100%;
  border: 2px inset;
}

.btn {
  border: none;
  padding: 4px;
}

.divider {
  margin: 12px 0;
}
</style>
