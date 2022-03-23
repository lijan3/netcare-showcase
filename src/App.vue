<template>
  <RouterView v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style>
@font-face {
  font-family: "FranklinGothic";
  src: url("src/assets/fonts/FranklinGothicRegular.ttf");
}

html,
body {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  background: black;
}

div#app {
  display: flex;
  flex-grow: 1;
}

.d-flex {
  display: flex;
}

p,
ol li,
ul li {
  font-size: 11px;
}

ul {
  margin-bottom: 12px;
}

.btn {
  font-family: "Windows 95";
}

.btn-primary:disabled {
  color: grey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
