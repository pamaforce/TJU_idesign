<template>
  <div
    class="detail-class"
    v-if="!this.isPhone || JSON.stringify(data) != '{}'"
  >
    <div
      v-if="JSON.stringify(data) != '{}'"
      @click="toDetail"
      style="cursor: pointer"
    >
      <img :src="data.src" />
      <p class="title-class">{{ data.title }}</p>
      <p class="author-class" v-for="(item, i) in data.authors" :key="i">
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myDetail",
  props: {
    data: Object,
  },
  data: () => ({
    isPhone: false,
  }),
  methods: {
    toDetail() {
      this.$router.push(
        "/gallery/" + this.data.category_id + "/" + this.data.id
      );
    },
  },
  created: function () {
    this.isPhone = window.matchMedia("(max-width:768px)").matches;
  },
};
</script>
<style scoped>
.detail-class {
  width: 250px;
  height: 190px;
  /* background-color: blueviolet; */
  margin: 15px 0;
  position: relative;
}
.detail-class:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.detail-class img {
  width: 100%;
  height: 140px;
}
.title-class {
  font-size: 18px;
  text-align: justify;
  margin-bottom: 4px;
  color: #4e4e4e;
}
.author-class {
  margin-right: 3px;
  float: left;
  margin-bottom: 0;
  font-size: 12px;
  color: #6c6c6c;
}
@media screen and (max-width: 768px) {
  .detail-class {
    width: calc(100vw - 30px);
    height: calc(76vw - 22.8px);
  }
  .detail-class img {
    width: calc(100vw - 30px);
    height: calc(56vw - 16.8px);
  }
}
</style>