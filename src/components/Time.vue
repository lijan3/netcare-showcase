<template>
  <div class="time">{{ time }}</div>
</template>

<script>
export default {
  name: "Time",
  data: function () {
    return {
      time: null,
    };
  },
  mounted: function () {
    this.getTime();
  },
  methods: {
    getTime: function () {
      const vm = this;
      const date = new Date();
      let hours = date.getHours();
      let session = "AM";
      if (hours == 0) {
        hours = 12;
      }
      if (hours > 12) {
        hours = hours - 12;
        session = "PM";
      }
      vm.time = `${hours}:${("0" + date.getMinutes()).slice(-2)} ${session}`;
      setTimeout(vm.getTime, 30000);
    },
  },
};
</script>

<style scoped>
.time {
  display: flex;
  align-items: center;
}
</style>
