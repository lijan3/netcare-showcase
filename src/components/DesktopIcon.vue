<template>
  <button class="desktop-icon">
    <img :src="`src/assets/icons/${icon}`" />
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "DesktopIcon",
  props: {
    icon: String,
    label: String,
    onclick: Function,
  },
};
</script>

<style scoped>
.desktop-icon {
  font-family: inherit;
  font-size: 10px;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 18px;
}

.desktop-icon > img {
  width: 40px;
  margin-bottom: 4px;
}
</style>
