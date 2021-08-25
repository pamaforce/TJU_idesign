<template>
  <div class="major-class">
    <div class="nav-class">
      <div class="h-class" @click="changeStatue">
        <p>专业介绍</p>
        <v-icon
          :class="[statue ? '' : 'rotated']"
          style="position: absolute; right: 0; top: 3.7px"
          >mdi-chevron-down</v-icon
        >
      </div>
      <div
        class="h-class h-item-class"
        :style="statue ? 'max-height: 400px' : 'max-height: 0'"
      >
        <p style="padding-left: 10px">使命愿景</p>
        <p style="padding-left: 10px">发展历程</p>
        <p style="padding-left: 10px">办学条件</p>
        <div style="position: relative" @click="changeSubStatue">
          <p style="padding-left: 10px" class="h-class subH-class">师资队伍</p>
          <v-icon
            :class="[subStatue ? '' : 'rotated']"
            style="position: absolute; right: 0; top: 0"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="h-class subH-item-class"
          :style="subStatue ? 'max-height: 400px' : 'max-height: 0'"
        >
          <p style="padding-left: 20px">博士生导师</p>
          <p style="padding-left: 20px">硕士生导师</p>
          <p style="padding-left: 20px">实验教师</p>
        </div>
        <p style="padding-left: 10px; position: relative; top: 0px">联系我们</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "majorIntroduction",
  data: () => ({
    statue: true,
    subStatue: false,
  }),
  methods: {
    changeStatue() {
      this.statue = !this.statue;
    },
    changeSubStatue() {
      this.subStatue = !this.subStatue;
    },
  },
};
</script>
<style scoped>
.major-class {
  position: relative;
  width: 1264px;
  min-height: 800px;
  margin: 0 auto;
}
.nav-class {
  position: absolute;
  top: 150px;
  left: 75px;
  width: 240px;
  font-size: 19px;
  color: #4e4e4e;
}
.h-class {
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  overflow: hidden;
}
.h-class p {
  margin-bottom: 5px;
  border-bottom: 1px solid #4e4e4e;
  padding-bottom: 5px;
}
.rotated {
  transform: rotate(90deg);
}
.h-item-class {
  padding-top: 7px;
  font-weight: 400;
  font-size: 17px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
}
.h-item-class p:hover {
  font-weight: 600;
}
.subH-item-class {
  padding-top: 7px;
  font-weight: 400;
  font-size: 17px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
}
.subH-item-class p {
  font-size: 15px;
}
.subH-class {
  font-weight: 400;
  font-size: 17px;
}
</style>