<template>
  <div class="major-class">
    <div class="nav-class noselect">
      <div class="h-class" @click="changeStatue">
        <p style="color: #6c6c6c">国际交流</p>
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
        <p
          :style="
            $route.name == 'y1' || $route.params.category_id == 36
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('y1')"
        >
          全英文课程
        </p>
        <p
          :style="
            $route.name == 'y2' || $route.params.category_id == 37
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('y2')"
        >
          设计工作坊
        </p>
        <p
          :style="
            $route.name == 'y3' || $route.params.category_id == 38
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('y3')"
        >
          设计教育研讨会
        </p>
      </div>
    </div>
    <router-view class="router-class" />
  </div>
</template>
<script>
export default {
  name: "news",
  data: () => ({
    statue: true,
    subStatue: false,
  }),
  methods: {
    to(i) {
      if (i != this.$route.name) this.$router.push({ name: i });
    },
    changeStatue() {
      this.statue = !this.statue;
    },
  },
};
</script>
<style scoped>
.router-class {
  position: relative;
  top: 140px;
  left: 360px;
  width: 829px;
  min-height: 500px;
}
.major-class {
  position: relative;
  width: 1264px;
  margin: 0 auto;
  margin-bottom: 190px;
}
.nav-class {
  position: absolute;
  top: 150px;
  left: 75px;
  width: 240px;
  font-size: 19px;
  color: #a6a6a6;
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
.h-item-class p {
  padding-left: 10px;
}
.h-item-class p:hover {
  font-weight: 600;
}
@media screen and (max-width: 1264px) {
  .router-class {
    width: calc(100vw - 435px);
  }
  .major-class {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .nav-class {
    display: none;
  }
  .major-class {
    margin-top: 90px;
    margin-bottom: 20px;
    width: 100%;
    padding: 0 15px;
  }
  .router-class {
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>