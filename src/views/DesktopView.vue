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
      <div class="dialogs">
        <Wizard v-if="show" title="Care4You Setup" />
      </div>
    </div>
    <task-bar></task-bar>
  </div>
</template>

<script>
import DesktopIcon from "../components/DesktopIcon.vue";
import TaskBar from "../components/TaskBar.vue";
import Wizard from "../components/Wizard.vue";

export default {
  name: "DesktopView",
  data: function () {
    const vm = this;
    return {
      show: false,
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
          onclick: () => (vm.show = true),
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
  mounted: function () {
    setTimeout(() => {
      document.body.style.cursor = "default";
    }, 3000);
  },
  components: {
    DesktopIcon,
    TaskBar,
    Wizard,
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
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.dialogs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
