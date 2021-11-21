<template>
  <div class="news-class">
    <template v-if="JSON.stringify(data) != '{}'">
      <v-img
        lazy-src="../assets/photo.jpg"
        :src="data.src"
        @click="toNews"
        style="width: 100%; height: 190px; cursor: pointer"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <div class="info-class">
        <p>[{{ data.type }}]</p>
        <p>{{ data.date }}</p>
      </div>
      <p class="title-class" @click="toNews">
        {{ data.title }}
      </p>
    </template>
  </div>
</template>
<script>
export default {
  name: "myNews",
  props: {
    data: Object,
    from: String,
    list: String,
    current: Number,
  },
  methods: {
    toNews() {
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
};
</script>
<style scoped>
.title-class:hover,
img:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.title-class {
  color: #4e4e4e;
  font-size: 18px;
  cursor: pointer;
  text-align: justify;
}
.news-class {
  display: inline-block;
  margin-top: 25px;
  width: 338px;
}
.info-class {
  font-size: 15px;
  color: #a6a6a6;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a6a6a6;
  margin-bottom: 5px;
}
.info-class p {
  display: inline;
  margin-bottom: 2px;
}
@media screen and (max-width: 1264px) {
  .title-class {
    font-size: 16px;
  }
  .info-class {
    font-size: 13px;
  }
  .news-class {
    height: 260px;
  }
}
</style>