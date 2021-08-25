<template>
  <div class="news-class">
    <img style="width: 100%; height: 200px; cursor: pointer" :src="data.src" />
    <div class="info-class">
      <p>[{{ data.type }}]</p>
      <p>{{ data.date }}</p>
    </div>
    <p class="title-class">
      {{ data.title }}
    </p>
  </div>
</template>
<script>
export default {
  name: "myNews",
  props: {
    data: Object,
  },
  data: () => ({}),
  methods: {
    preDo() {},
  },
  mounted: function () {
    this.preDo();
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
  font-size: 19px;
  cursor: pointer;
  text-align: justify;
}
.news-class {
  display: inline-block;
  margin-top: 0px;
  margin: 35.66px;
  margin-bottom: 10px;
  width: 320px;
  height: 290px;
}
.info-class {
  font-size: 17px;
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
</style>