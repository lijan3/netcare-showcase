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
        <Care4YouWizard
          v-if="Care4YouShow"
          title="Care4You Setup"
          @cancel="Care4YouShow = false"
          @finish="Care4YouComplete"
        />
      </div>
    </div>
    <task-bar></task-bar>
  </div>
</template>

<script>
import DesktopIcon from "../components/DesktopIcon.vue";
import TaskBar from "../components/TaskBar.vue";
import Care4YouWizard from "../components/Care4You/Care4You.vue";

export default {
  name: "DesktopView",
  data: function () {
    const vm = this;
    return {
      Care4YouShow: false,
      icons: [
        {
          key: "MyComputer",
          img: "computer_explorer_cool-0.png",
          label: "My Computer",
          onclick: () => {},
        },
        {
          key: "InternetExplorer",
          img: "msie1-2.png",
          label: "Internet Explorer",
          onclick: () => {},
        },
        {
          key: "RecycleBin",
          img: "recycle_bin_empty_cool-0.png",
          label: "Recycle Bin",
          onclick: () => {},
        },
        {
          key: "Care4YouInstall",
          img: "executable-0.png",
          label: "C4Y-setup.exe",
          onclick: () => (vm.Care4YouShow = true),
        },
        {
          key: "EDR",
          img: "executable-0.png",
          label: "EDR-setup.exe",
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
  methods: {
    Care4YouComplete: function () {
      console.log("Care4YouComplete");
      this.Care4YouShow = false;
      this.icons.push({
        key: "Care4You",
        img: "wm_file-5.png",
        label: "Care4You",
        onclick: () => {},
      });
    },
  },
  components: {
    DesktopIcon,
    TaskBar,
    Care4YouWizard,
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
