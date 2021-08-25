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

  data: () => ({
    //
  }),
};
</script>
<style scoped>
</style>
