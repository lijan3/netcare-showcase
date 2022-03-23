<template>
  <div class="card card-tertiary card-dialog">
    <div class="card-header text-left">
      <span>Welcome</span>
    </div>
    <div class="card-body">
      <div class="card-content">
        <h1 class="card-heading">
          <span>Welcome to</span>
          <span class="windows">Netcare</span>
          <span class="ninetyfive">95</span>
        </h1>
        <Welcome
          v-if="showWelcome"
          @showTeam="showTeamDialog()"
          @showCulture="showCultureDialog()"
          @close="$emit('close')"
        />
        <Team v-if="showTeam" @close="showWelcomeDialog()" />
        <Culture
          v-if="showCulture"
          @showKnowledgeShare="showKnowledgeShareDialog()"
          @close="showWelcomeDialog()"
        />
        <KnowledgeShare
          v-if="showKnowledgeShare"
          @close="showCultureDialog()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "./Welcome/Welcome.vue";
import Team from "./Welcome/Team.vue";
import Culture from "./Welcome/Culture.vue";
import KnowledgeShare from "./Welcome/KnowledgeShare.vue";

export default {
  name: "WelcomeDialog",
  data: function () {
    return {
      showWelcome: true,
      showTeam: false,
      showCulture: false,
      showKnowledgeShare: false,
    };
  },
  methods: {
    showWelcomeDialog: function () {
      this.showTeam = false;
      this.showCulture = false;
      this.showWelcome = true;
    },
    showTeamDialog: function () {
      this.showWelcome = false;
      this.showTeam = true;
    },
    showCultureDialog: function () {
      this.showWelcome = false;
      this.showKnowledgeShare = false;
      this.showCulture = true;
    },
    showKnowledgeShareDialog: function () {
      this.showCulture = false;
      this.showKnowledgeShare = true;
    },
  },
  components: {
    Welcome,
    Team,
    Culture,
    KnowledgeShare,
  },
};
</script>

<style scoped>
.card-heading {
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.windows,
.ninetyfive {
  display: inline-block;
  transform: scaleY(0.9);
}

.windows {
  font-family: "FranklinGothic";
  font-weight: bold;
  letter-spacing: -1px;
  color: black;
  margin-left: 8px;
}

.ninetyfive {
  font-family: "Arial";
  letter-spacing: -3px;
  color: white;
  margin-left: 4px;
}
</style>
