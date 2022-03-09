<template>
  <div>
    <my-breadcrumbs title="联系我们" />
    <div v-html="html" style="margin-top: 20px" id="theNews"></div>
    <!-- <img
       
      src="../../assets/contactUs.jpg"
      style="width: 100%; margin: 30px 0"
    />
    <p>地址：中国·天津市津南区雅观路135号北洋园校区35教学楼</p>
    <p>电话：022-27402172</p>
    <p>邮箱：idesign@tju.edu.cn</p>
    <p>邮编：300354</p> -->
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "contactUs",
  components: {
    myBreadcrumbs,
  },
  data: () => ({
    html: "",
  }),
  methods: {
    findPage() {
      service("/portal/api_v1/get_page?id=128").then((data) => {
        this.html = data.data.post_content;
      });
    },
  },
  watch: {
    $route() {
      this.findPage();
    },
  },
  created: function () {
    this.findPage();
  },
};
</script>
<style scoped>
/* div p {
  font-size: 16px;
  color: #6c6c6c;
} */
#theNews img {
  max-width: 100% !important;
  height: auto !important;
  display: block;
  margin: 0 auto;
}
</style>