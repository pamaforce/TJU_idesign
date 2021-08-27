<template>
  <div>
    <my-breadcrumbs title="学习" subTitle="工作坊" />
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
export default {
  name: "workshop",
  components: {
    myBreadcrumbs,
  },
};
</script>