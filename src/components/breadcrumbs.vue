<template>
  <div class="breadcrumbs-class">
    <p class="title-class">
      {{ title }}
    </p>
    <p v-if="this.subTitle != undefined" class="subTitle-class">
      /{{ subTitle }}/
    </p>
  </div>
</template>
<script>
export default {
  name: "myBreadcrumbs",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>
<style scoped>
.breadcrumbs-class {
  border-bottom: 3px solid #4e4e4e;
  display: inline-block;
}
.title-class {
  font-size: 28px;
  font-weight: 700;
  color: #4e4e4e;
  margin-bottom: 0px;
  display: inline-block;
}
.subTitle-class {
  font-size: 21px;
  color: #6c6c6c;
  margin: 0px 1px 2px 10px;
  display: inline-block;
}
@media screen and (max-width: 768px) {
  .title-class {
    font-size: 22px;
  }
  .subTitle-class {
    font-size: 18px;
  }
}
</style>