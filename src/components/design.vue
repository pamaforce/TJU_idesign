<template>
  <div
    class="design-class"
    v-if="!this.isPhone || JSON.stringify(data) != '{}'"
    :title="data.name"
  >
    <div
      v-if="JSON.stringify(data) != '{}'"
      @click="toDesign"
      style="cursor: pointer"
    >
      <v-img
        lazy-src="../assets/photo.jpg"
        :src="data.src"
        :aspect-ratio="16 / 9"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <p class="name-class">{{ data.name }}</p>
      <p class="teacher-class" v-if="showTeacher">
        {{ "任课教师：" + data.str1 + " " + data.str2 }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myDesign",
  props: {
    data: Object,
    showTeacher: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    isPhone: false,
  }),
  methods: {
    toDesign() {
      window.scrollTo(0, 0);
      this.$emit("todesign", this.data);
    },
  },
  created: function () {
    this.isPhone = window.matchMedia("(max-width:768px)").matches;
  },
};
</script>
<style scoped>
.design-class {
  width: 250px;
  /* background-color: blueviolet; */
  margin: 15px 0;
  position: relative;
}
.design-class:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.name-class {
  font-weight: 700;
  font-size: 15px;
  text-align: justify;
  margin-bottom: 4px;
  color: #4e4e4e;
}
.teacher-class {
  margin-bottom: 0;
  font-size: 12px;
  color: #4e4e4e;
}
@media screen and (max-width: 768px) {
  .design-class {
    width: calc(100vw - 30px);
  }
}
</style>