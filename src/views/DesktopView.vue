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
        <WelcomeDialog v-if="showWelcome" @close="closeWelcomeDialog" />
        <Care4YouWizard
          v-if="Care4YouShow"
          title="Care4You Setup"
          @cancel="Care4YouCancel"
          @finish="Care4YouComplete"
        />
        <EDRWizard
          v-if="EDRShow"
          title="EDR Setup"
          @cancel="EDRShow = false"
          @finish="EDRComplete"
        />
      </div>
    </div>
    <task-bar :windows="windows" @showWelcome="showWelcomeDialog"></task-bar>
  </div>
</template>

<script>
import DesktopIcon from "../components/DesktopIcon.vue";
import TaskBar from "../components/TaskBar.vue";
import WelcomeDialog from "../components/WelcomeDialog.vue";
import Care4YouWizard from "../components/Care4You/Care4You.vue";
import EDRWizard from "../components/EDR/EDR.vue";

export default {
  name: "DesktopView",
  data: function () {
    const vm = this;
    return {
      showWelcome: false,
      showKnowledgeShare: false,
      Care4YouShow: false,
      EDRShow: false,
      windows: [],
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
          onclick: () => {
            vm.Care4YouShow = true;
            vm.windows.push({
              key: "Care4You-setup",
              icon: "executable-0.png",
              label: "C4Y-setup",
            });
          },
        },
        {
          key: "EDRInstall",
          img: "executable-0.png",
          label: "EDR-setup.exe",
          onclick: () => (vm.EDRShow = true),
        },
      ],
    };
  },
  mounted: function () {
    const vm = this;
    setTimeout(() => {
      document.body.style.cursor = "default";
      vm.showWelcomeDialog();
    }, 3000);
  },
  methods: {
    closeWindow: function (key) {
      const index = this.windows.findIndex((w) => w.key === key);
      this.windows = [
        ...this.windows.slice(0, index),
        ...this.windows.slice(index + 1),
      ];
    },
    showWelcomeDialog: function () {
      this.showWelcome = true;
      this.windows.push({
        key: "Welcome",
        label: "Welcome",
      });
    },
    closeWelcomeDialog: function () {
      this.showWelcome = false;
      this.closeWindow("Welcome");
    },
    // Care4You
    Care4YouCancel: function () {
      this.Care4YouShow = false;
      this.closeWindow("Care4You-setup");
    },
    Care4YouComplete: function () {
      const vm = this;
      vm.Care4YouShow = false;
      vm.closeWindow("Care4You-setup");
      vm.icons.push({
        key: "Care4You",
        img: "directory_closed-4.png",
        label: "Care4You",
        onclick: () => {},
      });
    },
    EDRComplete: function () {
      this.EDRShow = false;
      this.icons.push({
        key: "EDR",
        img: "wm_file-5.png",
        label: "EDRShow",
        onclick: () => {},
      });
    },
  },
  components: {
    DesktopIcon,
    TaskBar,
    WelcomeDialog,
    Care4YouWizard,
    EDRWizard,
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

.dialogs > .card {
  z-index: 1;
}

.dialogs > .card.secondary-dialog {
  position: absolute;
  z-index: 2;
  margin-left: 100px;
}
</style>
