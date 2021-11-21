<template>
  <div class="paging-class noselect">
    <v-icon class="arrow-class" @click="preIndex" v-if="totalIndex > 0"
      >mdi-menu-left</v-icon
    >
    <p
      class="index-class"
      v-for="item in totalIndex"
      :key="item"
      :style="item == currentIndex ? 'color:#4e4e4e;font-weight:700' : ''"
      @click="changeIndex(item)"
    >
      {{ item }}
    </p>
    <v-icon class="arrow-class" @click="nextIndex" v-if="totalIndex > 0"
      >mdi-menu-right</v-icon
    >
  </div>
</template>
<script>
export default {
  name: "myPaging",
  props: {
    totalIndex: Number,
    currentIndex: Number,
  },
  methods: {
    changeIndex(index) {
      if (index != this.currentIndex) {
        window.scrollTo(0, 0);
        this.$emit("changeIndex", index);
      }
    },
    preIndex() {
      if (this.currentIndex > 1) {
        window.scrollTo(0, 0);
        this.$emit("changeIndex", this.currentIndex - 1);
      }
    },
    nextIndex() {
      if (this.currentIndex < this.totalIndex) {
        window.scrollTo(0, 0);
        this.$emit("changeIndex", this.currentIndex + 1);
      }
    },
  },
};
</script>
<style scoped>
.noselect {
  -webkit-user-select: none;
  -moz-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.paging-class {
  text-align: center;
  margin: 10px auto;
  width: 100%;
}
.index-class {
  display: inline-block;
  margin: 0 8px;
  cursor: pointer;
  color: #6c6c6c;
}
.arrow-class {
  cursor: pointer;
}
</style>
<style>
.theme--light.v-icon:focus::after {
  opacity: 0;
}
</style>