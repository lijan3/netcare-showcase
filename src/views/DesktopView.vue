<template>
  <div class="page-container bg-secondary">
    <div class="screen">
      <div class="desktop-icons">
        <desktop-icon
          v-for="icon in icons"
          :key="icon.key"
          :icon="icon.img"
          :label="icon.label"
          :onclick="icon.onclick"
        />
      </div>
    </div>
    <task-bar></task-bar>
  </div>
</template>

<script>
import DesktopIcon from "../components/DesktopIcon.vue";
import TaskBar from "../components/TaskBar.vue";

export default {
  name: "DesktopView",
  data: function () {
    return {
      icons: [
        {
          key: "MyComputer",
          img: "computer_explorer_cool-0.png",
          label: "My Computer",
          onclick: () => {},
        },
        {
          key: "InternetExplorer",
          img: "msie2-5.png",
          label: "Internet Explorer",
          onclick: () => {},
        },
        {
          key: "Care4You",
          img: "executable-0.png",
          label: "Care4You.exe",
          onclick: () => {},
        },
        {
          key: "EDR",
          img: "executable-0.png",
          label: "EDR.exe",
          onclick: () => {},
        },
      ],
    };
  },
  components: {
    DesktopIcon,
    TaskBar,
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.screen {
  display: flex;
  flex-grow: 1;
  margin: 8px;
}

.desktop-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* .desktop-icon { 
  background: none;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "MSSansSerif";
  font-size: 9px;
  color: white;
  margin-bottom: 18px;
} */

/* .desktop-icon > img {
  width: 40px;
  margin-bottom: 4px;
} */
</style>
