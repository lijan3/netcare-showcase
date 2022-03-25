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
          @cancel="EDRCancel"
          @finish="EDRComplete"
        />
        <QAWizard v-if="QAShow" title="Quality Assurance" @finish="QACancel" />
        <!-- Care4You demos-->
        <Dialog
          v-if="showSenderJourney"
          title="Care4You Sender Journey"
          image="src/assets/img/care4you/SenderJourney.gif"
          @close="closeSenderJourney"
        />
        <Dialog
          v-if="showAdminJourney"
          title="Care4You Admin Journey"
          image="src/assets/img/care4you/AdminJourney.gif"
          @close="closeAdminJourney"
        />
        <Dialog
          v-if="showReceiverJourney"
          title="Care4You Reciever Journey"
          image="src/assets/img/care4you/ReceiverJourney.gif"
          @close="closeReceiverJourney"
        />
        <Dialog
          v-if="showEDRDemo"
          title="EDR Demo"
          image="src/assets/img/edr/EDRDemo.gif"
          @close="showEDRDemo = false"
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
import QAWizard from "../components/QAWizard.vue";
import Dialog from "../components/Dialog.vue";

export default {
  name: "DesktopView",
  data: function () {
    const vm = this;
    return {
      showWelcome: false,
      showKnowledgeShare: false,
      Care4YouShow: false,
      showSenderJourney: false,
      showAdminJourney: false,
      showReceiverJourney: false,
      showEDRDemo: false,
      EDRShow: false,
      QAShow: false,
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
          onclick: () => {
            vm.EDRShow = true;
            vm.windows.push({
              key: "EDR-setup",
              icon: "executable-0.png",
              label: "EDR-setup",
            });
          },
        },
        {
          key: "QA",
          img: "accessibility_window_objs.png",
          label: "QA",
          onclick: () => {
            vm.QAShow = true;
            vm.windows.push({
              key: "QA",
              icon: "accessibility_window_objs.png",
              label: "Quality Assurance",
            });
          },
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
    EDRCancel: function () {
      this.EDRShow = false;
      this.closeWindow("EDR-setup");
    },
    QACancel: function () {
      this.QAShow = false;
      this.closeWindow("QA");
    },
    Care4YouComplete: function () {
      const vm = this;
      vm.Care4YouShow = false;
      vm.closeWindow("Care4You-setup");
      vm.icons.push({
        key: "C4Y-Sender",
        img: "wm_file-5.png",
        label: "C4Y-Sender",
        onclick: () => {
          this.showSenderJourney = true;
          this.windows.push({
            key: "C4Y-Sender",
            icon: "wm_file-5.png",
            label: "Care4You Sender Journey",
          });
        },
      });
      vm.icons.push({
        key: "C4Y-Admin",
        img: "wm_file-5.png",
        label: "C4Y-Admin",
        onclick: () => {
          this.showAdminJourney = true;
          this.windows.push({
            key: "C4Y-Admin",
            icon: "wm_file-5.png",
            label: "Care4You Admin Journey",
          });
        },
      });
      vm.icons.push({
        key: "C4Y-Receiver",
        img: "wm_file-5.png",
        label: "C4Y-Receiver",
        onclick: () => {
          this.showReceiverJourney = true;
          this.windows.push({
            key: "C4Y-Receiver",
            icon: "wm_file-5.png",
            label: "Care4You Receiver Journey",
          });
        },
      });
    },
    closeSenderJourney: function () {
      this.showSenderJourney = false;
      this.closeWindow("C4Y-Sender");
    },
    closeAdminJourney: function () {
      this.showAdminJourney = false;
      this.closeWindow("C4Y-Admin");
    },
    closeReceiverJourney: function () {
      this.showReceiverJourney = false;
      this.closeWindow("C4Y-Receiver");
    },
    EDRComplete: function () {
      const vm = this;
      vm.EDRShow = false;
      vm.icons.push({
        key: "EDR",
        img: "wm_file-5.png",
        label: "EDR-Demo",
        onclick: () => {
          this.showEDRDemo = true;
        },
      });
    },
  },
  components: {
    DesktopIcon,
    TaskBar,
    WelcomeDialog,
    Care4YouWizard,
    EDRWizard,
    QAWizard,
    Dialog,
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
