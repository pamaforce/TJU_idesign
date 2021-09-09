<template>
  <div class="major-class">
    <div class="nav-class noselect">
      <div class="h-class" @click="changeStatue">
        <p style="color: #6c6c6c">作品展示</p>
        <v-icon
          :class="[statue ? '' : 'rotated']"
          style="position: absolute; right: 0; top: 3.7px"
          >mdi-chevron-down</v-icon
        >
      </div>
      <div
        class="h-class h-item-class"
        :style="statue ? 'max-height: 700px' : 'max-height: 0'"
      >
        <div style="position: relative" @click="changeSubStatue">
          <p
            :style="
              $route.name > 'o' && $route.name < 'r'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            优秀课程设计
          </p>
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
          <p
            :style="$route.name == 'p' ? 'font-weight:600;color:#4e4e4e' : ''"
            class="h-class subH-class"
            @click="to('p')"
          >
            本科生
          </p>

          <p
            :style="$route.name == 'q' ? 'font-weight:600;color:#4e4e4e' : ''"
            class="h-class subH-class"
            @click="to('q')"
          >
            研究生
          </p>
        </div>
        <p
          :style="$route.name == 'r' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('r')"
        >
          优秀毕业设计
        </p>
        <p
          :style="$route.name == 's' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('s')"
        >
          校企合作成果
        </p>
        <p
          :style="$route.name == 't' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('t')"
        >
          获奖作品
        </p>
      </div>
    </div>
    <router-view class="router-class" />
  </div>
</template>
<script>
export default {
  name: "gallery",
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
    changeSubStatue() {
      this.subStatue = !this.subStatue;
    },
  },
  watch: {
    $route() {
      if (this.$route.name > "o" && this.$route.name < "r") {
        this.subStatue = true;
      }
    },
  },
  created: function () {
    if (this.$route.name > "o" && this.$route.name < "r") {
      this.subStatue = true;
    }
  },
};
</script>
<style scoped>
.router-class {
  position: relative;
  top: 140px;
  left: 360px;
  width: 829px;
}
.major-class {
  position: relative;
  width: 1264px;
  min-height: 800px;
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
.subH-item-class {
  font-weight: 400;
  font-size: 17px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
}
.subH-item-class p {
  font-size: 15px;
  padding-left: 20px;
}
.subH-class:hover {
  font-weight: 600;
}
.subH-class {
  font-weight: 400;
  font-size: 17px;
  padding-left: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #4e4e4e;
  padding-bottom: 5px;
}
</style>