<template>
  <div>
    <my-breadcrumbs title="联系我们" />
    <img
      v-image-preview
      src="../../assets/contactUs.jpg"
      style="width: 100%; margin: 30px 0"
    />
    <p>地址：中国·天津市津南区雅观路135号北洋园校区35教学楼</p>
    <p>电话：022-27402172</p>
    <p>邮箱：idesign@tju.edu.cn</p>
    <p>邮编：300354</p>
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
export default {
  name: "contactUs",
  components: {
    myBreadcrumbs,
  },
};
</script>
<style scoped>
div p {
  font-size: 16px;
  color: #6c6c6c;
}
</style>