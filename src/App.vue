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

.bold {
  font-weight: bold;
}

.underline {
  text-decoration: underline;
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

/* Dialogs */
.card {
  display: flex;
  flex-direction: column;
  width: 1024px;
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
  width: 400px;
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
</style>
