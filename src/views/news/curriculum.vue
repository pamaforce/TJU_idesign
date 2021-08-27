<template>
  <div>
    <my-breadcrumbs title="学习" subTitle="课程" />
    <p @click="to">hhh</p>
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "curriculum",
  components: {
    myBreadcrumbs,
  },
  methods: {
    to() {
      service("/portal/api_v1/get_new_home?per_page=12&current_page=1").then(
        (data) => {
          console.log(data.data);
        }
      );
    },
  },
};
</script>