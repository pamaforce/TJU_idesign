<template>
  <v-app>
    <my-navigation />
    <router-view />
    <my-footer />
  </v-app>
</template>

<script>
if (window) {
  const { aplus_queue } = window;
  aplus_queue.push({
    action: "aplus.sendPV",
    arguments: [
      {
        is_auto: false,
      },
    ],
  });
}
import myFooter from "./components/footer.vue";
import myNavigation from "./components/navigation.vue";

export default {
  name: "App",
  components: {
    myNavigation,
    myFooter,
  },
  created: function () {
    console.log(
      "%cIf you find bugs in the website, you can email to %c3020205094@tju.edu.cn %cand let's make it better together! :)",
      "color: #43bb88;font-size:19px;font-weight: bold;",
      "color: #4267fc;font-size:19px;font-weight: bold;font-style: italic;",
      "color: #43bb88;font-size:19px;font-weight: bold;"
    );
  },
};
</script>
<style>
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.25);
  transition: color 0.2s ease;
}
.noselect {
  -webkit-user-select: none;
  -moz-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.v-skeleton-loader__image {
  height: 110px !important;
  border-radius: 6px !important;
  margin-bottom: 15px !important;
}
.v-skeleton-loader__list-item-two-line,
.v-skeleton-loader__list-item {
  padding: 0 !important;
  height: 56px !important;
}
.items-class .v-skeleton-loader__image {
  height: 190px !important;
  border-radius: 6px !important;
  margin-bottom: 15px !important;
}
.v-image__placeholder {
  display: none;
}
.video-js {
  width: 100%;
  height: inherit;
}
.dot-ani {
  display: inline-block;
  height: 12px;
  line-height: 12px;
  overflow: hidden;
}
.dot-ani::after {
  display: inline-table;
  white-space: pre;
  content: "\A.\A..\A...";
  animation: spin 2s steps(4) infinite;
}
@keyframes spin {
  to {
    -webkit-transform: translateY(-48px);
    transform: translateY(-48px);
  }
}
</style>