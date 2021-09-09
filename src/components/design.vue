<template>
  <div class="design-class">
    <div
      v-if="JSON.stringify(data) != '{}'"
      @click="toDesign"
      style="cursor: pointer"
    >
      <img :src="data.src" />
      <p class="name-class">{{ data.name }}</p>
      <p class="teacher-class">任课教师：</p>
      <p class="teacher-class">{{ data.str1 }}</p>
      <p class="teacher-class">{{ data.str2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myDesign",
  props: {
    data: Object,
    from: String,
    list: String,
    current: Number,
  },
  methods: {
    toDesign() {
      //   if (
      //     this.from.split("_")[0] == "innovationAndEntrepreneurship" ||
      //     this.from.split("_")[0] == "cooperation"
      //   )
      //     this.$router.push(
      //       "/education/" +
      //         this.data.category_id +
      //         "/" +
      //         this.data.id +
      //         "?from=" +
      //         this.from +
      //         "&list=" +
      //         this.list +
      //         "&current=" +
      //         this.current
      //     );
      //   else if (
      //     this.from.split("_")[0] == "EnglishCourse" ||
      //     this.from.split("_")[0] == "designWorkshop" ||
      //     this.from.split("_")[0] == "seminar"
      //   )
      //     this.$router.push(
      //       "/internationalExchange/" +
      //         this.data.category_id +
      //         "/" +
      //         this.data.id +
      //         "?from=" +
      //         this.from +
      //         "&list=" +
      //         this.list +
      //         "&current=" +
      //         this.current
      //     );
      //   else
      //     this.$router.push(
      //       "/news/" +
      //         this.data.category_id +
      //         "/" +
      //         this.data.id +
      //         "?from=" +
      //         this.from +
      //         "&list=" +
      //         this.list +
      //         "&current=" +
      //         this.current
      //     );
    },
  },
};
</script>
<style scoped>
.design-class {
  width: 250px;
  height: 215px;
  /* background-color: blueviolet; */
  margin: 15px 0;
  position: relative;
}
.design-class:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.design-class img {
  width: 100%;
  height: 140px;
}
.name-class {
  font-weight: 700;
  font-size: 15px;
  text-align: justify;
  margin-bottom: 4px;
  color: #4e4e4e;
}
.teacher-class {
  float: left;
  margin-bottom: 0;
  font-size: 12px;
  color: #4e4e4e;
}
</style>