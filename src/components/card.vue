<template>
  <div
    class="card-class"
    v-if="!this.isPhone || JSON.stringify(data) != '{}'"
    :title="data.title"
  >
    <div
      v-if="JSON.stringify(data) != '{}'"
      @click="toCard"
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
      <p class="title-class">{{ data.title }}</p>
      <p class="date-class">{{ data.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myCard",
  props: {
    data: Object,
    from: String,
    list: String,
    current: Number,
  },
  data: () => ({
    isPhone: false,
  }),
  methods: {
    toCard() {
      if (
        this.from.split("_")[0] == "innovationAndEntrepreneurship" ||
        this.from.split("_")[0] == "cooperation"
      )
        this.$router.push(
          "/education/" +
            this.data.category_id +
            "/" +
            this.data.id +
            "?from=" +
            this.from +
            "&list=" +
            this.list +
            "&current=" +
            this.current
        );
      else if (
        this.from.split("_")[0] == "EnglishCourse" ||
        this.from.split("_")[0] == "designWorkshop" ||
        this.from.split("_")[0] == "seminar"
      )
        this.$router.push(
          "/internationalExchange/" +
            this.data.category_id +
            "/" +
            this.data.id +
            "?from=" +
            this.from +
            "&list=" +
            this.list +
            "&current=" +
            this.current
        );
      else
        this.$router.push(
          "/news/" +
            this.data.category_id +
            "/" +
            this.data.id +
            "?from=" +
            this.from +
            "&list=" +
            this.list +
            "&current=" +
            this.current
        );
    },
  },
  created: function () {
    this.isPhone = window.matchMedia("(max-width:768px)").matches;
  },
};
</script>
<style scoped>
.card-class {
  width: 250px;
  /* background-color: blueviolet; */
  margin-top: 15px;
  margin-bottom: 25px;
  position: relative;
}
.card-class:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.title-class {
  font-size: 15px;
  text-align: justify;
  color: #4e4e4e;
}
.date-class {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 0;
  font-size: 12px;
  color: #6c6c6c;
}
@media screen and (max-width: 768px) {
  .card-class {
    width: calc(100vw - 30px);
  }
}
</style>