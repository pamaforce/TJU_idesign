<template>
  <v-app>
    <my-navigation />
    <router-view />
    <my-footer />
  </v-app>
</template>

<script>
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
</style>