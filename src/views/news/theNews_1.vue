<template>
  <div>
    <p class="title-class">
      {{ title }}
    </p>
    <p class="info-class">
      阅读量 {{ hits }}&nbsp;&nbsp;&nbsp;发布时间 {{ time }}
    </p>
    <div v-html="html" id="theNews"></div>
    <my-fork :list="list" :current="current" :from="from" />
  </div>
</template>
<script>
import myFork from "../../components/fork.vue";
import service from "../../utils/request.js";
export default {
  name: "theNews_1",
  components: {
    myFork,
  },
  props: { list: String, current: String, from: String },
  data: () => ({
    html: "",
    title: "",
    hits: 0,
    time: "1970-01-01 08:00",
  }),
  methods: {
    findNews() {
      service(
        "/portal/api_v1/get_new_detail?id=" +
          this.$route.params.id +
          "&category_id=" +
          this.$route.params.category_id
      ).then((data) => {
        this.html = data.data.post_content;
        this.title = data.data.post_title.trim();
        this.hits = data.data.post_hits;
        this.time =
          new Date(data.data.published_time * 1000).toJSON().slice(0, 10) +
          " " +
          new Date(data.data.published_time * 1000).toJSON().slice(11, 16);
      });
    },
  },
  watch: {
    $route() {
      this.findNews();
    },
  },
  created: function () {
    this.findNews();
  },
};
</script>
<style scoped>
.title-class {
  font-size: 28px;
  font-weight: 700;
  color: #4e4e4e;
  margin-bottom: 10px;
  text-align: justify;
}
.info-class {
  width: 100%;
  text-align: right;
  font-size: 16px;
  color: #4e4e4e;
  padding-bottom: 10px;
  margin-bottom: 0;
}
</style>
<style>
#theNews img {
  max-width: 100% !important;
  height: auto !important;
  display: block;
  margin: 0 auto;
}
</style>