<template>
  <div>
    <p class="title-class">
      {{ title }}
    </p>
    <pre class="info-class">阅读量 {{ hits }}  发布时间 {{ time }}</pre>
    <div v-html="html" id="theNews"></div>
  </div>
</template>
<script>
import service from "../../utils/request.js";
export default {
  name: "theNews",
  data: () => ({
    html: "",
    title: "",
    hits: 0,
    time: "1970-01-01 08:00",
  }),
  created: function () {
    service(
      "/portal/api_v1/get_new_detail?id=" +
        this.$route.params.id +
        "&category_id=" +
        this.$route.params.category_id
    ).then((data) => {
      console.log(data.data);
      this.html = data.data.post_content;
      this.title = data.data.post_title.trim();
      this.hits = data.data.post_hits;
      this.time =
        new Date(data.data.published_time * 1000).toJSON().slice(0, 10) +
        " " +
        new Date(data.data.published_time * 1000).toJSON().slice(11, 16);
    });
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
  text-align: right;
  font-size: 16px;
  color: #4e4e4e;
  padding-bottom: 10px;
}
</style>
<style>
#theNews img {
  width: 100% !important;
  height: auto !important;
}
</style>